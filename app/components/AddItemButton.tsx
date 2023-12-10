"use client";

import { FC, useState } from "react";
import Modal from "./Modal";

interface AddItemButtonProps {
  addItem: (newItem: IItem) => void
}

const AddItemButton: FC<AddItemButtonProps> = ({addItem}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [formItem, setFormItem] = useState<IItem>({descripcion: "", precio: 0})

  const handleOpenCloseModal = () => {
    setModalShow(!modalShow);
  };

  const handleGuardar = () => {
    addItem(formItem)
    setFormItem({descripcion: "", precio: 0})
    setModalShow(!modalShow);
  }

  return (
    <div>
      <button className="btn btn-primary w-1/4" onClick={handleOpenCloseModal}>
        Agregar Item
      </button>
      <Modal show={modalShow} onClose={handleOpenCloseModal} onGuardar={handleGuardar}>
        <h1>Formulario</h1>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Descripcion</span>
          </div>
          <input
            value={formItem.descripcion}
            onChange={(e) => setFormItem({...formItem, descripcion: e.target.value})}
            type="text"
            placeholder="Descripcion"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Precio</span>
          </div>
          <input
            value={formItem.precio}
            onChange={(e) => setFormItem({...formItem, precio: parseInt(e.target.value)})}
            type="number"
            placeholder="Precio"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </Modal>
    </div>
  );
};

export default AddItemButton;
