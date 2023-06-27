import * as THREE from "three"
import Experience from "./Experience"
import Sizes from "./utils/Sizes"


export default class Camera {
   private experience: Experience
   private sizes: Experience["sizes"]
   private scene: Experience["scene"]
   private canvas: Experience["canvas"]

   constructor(experience: Experience) {
      this.experience = experience
      this.sizes = this.experience.sizes
      this.scene = this.experience.scene
      this.canvas = this.experience.canvas
   }
}