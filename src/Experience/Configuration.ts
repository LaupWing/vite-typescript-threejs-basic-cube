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

    updateSize(e: Event)
    {
        const target = e.target as HTMLInputElement
        console.log(target.id)
        const z_axis = Number(this.z_axis_element.value)
        console.log(z_axis)
        this.basicCube.instance.scale.z = z_axis
    }

    updateColor()
    {
        const color = Number(this.color_element.value.replace("#", "0x"))
        this.basicCube.material.color.setHex(color)
        this.color = color
    }
}