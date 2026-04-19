import { useEffect } from "react";
import { getPhotoUrl } from "../../services/inventoryApi";

export default function QuickView({ item, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="quick-view-box" onClick={(e) => e.stopPropagation()}>
                <button className="quick-view-close" onClick={onClose} title="Close">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <div className="quick-view-img-wrap">
                    <img className="quick-view-img" src={getPhotoUrl(item.id)} alt={item.name} />
                </div>

                <div className="quick-view-body">
                    <div className="quick-view-tag">Item Details</div>
                    <h2 className="quick-view-name">{item.name}</h2>
                    {item.description && (
                        <p className="quick-view-desc">{item.description}</p>
                    )}
                    <div className="quick-view-meta">
                        <span className="quick-view-id">ID: #{item.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}