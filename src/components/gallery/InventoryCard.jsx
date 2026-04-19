import { getPhotoUrl } from "../../services/inventoryApi";

export default function InventoryCard({ item, onFav, isFav, onQuickView }) {
    return (
        <div className="inv-card animate-in" onClick={() => onQuickView(item)}>
            <img className="inv-card-img" src={getPhotoUrl(item.id)} alt={item.name} />

            <button
                className="inv-card-fav"
                onClick={(e) => { e.stopPropagation(); onFav(item); }}
                title={isFav ? "Remove from favorites" : "Add to favorites"}
            >
                {isFav ? "❤️" : "🤍"}
            </button>

            <div className="inv-card-body">
                <div className="inv-card-name">{item.name}</div>
                {item.description && (
                    <div className="inv-card-desc">{item.description}</div>
                )}
                <div className="inv-card-hint">Click to view details</div>
            </div>
        </div>
    );
}