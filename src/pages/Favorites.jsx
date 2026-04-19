import useFavorites from "../hooks/useFavorites";
import InventoryCard from "../components/gallery/InventoryCard";

export default function Favorites() {
    const { favorites, toggle } = useFavorites();

    return (
        <div>
            <h2>Favorites</h2>
            {favorites.map((item) => (
                <InventoryCard
                    key={item.id}
                    item={item}
                    onFav={toggle}
                    isFav={true}
                />
            ))}
        </div>
    );
}