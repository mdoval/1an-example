"use client";

import { useRouter } from "next/navigation";
import AddItemButton from "./AddItemButton";
import { ChangeEvent, useState } from "react";
import { AddFacturaItems } from "@/utils/api";

const Formulario = () => {
  const router = useRouter();
  const [factura, setFactura] = useState<IFactura>({ cliente: "" });
  const [items, setItems] = useState<IItem[]>([]);

  const handleGuardarFactura = async () => {
    await AddFacturaItems(factura, items)
    console.log("Factura Guardada")
    setFactura({cliente:""})
    setItems([])
  };

  const handleAddItem = (newItem: IItem) => {
    items.push(newItem);
    setItems(items);
    router.refresh();
  };

  return (
    <div className="flex flex-col space-y-2">
      <h1>Formulario 1 a N</h1>
      <br></br>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Nombre del cliente</span>
        </div>
        <input
          type="text"
          value={factura.cliente}
          onChange={(e) => setFactura({ ...factura, cliente: e.target.value })}
          placeholder="Nombre"
          className="input input-bordered w-full max-w-xs"
        />
      </label>
      <br></br>
      <AddItemButton addItem={handleAddItem} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: IItem, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.descripcion}</td>
                  <td>{item.precio}</td>
                  <td>Eliminar</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse">
        <button
          className="btn btn-success w-1/4"
          onClick={handleGuardarFactura}
        >
          Guardar Factura
        </button>
      </div>
    </div>
  );
};

export default Formulario;
