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

    attachEvents(){
        this.color_element.addEventListener("change", this.updateColor.bind(this))
    }

    updateColor()
    {
        const color = Number(this.color_element.value.replace("#", "0x"))
        this.basicCube.material.color.setHex(color)
        this.color = color
    }
}