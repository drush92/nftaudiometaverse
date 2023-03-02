import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import {PointerLockControls} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/PointerLockControls.js';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var controls = new OrbitControls( camera, renderer.domElement );
var location;

var character;
var mixer;

var doctor;
var mixerDoctor;

var basketballPlayer;
var mixerBasketballPlayer;

var businessman;
var mixerBusinessman;

var soldier;
var mixerSoldier;

var hoodie;
var mixerHoodie;

const clock = new THREE.Clock();

const loader = new THREE.TextureLoader();
const texture = loader.load('background.png');
scene.background = texture; // sets the background of the scene


var loader_location = new GLTFLoader();
loader_location.load( './city/scene.gltf', function ( gltf ) {
    location = gltf.scene;
    location.scale.set(0.005, 0.005, 0.005);
    scene.add( location );
});

var loader_character = new GLTFLoader();
loader_character.load( './character/scene.gltf', function ( gltf ) {
    character = gltf.scene;
    scene.add( character );
    mixer = new THREE.AnimationMixer( character );
    const clips = gltf.animations;
    character.position.set(-96, 0, -25);
    clips.forEach((clip) => {
        mixer.clipAction(clip).play();
});
});

var loader_doctor = new GLTFLoader();
loader_doctor.load( './doctor/scene.gltf', function ( gltf ) {
    doctor = gltf.scene;
    scene.add( doctor );
    //doctor.scale.set(0.9, 0.9, 0.9)
    doctor.position.set(-94, 0, -25);
    mixerDoctor = new THREE.AnimationMixer( doctor );
    const clipsDoctor = gltf.animations;
    clipsDoctor.forEach((clip) => {
        mixerDoctor.clipAction(clip).play();
    });  
});

var loader_basketballPlayer = new GLTFLoader();
loader_basketballPlayer.load( './basketball_player/scene.gltf', function ( gltf ) {
    basketballPlayer = gltf.scene;
    scene.add( basketballPlayer );
    basketballPlayer.scale.set(700, 700, 700)
    basketballPlayer.position.set(-92, 0, -26);
    mixerBasketballPlayer = new THREE.AnimationMixer( basketballPlayer );
    const clipsBasketballPlayer = gltf.animations;
    clipsBasketballPlayer.forEach((clip) => {
        mixerBasketballPlayer.clipAction(clip).play();
    });
});

var loader_businessman = new GLTFLoader();
loader_businessman.load( './businessman/scene.gltf', function ( gltf ) {
    businessman = gltf.scene;
    scene.add( businessman );
    businessman.scale.set(1.7, 1.7, 1.7)
    businessman.position.set(-90, 0, -25);
    mixerBusinessman = new THREE.AnimationMixer( businessman );
    const clipsBusinessman = gltf.animations;
    clipsBusinessman.forEach((clip) => {
        mixerBusinessman.clipAction(clip).play();
    });
});

var loader_soldier = new GLTFLoader();
loader_soldier.load( './soldier/scene.gltf', function ( gltf ) {
    soldier = gltf.scene;
    scene.add( soldier );
    soldier.scale.set(0.9, 0.9, 0.9)
    soldier.position.set(-88, 0, -25);
    mixerSoldier = new THREE.AnimationMixer( soldier );
    const clipsSoldier = gltf.animations;
    clipsSoldier.forEach((clip) => {
        mixerSoldier.clipAction(clip).play();
    });
});

var loader_hoodie = new GLTFLoader();
loader_hoodie.load( './hoodie/scene.gltf', function ( gltf ) {
    hoodie = gltf.scene;
    scene.add( hoodie );
    hoodie.scale.set(1.6, 1.6, 1.6)
    hoodie.position.set(-86, 0, -25);
    mixerHoodie = new THREE.AnimationMixer( hoodie );
    const clipsHoodie = gltf.animations;
    const castSpellClip = THREE.AnimationClip.findByName(clipsHoodie, "Armature|Cast Spell");
    if (castSpellClip) {
        mixerHoodie.clipAction(castSpellClip).play();
    }
});


const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

// Create a material for the box
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

// Create a mesh from the geometry and material
const box = new THREE.Mesh(geometry, material);

box.position.set(8.1, 2.8, -3.5);

// Add the mesh to the scene
scene.add(box);

const gridHelper = new THREE.GridHelper( 20, 20 );
gridHelper.position.set (0, 0, 0);
scene.add( gridHelper );

const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
hemisphereLight.position.set(0, 50, 0);
hemisphereLight.castShadow = true;
hemisphereLight.intensity = 1.8;
scene.add(hemisphereLight);

camera.position.set(-90, 1.5, -12); // sets the position of the camera

const audioCtx = new (window.AudioContext || window.webkitAudioContext)(); // creates a new audio context

const source_PoliceOfficer = audioCtx.createBufferSource(); // creates a new audio source
let buffer_PoliceOfficer;

const panner_PoliceOfficer = audioCtx.createPanner();
panner_PoliceOfficer.panningModel = 'HRTF';
panner_PoliceOfficer.distanceModel = 'inverse';
panner_PoliceOfficer.refDistance = 20;
panner_PoliceOfficer.maxDistance = 100;
panner_PoliceOfficer.rolloffFactor = 1;
panner_PoliceOfficer.coneInnerAngle = 360;
panner_PoliceOfficer.coneOuterAngle = 0;
panner_PoliceOfficer.coneOuterGain = 0;
panner_PoliceOfficer.setPosition(0, 0, -25);

const gain_PoliceOfficer = audioCtx.createGain();
gain_PoliceOfficer.gain.value = 0.5;

source_PoliceOfficer.connect(panner_PoliceOfficer);
panner_PoliceOfficer.connect(gain_PoliceOfficer);
gain_PoliceOfficer.connect(audioCtx.destination);

const audioFile_PoliceOfficer = new XMLHttpRequest();
audioFile_PoliceOfficer.open('GET', 'audio/police_officer.wav', true);
audioFile_PoliceOfficer.responseType = 'arraybuffer';
audioFile_PoliceOfficer.onload = function() {
    audioCtx.decodeAudioData(audioFile_PoliceOfficer.response, function(buffer) {
        buffer_PoliceOfficer = buffer;
        source_PoliceOfficer.buffer = buffer;
        source_PoliceOfficer.loop = true;
        source_PoliceOfficer.start();
    });
}
audioFile_PoliceOfficer.send();

document.addEventListener("click", function() {
    audioCtx.resume();
});


var animate = function () {
    requestAnimationFrame( animate );
    if (mixer) {
        mixer.update(clock.getDelta());
      }
    if (mixerDoctor) {
        mixerDoctor.update(clock.getDelta());
        }
        mixerDoctor.timeScale = 300;
    if (mixerBasketballPlayer) {
        mixerBasketballPlayer.update(clock.getDelta());
        }
        mixerBasketballPlayer.timeScale = 200;
    if (mixerBusinessman) {
        mixerBusinessman.update(clock.getDelta());
        }
        mixerBusinessman.timeScale = 70;
    if (mixerSoldier) {
        mixerSoldier.update(clock.getDelta());
        }
        mixerSoldier.timeScale = 50;
    if (mixerHoodie) {
        mixerHoodie.update(clock.getDelta());
        }
        mixerHoodie.timeScale = 100;
    var distance_PoliceOfficer = camera.position.distanceTo(character.position);
    var maxDistance_PoliceOfficer = 10;
    gain_PoliceOfficer.gain.value = Math.max(0, 1 - (distance_PoliceOfficer / maxDistance_PoliceOfficer))
    panner_PoliceOfficer.setPosition(camera.position.x, camera.position.y, camera.position.z);
    
    renderer.render( scene, camera );
    console.log(camera.position);

}

animate();

