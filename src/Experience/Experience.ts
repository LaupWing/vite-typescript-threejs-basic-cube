import * as THREE from "three"
import Sizes from "./utils/Sizes"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene
   public sizes: Sizes

   constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.scene = new THREE.Scene()
      this.sizes = new Sizes()
   }
}