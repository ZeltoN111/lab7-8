import useFavorites from "../hooks/useFavorites";
import InventoryCard from "../components/gallery/InventoryCard";

export default function Favorites() {
    const { favorites, toggle } = useFavorites();

    return (
        <>
            <div className="page-header">
                <div>
                    <h1>Favorites</h1>
                    <p>{favorites.length} saved items</p>
                </div>
            </div>

            {favorites.length === 0 ? (
                <div className="empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <p>No favorites yet. Browse the gallery and add some!</p>
                </div>
            ) : (
                <div className="gallery-grid">
                    {favorites.map((item) => (
                        <InventoryCard
                            key={item.id}
                            item={item}
                            onFav={toggle}
                            isFav={true}
                        />
                    ))}
                </div>
            )}
        </>
    );
}