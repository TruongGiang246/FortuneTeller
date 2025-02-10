import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useEffect } from 'react';
import { RGBELoader } from 'three/examples/jsm/Addons.js';
import './Numerology.css'

function Numerology(){
    useEffect(()=>{
        const environment = new URL('../MR_INT-006_LoftIndustrialWindow_Griffintown.hdr',import.meta.url)
        const TarotUrl = new URL('./model/d20_dice.glb',import.meta.url)
        const renderer = new THREE.WebGLRenderer({antialias: true});
        const div = document.querySelector('.Three2')
        renderer.setSize(div.offsetWidth, div.offsetHeight);
        div.appendChild(renderer.domElement);
        console.log(div.offsetHeight)
// Sets the color of the background.


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    div.offsetWidth / div.offsetHeight,
    0.1,
    1000
);

// Sets orbit control to move the camera around.

// Camera positioning.
camera.position.set(-1, 0, 14);
// Has to be done everytime we update the camera position.
let model;
// Creates a 12 by 12 grid helper.
const rgbeLoader = new RGBELoader();
const gLtfLoader = new GLTFLoader();
rgbeLoader.load(environment.href,function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = texture;
        gLtfLoader.load(TarotUrl.href,function(gltf){
            model = gltf.scene;
            model.scale.set(0.05, 0.05, 0.05);
            model.position.x = '-0.5';
            scene.add(model);
            console.log(model)
        })
})
function animate() {
    if(model){
        model.rotation.y += 0.005;
    }

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = div.offsetWidth / div.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(div.offsetWidth , div.offsetHeight);
});
    },[])
    return(
        <div className="Three2">
            
        </div>
    )
}

export default Numerology