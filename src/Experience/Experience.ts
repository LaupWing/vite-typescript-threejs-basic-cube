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
      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera(this)
      this.time = new Time()
      this.config = new Configuration()
      this.basicCube = new BasicCube(this.config.color)
      this.scene.add(this.basicCube.instance)
      this.renderer = new Renderer(this)
      this.renderer.instance.render(this.scene, this.camera.instance)

      this.time.on("tick", () => {
         this.update()
      })
   }

   update() {
      // this.camera.
   }
}