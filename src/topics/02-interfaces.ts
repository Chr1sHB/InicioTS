let datos: string[] = ['nombre','apellidoP','apellidoN'];
const masDatos: string[] = ['nombre','apellidoP','apellidoN'];

interface Iperfil{
    nombre: string;
    edad: number;
    sexo: string |undefined;
    puesto: string[];

}

const perfil:Iperfil={
    nombre: "Juan",
    edad: 30,
    sexo: "H",
    puesto:["Analista","Programador","Diseñador"]
}

perfil.nombre="Jenny";


console.table(perfil);