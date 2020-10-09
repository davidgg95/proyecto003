class Geometria2 {
    private _base :number
    private _altura :number

    constructor(_base: number, _altura: number){
        this._base = _base
        this._altura = _altura
    }
    getArea(){
        return this._base * this._altura /2
    }
}
let triangulo: Geometria2
triangulo = new Geometria2(20,2)
console.log(`La area es: ${triangulo.getArea()}`)