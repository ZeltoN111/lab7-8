import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getById, getPhotoUrl } from "../services/inventoryApi";

export default function Details() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getById(id).then(setItem);
    }, []);

    if (!item) {
        return (
            <div className="loading">
                <div className="spinner" />
                Loading...
            </div>
        );
    }

    return (
        <>
            <Link to="/admin" className="details-back">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Admin
            </Link>

            <div className="details-card animate-in">
                <img className="details-img" src={getPhotoUrl(item.id)} alt={item.name} />
                <div className="details-body">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    );
}