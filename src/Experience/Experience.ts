import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Camera from "./Camera"
import BasicCube from "./BasicCube"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public camera: Camera
   public basicCube: BasicCube

   constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera(this)
      this.basicCube = new BasicCube()
      this.scene.add(this.basicCube.instance)
   }
}