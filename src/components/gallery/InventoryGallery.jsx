import { useState } from "react";
import InventoryCard from "./InventoryCard";
import InventoryQuickView from "./InventoryQuickView";
import useFavorites from "../../hooks/useFavorites";

export default function InventoryGallery({ items }) {
    const { favorites, toggle } = useFavorites();
    const [quickItem, setQuickItem] = useState(null);

    if (!items.length) {
        return (
            <div className="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                </svg>
                <p>No items yet</p>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-grid">
                {items.map((item) => (
                    <InventoryCard
                        key={item.id}
                        item={item}
                        onFav={toggle}
                        isFav={favorites.find((f) => f.id === item.id)}
                        onQuickView={setQuickItem}
                    />
                ))}
            </div>

            <InventoryQuickView
                item={quickItem}
                onClose={() => setQuickItem(null)}
            />
        </>
    );
}