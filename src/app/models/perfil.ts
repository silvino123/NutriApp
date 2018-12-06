export interface Perfil{
altura:number;
peso:number;
edad:number;
sexo:string;
nivel: string;
    imc:number;
    grasa:number;
    agua:number;
    kcal:number;

}

export interface Alimento{
    id:string;
    nombre:string;
    caloria:number;
    porcion:number;
}