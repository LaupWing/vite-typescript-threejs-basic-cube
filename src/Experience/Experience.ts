import * as THREE from "three"

export default class Experience {
   public canvas: HTMLCanvasElement
   public scene: THREE.Scene

   constructor (canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.scene = new THREE.Scene()
   }
}