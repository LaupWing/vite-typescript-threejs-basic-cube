import {
   BoxGeometry,
   Color,
   Mesh,
   MeshBasicMaterial,
   PerspectiveCamera,
   Scene,
   WebGLRenderer,
} from "three"

// Get a reference to the container element that will hold our scene
const container = document.querySelector(".webgl")!

// create a Scene
const scene = new Scene()

// Set the background color
scene.background = new Color("skyblue")

// Create a camera
const fov = 35 // AKA Field of View
const aspect = container.clientWidth / container.clientHeight
const near = 0.1 // the near clipping plane
const far = 100 // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far)

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10)

// create a geometry
const geometry = new BoxGeometry(2, 2, 2)

// create a default (white) Basic material
const material = new MeshBasicMaterial()

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material)

// add the mesh to the scene
scene.add(cube)

// create the renderer
const renderer = new WebGLRenderer()

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight)

renderer.setPixelRatio(window.devicePixelRatio)

container.append(renderer.domElement)
renderer.render(scene, camera)
