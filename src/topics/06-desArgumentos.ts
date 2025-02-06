export interface Producto {
    descripcion: string,
    precio: number
}

const telefono: Producto = {
    descripcion: 'Nokia A1',
    precio: 150.0
}

const tableta: Producto = {
    descripcion: 'iPad Air',
    precio: 250.0
}

interface ICalcularCompra {
    impuesto: number;
    productos: Producto[];
}

// function calcularCompra ( options: ICalcularCompra ): number[] {
//     let total = 0;
//     options.productos.forEach(productito => {
//         total += productito.precio;
//     });

//     return [total, total * options.impuesto];
// }




//* Con Desestructuracion
// function calcularCompra ( options: ICalcularCompra ): [number, number] puede ser esta forma
// function calcularCompra ( {impuesto, productos}: ICalcularCompra ): [number, number]
export function calcularCompra ( options: ICalcularCompra ): [number, number]{
    const { impuesto, productos } = options;
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    });
    return [total, total * impuesto]
}

const compras = [telefono, tableta];
console.log ("Detalle de la compra: ", compras);
const impuesto = 0.15;

const resultado = calcularCompra ({
    productos: compras,
    impuesto: impuesto,
});

console.log('Total 1:' , resultado[0]);
console.log('Total 2:' , resultado[1]);