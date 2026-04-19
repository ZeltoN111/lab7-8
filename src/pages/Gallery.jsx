import { useEffect, useState } from "react";
import { getAll } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Gallery() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAll().then(setItems);
    }, []);

    return <InventoryGallery items={items} />;
}