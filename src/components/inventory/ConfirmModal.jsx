export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="modal-actions">
                    <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                    <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}