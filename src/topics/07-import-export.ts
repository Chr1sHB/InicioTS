import { calcularCompra, Producto } from './06-desArgumentos';

const ComprarProd: Producto[] = [{
    descripcion: "Nokia",
    precio: 100
},
{
    descripcion: "IPad",
    precio: 200
}
];

const [ total,imptotal ] = calcularCompra({
    productos: ComprarProd,
    impuesto: 0.15 
});

console.log('Totl: ', total);
console.log('Impuesto:', imptotal);