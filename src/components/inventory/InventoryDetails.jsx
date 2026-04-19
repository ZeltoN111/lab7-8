export default function InventoryDetails({ item }) {
    return (
        <div className="details-body">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    );
}