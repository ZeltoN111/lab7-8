import { useEffect, useState } from "react";
import { getAll } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Gallery() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAll()
            .then(setItems)
            .finally(() => setLoading(false));
    }, []);

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
                    <h1>Gallery</h1>
                    <p>{items.length} items in collection</p>
                </div>
            </div>
            <InventoryGallery items={items} />
        </>
    );
}