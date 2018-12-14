export interface Perfil{
altura:number;
peso:number;
edad:number;
sexo:string;
nivel: string;
    imc:any;
    grasa:any;
    agua:number;
    kcal:any;

}

export interface Alimento{
    id:string;
    nombre:string;
    caloria:number;
    porcion:number;
}
export interface ComidaPer{
    id:string;
    nombre:string;
    ingredientes:string;
    caloria:number;
    porcion:number;
}
export interface Dieta{
    id:string;
    nombre:string;
    car:number;
    pro:number;
    gra:number;
    carxdia:number;
    proxdia:number;
    graxdia:number;
}
export const snapshotToArray = snapshot=>{
    let returnArray =[];
    snapshot.forEach(element => {
        let item= element.val();
        item.key=element.key
        returnArray.push(item);
    });
    return returnArray
}