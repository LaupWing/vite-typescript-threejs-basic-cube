import BasicCube from "./BasicCube"
import Experience from "./Experience"

export default class Configuration {
    public color: number
    private color_element: HTMLInputElement
    private x_scale_element: HTMLInputElement
    private z_scale_element: HTMLInputElement
    private y_scale_element: HTMLInputElement
    private z_axis: Number
    private x_axis: Number
    private y_axis: Number
    private basicCube: BasicCube

    constructor(experience: Experience) {
        this.color_element = document.querySelector("#color") as HTMLInputElement
        this.z_scale_element = document.querySelector("#zScale") as HTMLInputElement
        this.y_scale_element = document.querySelector("#yScale") as HTMLInputElement
        this.x_scale_element = document.querySelector("#xScale") as HTMLInputElement
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
        this.z_scale_element.addEventListener("change", this.updateSize.bind(this))
        this.y_scale_element.addEventListener("change", this.updateSize.bind(this))
        this.x_scale_element.addEventListener("change", this.updateSize.bind(this))
    }

    updateSize(e: Event)
    {
        const target = e.target as HTMLInputElement
        const axis = target.id[0] as "z"|"x"|"y"
        
        this[`${axis}_axis`] = Number(target.value)
        this.basicCube.instance.scale[axis] = this[`${axis}_axis`] as number
    }

    updateColor()
    {
        const color = Number(this.color_element.value.replace("#", "0x"))
        this.basicCube.material.color.setHex(color)
        this.color = color
    }
}