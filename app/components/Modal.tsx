'use client'

import { FC } from "react";

interface ModalProps {
  show: boolean,
  onClose: () => void,
  onGuardar: () => void
  children: React.ReactNode
}

const Modal: FC<ModalProps> = ({show, onClose, children, onGuardar}) => {
  return (
    <dialog id="my_modal_1" className={`modal ${show ? 'modal-open' : '' }`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Formulario de Item</h3>
        {children}
        <div className="modal-action">
            <button className="btn" onClick={onClose}>Close</button>
            <button className="btn" onClick={onGuardar}>Guardar</button>
        </div>
      </div>
    </dialog>
  );
};

export default Modal
