import * as THREE from "three"

export default class BasicCube {
   private geometry: THREE.BoxGeometry
   private material: THREE.MeshBasicMaterial
   public instance: THREE.Mesh

   constructor(color: number) {
      this.geometry = new THREE.BoxGeometry(1, 1, 1)
      this.material = new THREE.MeshBasicMaterial({
         color: color
      })
      this.instance = new THREE.Mesh(this.geometry, this.material)
   }
}