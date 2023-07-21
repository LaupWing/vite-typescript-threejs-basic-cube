import BasicCube from "./BasicCube"
import Experience from "./Experience"

export default class Configuration {
    public color: number
    private color_element: HTMLInputElement
    private z_axis_element: HTMLInputElement
    private y_axis_element: HTMLInputElement
    private z_axis: Number
    private x_axis: Number
    private y_axis: Number
    private basicCube: BasicCube

    constructor(experience: Experience) {
        this.color_element = document.querySelector("#color") as HTMLInputElement
        this.z_axis_element = document.querySelector("#zAxis") as HTMLInputElement
        this.y_axis_element = document.querySelector("#yAxis") as HTMLInputElement
        this.z_axis = 1
        this.x_axis = 1
        this.y_axis = 1
        this.color = Number(this.color_element.value)
        this.basicCube = experience.basicCube
        this.attachEvents()
    }

    attachEvents()
    {
        this.color_element.addEventListener("change", this.updateColor.bind(this))
        this.z_axis_element.addEventListener("change", this.updateSize.bind(this))
        this.y_axis_element.addEventListener("change", this.updateSize.bind(this))
    }

    updateSize(e: Event)
    {
        const target = e.target as HTMLInputElement
        const axis = target.id[0] as "z"|"x"|"y"
        
        const z_axis = Number(this.z_axis_element.value)
        this[`${axis}_axis`] = Number(target.value)
        this.basicCube.instance.scale[axis] = z_axis
    }

    updateColor()
    {
        const color = Number(this.color_element.value.replace("#", "0x"))
        this.basicCube.material.color.setHex(color)
        this.color = color
    }
}