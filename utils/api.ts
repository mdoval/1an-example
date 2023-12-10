export async function AddItem(item: IItem) {

  const nuevoItem = await fetch(`http://localhost:3004/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  return nuevoItem.json()
}

export async function AddFactura(factura: IFactura) {

  const nuevaFactura = await fetch(`http://localhost:3004/facturas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(factura),
  });
  
  return nuevaFactura.json()
}

export async function AddFacturaItems(factura: IFactura, items: IItem[]) {
  const nuevaFactura = await AddFactura(factura)
  items.map(async (item) =>  {
    item.facturaId = nuevaFactura.id
    await AddItem(item)
  })
}