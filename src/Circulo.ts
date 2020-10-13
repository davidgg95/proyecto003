class Geometria4 {
    private _pi :number
    private _radio :number

    constructor(_pi: number, _radio: number){
        this._pi = _pi
        this._radio =_radio
    }
    getArea(){
        return this._pi * this._radio ** 2 
    }
}
let circulo: Geometria4
circulo = new Geometria4(3.14,2)
console.log(`La area es: ${circulo.getArea()}`)