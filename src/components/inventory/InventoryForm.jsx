import { useState } from "react";

export default function Form({ onSubmit, initial }) {
    const [name, setName] = useState(initial?.name || "");
    const [desc, setDesc] = useState(initial?.description || "");
    const [photo, setPhoto] = useState(null);

    const submit = (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append("inventory_name", name);
        fd.append("description", desc);
        if (photo) fd.append("photo", photo);
        onSubmit(fd);
    };

    return (
        <form onSubmit={submit}>
            <input value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
            <button>Save</button>
        </form>
    );
}