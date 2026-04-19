import { getPhotoUrl } from "../../services/inventoryApi";

export default function Table({ items, onDelete, onEdit, onView }) {
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Photo</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {items.map((i) => (
                <tr key={i.id}>
                    <td>{i.name}</td>
                    <td>{i.description}</td>
                    <td>
                        {i.photo && (
                            <img src={getPhotoUrl(i.id)} width="50" />
                        )}
                    </td>
                    <td>
                        <button onClick={() => onView(i.id)}>View</button>
                        <button onClick={() => onEdit(i.id)}>Edit</button>
                        <button onClick={() => onDelete(i.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}