export default function QuickView({ item }) {
    if (!item) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
}