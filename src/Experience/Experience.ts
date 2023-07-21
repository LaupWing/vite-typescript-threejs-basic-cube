import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Camera from "./Camera"
import BasicCube from "./BasicCube"
import Renderer from "./Renderer"
import Configuration from "./Configuration"
import Time from "./utils/Time"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public config: Configuration
   public camera: Camera
   public time: Time
   public basicCube: BasicCube
   public renderer: Renderer

   constructor (canvas: HTMLCanvasElement) {
      const initial_color = 0xffccff
      const initial_x_scale = 1
      const initial_y_scale = 1
      const initial_z_scale = 1


      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera(this)
      this.time = new Time()
      this.basicCube = new BasicCube(initial_color)
      this.scene.add(this.basicCube.instance)
      this.renderer = new Renderer(this)
      this.config = new Configuration(
         this,
         initial_x_scale,
         initial_y_scale,
         initial_z_scale
      )
      this.renderer.instance.render(this.scene, this.camera.instance)

      this.time.on("tick", () => {
         this.update()
      })
   }

   update() {
      this.renderer.update()
   }
}