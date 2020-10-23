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
export{Geometria2}