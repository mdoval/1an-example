interface IItem {
    id?: number,
    facturaId?: number
    descripcion: string,
    precio: number
}

interface IFactura {
    id?: number,
    cliente: string,
    items?: IItem[]      
}