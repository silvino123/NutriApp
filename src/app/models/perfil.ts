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

export const snapshotToArray = snapshot=>{
    let returnArray =[];
    snapshot.forEach(element => {
        let item= element.val();
        item.key=element.key
        returnArray.push(item);
    });
    return returnArray
}