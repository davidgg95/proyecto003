class Geometria {
    private _lado1 :number
    private _lado2 :number

    constructor(_lado1: number, _lado2: number){
        this._lado1 = _lado1
        this._lado2 = _lado2
    }
    getArea(){
        return this._lado1 * this._lado2
    }
}
export{Geometria}
