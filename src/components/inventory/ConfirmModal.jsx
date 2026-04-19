export default function ConfirmModal({ onConfirm, onCancel }) {
    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
        </div>
    );
}