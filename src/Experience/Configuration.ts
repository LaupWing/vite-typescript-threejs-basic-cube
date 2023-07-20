import BasicCube from "./BasicCube"
import Experience from "./Experience"

export default class Configuration {
    public color: number
    private color_element: HTMLInputElement
    private basicCube: BasicCube

    constructor(experience: Experience) {
        this.color_element = document.querySelector("#color") as HTMLInputElement
        this.color = Number(this.color_element.value)
        this.basicCube = experience.basicCube
        this.attachEvents()
    }

    setter(key: keyof this, value: any){
        if(this[key] === undefined){
            throw Error("Configuration item is not available")
        }
        this[key] = value
    }

    attachEvents(){
        this.color_element.addEventListener("change", this.updateColor.bind(this))
    }

    updateColor()
    {
        this.basicCube.material.color.setHex(Number(this.color_element.value.replace("#", "0x")))
        this.color = 0xffffff
    }
}