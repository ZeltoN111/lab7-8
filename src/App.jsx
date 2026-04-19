import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminInventory from "./pages/AdminInventory";
import AdminInventoryCreate from "./pages/AdminInventoryCreate";
import AdminInventoryEdit from "./pages/AdminInventoryEdit";
import AdminInventoryDetails from "./pages/AdminInventoryDetails";
import Gallery from "./pages/Gallery";
import Favorites from "./pages/Favorites";

export default function App() {
    return (
        <BrowserRouter>
            <nav style={{ display: "flex", gap: 10 }}>
                <Link to="/">Gallery</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/admin">Admin</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Gallery />} />
                <Route path="/favorites" element={<Favorites />} />

                <Route path="/admin" element={<AdminInventory />} />
                <Route path="/admin/create" element={<AdminInventoryCreate />} />
                <Route path="/admin/edit/:id" element={<AdminInventoryEdit />} />
                <Route path="/admin/:id" element={<AdminInventoryDetails />} />
            </Routes>
        </BrowserRouter>
    );
}