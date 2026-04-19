import InventoryCard from "./InventoryCard";
import useFavorites from "../../hooks/useFavorites";

export default function Gallery({ items }) {
    const { favorites, toggle } = useFavorites();

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
            {items.map((item) => (
                <InventoryCard
                    key={item.id}
                    item={item}
                    onFav={toggle}
                    isFav={favorites.find((f) => f.id === item.id)}
                />
            ))}
        </div>
    );
}