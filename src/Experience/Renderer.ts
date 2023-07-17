import * as THREE from "three"
import Experience from "./Experience"

export default class Renderer {
   private experience: Experience
   public instance: THREE.WebGLRenderer
   private scene: Experience["scene"]
   private sizes: Experience["sizes"]
   private camera: Experience["camera"]
   private canvas: Experience["canvas"]
   
   constructor(experience: Experience){
      this.experience = experience
      this.canvas = this.experience.canvas
      this.scene = this.experience.scene
      this.camera = this.experience.camera
      this.sizes = this.experience.sizes
      this.instance = new THREE.WebGLRenderer({
         canvas: this.canvas
      })

      console.log(this.instance)

      this.instance.setSize(this.sizes.width, this.sizes.height)
      this.instance.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   }
}