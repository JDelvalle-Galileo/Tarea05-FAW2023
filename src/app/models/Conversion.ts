export class Conversion{
    grados:number;
    tipo:string;
    resultado:number;

    constructor (grados:number, tipo:string){
        this.grados = grados;
        this.tipo = tipo;
        this.resultado=NaN;
        switch(tipo){
            case "Cel": this.resultado = (grados*9/5) +32; break;
            case "Fhar": this.resultado = (grados-32)*5/9; break;
        }
    }
}