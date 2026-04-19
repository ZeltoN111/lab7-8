export default function InventoryDetails({ item }) {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    );
}