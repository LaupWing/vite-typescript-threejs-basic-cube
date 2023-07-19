import * as THREE from "three"
import { EventEmitter } from "./EventEmitter"

export default class Time extends EventEmitter {
    private start: number
    private current: number
    public elapsed: number
    public delta: number
    public clock: THREE.Clock

    constructor() {
        super()
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 0
        this.clock = new THREE.Clock()

        window.requestAnimationFrame(() => {
            this.tick()
        })
    }

    tick(){
        
    }
}