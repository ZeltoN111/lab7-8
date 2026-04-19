import { getPhotoUrl } from "../../services/inventoryApi";

export default function Card({ item, onFav, isFav }) {
    return (
        <div style={{ border: "1px solid gray", padding: 10 }}>
            <img src={getPhotoUrl(item.id)} width="100%" />
            <h4>{item.name}</h4>

            <button onClick={() => onFav(item)}>
                {isFav ? "❤️" : "🤍"}
            </button>
        </div>
    );
}