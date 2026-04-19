import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getById, updateItem } from "../services/inventoryApi";
import InventoryForm from "../components/inventory/InventoryForm";

export default function Edit() {
    const { id } = useParams();
    const nav = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getById(id).then(setItem);
    }, []);

    const handle = async (formData) => {
        const data = Object.fromEntries(formData);
        await updateItem(id, {
            name: data.inventory_name,
            description: data.description,
        });
        nav("/admin");
    };

    if (!item) {
        return (
            <div className="loading">
                <div className="spinner" />
                Loading...
            </div>
        );
    }

    return (
        <>
            <div className="page-header">
                <div>
                    <Link to="/admin" className="details-back">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                        </svg>
                        Back to Admin
                    </Link>
                    <h1>Edit Item</h1>
                </div>
            </div>
            <InventoryForm onSubmit={handle} initial={item} />
        </>
    );
}