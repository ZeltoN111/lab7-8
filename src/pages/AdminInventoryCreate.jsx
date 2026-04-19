import { Link, useNavigate } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";
import { createItem } from "../services/inventoryApi";

export default function Create() {
    const nav = useNavigate();

    const handle = async (formData) => {
        await createItem(formData);
        nav("/admin");
    };

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
                    <h1>Create Item</h1>
                </div>
            </div>
            <InventoryForm onSubmit={handle} />
        </>
    );
}