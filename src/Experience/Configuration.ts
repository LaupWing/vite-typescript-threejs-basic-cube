export default class Configuration {
    public color: number
    private color_element: HTMLInputElement

    constructor() {
        this.color_element = document.querySelector("#color") as HTMLInputElement
        this.color = Number(this.color_element.value)
        console.log(this.color_element.value)
    }

    setter(key: keyof this, value: any){
        if(this[key] === undefined){
            throw Error("Configuration item is not available")
        }
        this[key] = value
    }
}