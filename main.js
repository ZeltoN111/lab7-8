import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { randomUUID } from 'crypto';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'localhost';
const PORT = 3000;
const CACHE_DIR = path.resolve('./cache');

if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    console.log(`Створено теку: ${CACHE_DIR}`);
}

const app = express();
const upload = multer({ dest: CACHE_DIR });

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let inventory = [];

app.post('/register', upload.single('photo'), (req, res) => {
    const { inventory_name, description } = req.body;
    if (!inventory_name) {
        return res.status(400).json({ error: 'inventory_name is required' });
    }
    const item = {
        id: randomUUID(),
        name: inventory_name,
        description: description || '',
        photo: req.file ? req.file.filename : null,
    };
    inventory.push(item);
    res.status(201).json({ message: 'Created', id: item.id });
});

app.get('/inventory', (req, res) => {
    res.json(inventory);
});

app.get('/inventory/:id', (req, res) => {
    const item = inventory.find(x => x.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
});

app.put('/inventory/:id', (req, res) => {
    const item = inventory.find(x => x.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    const { name, description } = req.body;
    if (name) item.name = name;
    if (description !== undefined) item.description = description;
    res.json({ message: 'Updated', item });
});

app.get('/inventory/:id/photo', (req, res) => {
    const item = inventory.find(x => x.id === req.params.id);
    if (!item || !item.photo) return res.status(404).json({ error: 'Photo not found' });
    const photoPath = path.join(CACHE_DIR, item.photo);
    if (!fs.existsSync(photoPath)) return res.status(404).json({ error: 'Photo file missing' });
    res.setHeader('Content-Type', 'image/jpeg');
    res.sendFile(photoPath);
});

app.put('/inventory/:id/photo', upload.single('photo'), (req, res) => {
    const item = inventory.find(x => x.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    if (item.photo) {
        const oldPath = path.join(CACHE_DIR, item.photo);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
    }
    item.photo = req.file.filename;
    res.json({ message: 'Photo updated' });
});

app.delete('/inventory/:id', (req, res) => {
    const index = inventory.findIndex(x => x.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Not found' });
    const [removed] = inventory.splice(index, 1);
    if (removed.photo) {
        const photoPath = path.join(CACHE_DIR, removed.photo);
        if (fs.existsSync(photoPath)) fs.unlinkSync(photoPath);
    }
    res.json({ message: 'Deleted' });
});

app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
    console.log(`Cache dir: ${CACHE_DIR}`);
});