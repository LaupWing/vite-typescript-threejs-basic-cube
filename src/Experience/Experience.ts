import * as THREE from "three"
import Sizes from "./utils/Sizes"
import Camera from "./Camera"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes
   public camera: Camera

   constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
      this.camera = new Camera(this)
   }
}