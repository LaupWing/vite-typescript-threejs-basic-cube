import * as THREE from "three"
import { EventEmitter } from "./EventEmitter"

export default class Time extends EventEmitter {
    private start: number
    private current: number
    public elapsed: number
    public delta: number
    public clock: THREE.Clock

    constructor() {

    }
}