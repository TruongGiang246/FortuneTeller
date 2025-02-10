import './ThreeBackStyle.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { CSS2DRenderer, CSS2DObject} from 'three/examples/jsm/renderers/CSS2DRenderer'
import starsTexture from './images/stars.jpg'
import sunTexture from './images/sun.jpg'
import mercuryTexture from './images/mercury.jpg'
import venusTexture from './images/venus.jpg'
import earthTexture from './images/earth.jpg'
import marsTexture from './images/mars.jpg'
import jupiterTexture from './images/jupiter.jpg'
import saturnTexture from './images/saturn.jpg'
import saturnRingTexture from './images/saturn ring.png'
import uranusTexture from './images/uranus.jpg'
import uranusRingTexture from './images/uranus ring.png'
import neptuneTexture from './images/neptune.jpg'
import plutoTexture from './images/pluto.jpg'

function ThreeBack(){
    useEffect(()=>{
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        const div = document.querySelector('.Three')
        div.appendChild(renderer.domElement);
        
        const scene = new THREE.Scene()
        
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1, 
            1000
        
        
        )

        const orbit = new OrbitControls(camera, renderer.domElement)
        
        camera.position.set(-90, 140, 200)
        camera.lookAt(scene.position)
        
        renderer.render(scene, camera)
        orbit.maxDistance = 300
        orbit.enableDamping = true
        orbit.autoRotate = true
        orbit.autoRotateSpeed = 0.5
        orbit.saveState()
        
        orbit.minPolarAngle = Math.PI / 4
        orbit.maxPolarAngle = Math.PI / 2

        const labelRenderer = new CSS2DRenderer()
        labelRenderer.setSize(window.innerWidth, window.innerHeight)
        labelRenderer.domElement.style.position = 'absolute'
        labelRenderer.domElement.style.top = '0px'
        labelRenderer.domElement.style.pointerEvents = 'none'//use screen vd orbit
        labelRenderer.domElement.style.backgroundColor = "rgba(74, 65, 65, 0.23)";

        document.body.appendChild(labelRenderer.domElement)

     

        const pointLight = new THREE.PointLight(0xFFFFFF, 8000, 300)// color - intensity - maximun distance
        scene.add(pointLight)
        const CubeTextureLoader = new THREE.CubeTextureLoader()
        scene.background = CubeTextureLoader.load([
            starsTexture,
            starsTexture,
            starsTexture,
            starsTexture,
            starsTexture,
            starsTexture,
        ])

        const textureLoader = new THREE.TextureLoader()

        const sunGeo = new  THREE.SphereGeometry(16, 30, 30)
        const sunMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(sunTexture)
        })
        const sun = new THREE.Mesh(sunGeo, sunMat)
        scene.add(sun)

        function createPlanete(size, texture, position, ring){
            const geo = new  THREE.SphereGeometry(size, 30, 30)
            const mat = new THREE.MeshStandardMaterial({
                map: textureLoader.load(texture)
            })
            const mesh = new THREE.Mesh (geo, mat)
            const obj = new THREE.Object3D()
            scene.add(mesh)
            obj.add(mesh)
        
            if(ring){
                const ringGeo = new  THREE.RingGeometry(
                    ring.innerRadius,
                    ring.outerRadius
                    , 32)
                const ringMat = new THREE.MeshStandardMaterial({
                    map: textureLoader.load(ring.texture),
                    side: THREE.DoubleSide
                })
                const ringMesh = new THREE.Mesh (ringGeo, ringMat)
                obj.add(ringMesh)
                ringMesh.position.x = position
                ringMesh.rotation.x = -0.5 * Math.PI
            }
        
            scene.add(obj)
            mesh.position.x = position
            return { mesh, obj}
        }

        const mercury = createPlanete(3.2, mercuryTexture, 28)
        const saturn = createPlanete(10, saturnTexture, 138, {
            innerRadius: 10,
            outerRadius: 20,
            texture: saturnRingTexture
        })
        const venus = createPlanete(5.8, venusTexture, 44)
        const earth = createPlanete(6, earthTexture, 62)
        const mars = createPlanete(4, marsTexture, 78)
        const jupiter = createPlanete(12, jupiterTexture, 100)
        const uranus = createPlanete(7, uranusTexture, 176, {
            innerRadius: 7,
            outerRadius: 12,
            texture: uranusRingTexture
        })
        const neptune = createPlanete(7, neptuneTexture, 200)
        const pluto = createPlanete(2.8, plutoTexture, 216)

                
        function animate(){
            orbit.update()
            sun.rotateY(0.004)
        
            mercury.mesh.rotateY(0.004)
            mercury.obj.rotateY(0.04)
        
            venus.mesh.rotateY(0.002)
            venus.obj.rotateY(0.015)
        
            earth.mesh.rotateY(0.02)
            earth.obj.rotateY(0.01)
            
        
            mars.mesh.rotateY(0.018)
            mars.obj.rotateY(0.008)
        
            jupiter.mesh.rotateY(0.004)
            jupiter.obj.rotateY(0.002)
        
            saturn.mesh.rotateY(0.038)
            saturn.obj.rotateY(0.0009)
        
            uranus.mesh.rotateY(0.03)
            uranus.obj.rotateY(0.0004)
        
            neptune.mesh.rotateY(0.032)
            neptune.obj.rotateY(0.0001)
        
            pluto.mesh.rotateY(0.008)
            pluto.obj.rotateY(0.00007)
            labelRenderer.render(scene, camera)
            renderer.render(scene, camera)  
        }
        renderer.setAnimationLoop(animate)

        window.addEventListener('resize', function(){
            labelRenderer.setSize(this.window.innerWidth, this.window.innerHeight)
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        })
    },[])

    

    return(
        <div className="Three">
            
        </div>
    )
}
export default ThreeBack
