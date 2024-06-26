import React, { useRef, useEffect } from 'react';
import CloseIcon from '../icons/CloseIcon';
import IconButton from '../buttons/IconButton';

import './style.scss';

/**
 * @typedef {Object} ModalProps
 * @property {React.ReactElement | Array.<React.ReactElement>} children The content of the modal
 * @property {string} title  The modal title
 * @property {boolean} isOpen The modal open state
 * @property {() => void} onClose The modal close handler
 * @property {string} [testId] The data-testid attribute
 */

/**
 * A component that displays a modal and its content
 *
 * @param {ModalProps} props
 * @returns {React.ReactElement}
 */
export default function Modal ({
  children, title, isOpen, onClose, testId
}) {
  const modalRef = useRef(null);

  function handleClickAway (e) {
    const dialogRect = modalRef.current.getBoundingClientRect();
    const clickedInsideDialog = dialogRect.top <= e.clientY && e.clientY <= dialogRect.bottom
            && dialogRect.left <= e.clientX && e.clientX <= dialogRect.right;

    if (!clickedInsideDialog) {
      onClose();
    }
  }

  useEffect(() => {
    if (!modalRef.current) return;

    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }

    modalRef.current.addEventListener('click', handleClickAway);
  }, [isOpen]);

  return (
    <dialog onClose={onClose} data-testid={testId || 'modal'} ref={modalRef} aria-modal="true" aria-label={title} className="dialog">
      <header className="dialog-title">
        <h2>{title}</h2>
        <IconButton
          testId="modal-close-button"
          label="Close"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </header>
      <div className="dialog-content">
        {children}
      </div>
    </dialog>
  );
}
