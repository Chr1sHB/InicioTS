class Persona {
    // public nombre: string;
    // public direccion: string;

    // constructor ( nombre1: string, direccion1: string ) {
    //     this.nombre = nombre1;
    //     this.direccion = direccion1;
    // }

    //forma correcta
    constructor(public nombre1:string, public direccion1:string,public peso:number){
        
    }

}       

const ObjPersona = new Persona ('Pedro', 'Puebla',12)

console.log(ObjPersona);

// export class SuperHero extends Persona{
//     constructor(public sobrenombre:string,public edad:number, public nombre:string){
//         super(nombre,"CDMX",80)
//     }
// }

// const pers = new SuperHero("Batman",40,"Bruno")
// console.log(pers);

export class SuperHero{
    constructor(public sobrenombre:string,public edad:number, public nombre:string, public person:Persona){
        this.person = new Persona(nombre,'',8);
    }
}

const objPer = new Persona("anita","CDMX",12);
const ana2 = new SuperHero("An",23,"anita",objPer);

console.log(objPer);
console.log(ana2);
