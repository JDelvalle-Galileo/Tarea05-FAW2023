export class Conversion{
    grados:number;
    tipo:string;
    celsius:number;
    fahrenheit:number;

    constructor (grados:number, tipo:string){
        this.grados = grados;
        this.tipo = tipo;
        this.celsius = NaN;
        this.fahrenheit = NaN;
        switch(tipo){
            case "Cel": this.celsius = grados; this.fahrenheit = (grados*9/5) +32; break;
            case "Fahr": this.fahrenheit = grados; this.celsius = (grados-32)*5/9; break;
        }
    }
}