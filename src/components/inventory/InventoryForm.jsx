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
        <div className="form-card animate-in">
            <h2>{initial ? "Edit Item" : "New Item"}</h2>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                        className="form-input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter item name..."
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-input"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Enter description..."
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Photo</label>
                    <label className={`form-file-label ${photo ? "has-file" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                        </svg>
                        {photo ? photo.name : "Click to upload photo"}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                    </label>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
                        </svg>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}