export default function QuickView({ item }) {
    if (!item) return null;
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
}