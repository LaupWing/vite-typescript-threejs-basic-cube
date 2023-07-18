export default class Configuration {
    public color: number

    constructor() {
        this.color = 0xffccff
    }

    setter(key: keyof this, value: any){
        if(this[key] === undefined){
            throw Error("Configuration item is not available")
        }
    }
}