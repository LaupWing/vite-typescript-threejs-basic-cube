import BasicCube from "./BasicCube"
import Experience from "./Experience"

export default class Configuration {
    public color: number
    private color_element: HTMLInputElement
    private z_axis_element: HTMLInputElement
    private basicCube: BasicCube

    constructor(experience: Experience) {
        this.color_element = document.querySelector("#color") as HTMLInputElement
        this.z_axis_element = document.querySelector("#zAxis") as HTMLInputElement

        this.color = Number(this.color_element.value)
        this.basicCube = experience.basicCube
        this.attachEvents()
    }

    attachEvents()
    {
        this.color_element.addEventListener("change", this.updateColor.bind(this))
        this.z_axis_element.addEventListener("change", this.updateSize.bind(this))
    }

    updateSize()
    {
        const z_axis = Number(this.z_axis_element.value)
        this.basicCube.instance.scale.z = 2
    }

    updateColor()
    {
        const color = Number(this.color_element.value.replace("#", "0x"))
        this.basicCube.material.color.setHex(color)
        this.color = color
    }
}