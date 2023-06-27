import { EventEmitter } from "./EventEmitter"

export default class Sizes extends EventEmitter {
   public width: number
   public height: number
   public pixelRatio: number

   constructor(){
      super()
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)

      window.addEventListener("resize", () => {
         this.width = window.innerWidth
         this.height = window.innerHeight

         this.trigger("resize")
      })
   }
}