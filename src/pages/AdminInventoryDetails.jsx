import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getPhotoUrl } from "../services/inventoryApi";

export default function Details() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getById(id).then(setItem);
    }, []);

    if (!item) return "Loading...";

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <img src={getPhotoUrl(item.id)} width="300" />
        </div>
    );
}