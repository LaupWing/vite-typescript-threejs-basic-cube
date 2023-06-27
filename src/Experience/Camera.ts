import * as THREE from "three"
import Experience from "./Experience"

export default class Camera {
   private experience: Experience
   private sizes: Experience["sizes"]
   private scene: Experience["scene"]
   // private canvas: Experience["canvas"]
   public instance: THREE.PerspectiveCamera

   constructor(experience: Experience) {
      this.experience = experience
      this.sizes = this.experience.sizes
      this.scene = this.experience.scene
      // this.canvas = this.experience.canvas
      this.instance = new THREE.PerspectiveCamera(
         75,
         this.sizes.width / this.sizes.height,
         0.1,
         100
      )
      this.instance.position.set(1, 1, 1)
      this.scene.add(this.instance)
   }
}