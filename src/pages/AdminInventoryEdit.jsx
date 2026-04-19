import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

    if (!item) return "Loading...";
    return <InventoryForm onSubmit={handle} initial={item} />;
}