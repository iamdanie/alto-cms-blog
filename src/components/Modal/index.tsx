import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactElement
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}

export default Modal
