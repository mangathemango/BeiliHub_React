import React from 'react';

const Modal = ({ isOpen, onClose, title, description }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal show" onClick={handleOverlayClick}>
            <div className="modal-inner" role="dialog" aria-modal="true" aria-label="Course preview">
                <button className="modal-close" aria-label="Close preview" onClick={onClose}>
                    ✕
                </button>
                <div className="modal-body">
                    <div className="video-sim">▶</div>
                    <div className="video-meta">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;