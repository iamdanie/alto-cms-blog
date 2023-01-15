import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { RiCloseCircleLine } from 'react-icons/ri'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <div className="modal-actions">
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-close-action">
          <RiCloseCircleLine onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  )
}

export default Modal
