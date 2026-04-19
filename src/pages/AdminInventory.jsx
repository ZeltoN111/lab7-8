import { useEffect, useState } from "react";
import { getAll, deleteItem } from "../services/inventoryApi";
import InventoryTable from "../components/inventory/InventoryTable";
import { useNavigate } from "react-router-dom";

export default function AdminInventory() {
    const [items, setItems] = useState([]);
    const nav = useNavigate();

    const load = async () => {
        const data = await getAll();
        setItems(data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Delete?")) return;
        await deleteItem(id);
        load();
    };

    return (
        <>
            <h2>Admin</h2>
            <button onClick={() => nav("/admin/create")}>Add</button>

            <InventoryTable
                items={items}
                onDelete={handleDelete}
                onEdit={(id) => nav(`/admin/edit/${id}`)}
                onView={(id) => nav(`/admin/${id}`)}
            />
        </>
    );
}