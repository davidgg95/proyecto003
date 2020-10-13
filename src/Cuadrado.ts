class Geometria3 {
    private _lado1 :number

    constructor(_lado1: number){
        this._lado1 = _lado1
    }
    getArea(){
        return this._lado1 ** 2 
    }
}
let cuadrado: Geometria3
cuadrado = new Geometria3(5)
console.log(`La area es: ${cuadrado.getArea()}`)