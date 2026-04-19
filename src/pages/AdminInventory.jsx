import { useEffect, useState } from "react";
import { getAll, deleteItem } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import ConfirmModal from "../components/inventory/ConfirmModal";
import { useNavigate } from "react-router-dom";

export default function AdminInventory() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteId, setDeleteId] = useState(null);
    const nav = useNavigate();

    const load = async () => {
        const data = await getAll();
        setItems(data);
        setLoading(false);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async () => {
        await deleteItem(deleteId);
        setDeleteId(null);
        load();
    };

    if (loading) {
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
                    <h1>Admin Panel</h1>
                    <p>Manage your inventory items</p>
                </div>
                <button className="btn btn-primary" onClick={() => nav("/admin/create")}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Add Item
                </button>
            </div>

            <InventoryTable
                items={items}
                onDelete={(id) => setDeleteId(id)}
                onEdit={(id) => nav(`/admin/edit/${id}`)}
                onView={(id) => nav(`/admin/${id}`)}
            />

            {deleteId && (
                <ConfirmModal
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteId(null)}
                />
            )}
        </>
    );
}