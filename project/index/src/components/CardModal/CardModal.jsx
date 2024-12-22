import './CardModal.css';

export function CardModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
            {children}
          </div>
        </div>
    );
};