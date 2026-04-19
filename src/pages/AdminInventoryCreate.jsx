import { useNavigate } from "react-router-dom";
import InventoryForm from "../components/inventory/InventoryForm";
import { createItem } from "../services/inventoryApi";

export default function Create() {
    const nav = useNavigate();

    const handle = async (formData) => {
        await createItem(formData);
        nav("/admin");
    };

    return <InventoryForm onSubmit={handle} />;
}