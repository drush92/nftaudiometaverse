import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/GLTFLoader.js';
//import {OrbitControls} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js';
import {PointerLockControls} from 'https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/PointerLockControls.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//var controls = new OrbitControls(camera, renderer.domElement);

var controls = new PointerLockControls(camera, renderer.domElement);
scene.add(controls.getObject());


document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'KeyW':
        controls.moveForward(0.25);
        break;
      case 'KeyA':
        controls.moveRight(-0.1);
        break;
      case 'KeyS':
        controls.moveForward(-0.1);
        break;
      case 'KeyD':
        controls.moveRight(0.1);
        break;
    }
  });
  
  document.addEventListener('mousemove', (event) => {
    if (controls.isLocked) {
      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;
  
      controls.rotateY(-movementX * 0.002);
      controls.rotateX(-movementY * 0.002);
    }
  });
  
  document.addEventListener('click', () => {
    controls.lock();
  });



/* declare variables for the models
    IN THIS ORDER
    1. location
    2. props
    3. vehicles
    4. characters
*/

var location;

var market;

var statue;

var buildingFlats;

var buildingWoka;

var tank;

var helicopter;

var carMuscle;

var carPolice;
var mixerCarPolice;

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

var loader_market = new GLTFLoader();
loader_market.load( './market/scene.gltf', function ( gltf ) {
    market = gltf.scene;
    scene.add( market );
    market.scale.set(0.016, 0.016, 0.016);
    market.position.set(-170, 0, -25);
    market.rotateY(3);
    scene.add( market );
    market.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Adjust material properties
          child.material.roughness = 500;
          child.material.metalness = 0.58;
        }
      });
});

var loader_statue = new GLTFLoader();
loader_statue.load( './statue/scene.gltf', function ( gltf ) {
    statue = gltf.scene;
    scene.add( statue );
    statue.scale.set(0.06, 0.06, 0.06);
    statue.position.set(-115, 0, -8);
    statue.rotateY(1.6);
    scene.add( statue );
});

var loader_buildingFlats = new GLTFLoader();
loader_buildingFlats.load( './building_flats/scene.gltf', function ( gltf ) {
    buildingFlats = gltf.scene;
    scene.add( buildingFlats );
    buildingFlats.scale.set(1, 1, 1);
    buildingFlats.position.set(15, 0, 6);
    buildingFlats.rotateY(0);
    scene.add( buildingFlats );
});

var loader_buildingWoka = new GLTFLoader();
loader_buildingWoka.load( './building_woka/scene.gltf', function ( gltf ) {
    buildingWoka = gltf.scene;
    scene.add( buildingWoka );
    buildingWoka.scale.set(1, 1, 1);
    buildingWoka.position.set(-85, 0, -8.2);
    buildingWoka.rotateY(Math.PI / 2);
    scene.add( buildingWoka );
});

var loader_tank = new GLTFLoader();
loader_tank.load( './tank/scene.gltf', function ( gltf ) {
    tank = gltf.scene;
    scene.add( tank );
    tank.scale.set(2, 2, 2)
    tank.position.set(-118.5, 0, -16);
    tank.rotateY(1.6);
    scene.add( tank );
});

var loader_helicopter = new GLTFLoader();
loader_helicopter.load( './helicopter/scene.gltf', function ( gltf ) {
    helicopter = gltf.scene;
    scene.add( helicopter );
    helicopter.scale.set(3, 3, 3)
    helicopter.position.set(-55, 0.5, -18);
    helicopter.rotateY(0);
    scene.add( helicopter );
});

var loader_carMuscle = new GLTFLoader();
loader_carMuscle.load( './car_muscle/scene.gltf', function ( gltf ) {
    carMuscle = gltf.scene;
    scene.add( carMuscle );
    carMuscle.scale.set(2.1, 2.1, 2.1)
    carMuscle.position.set(-73, 0, -25);
    carMuscle.rotateY(0);
    scene.add( carMuscle );
});

var loader_carPolice = new GLTFLoader();
loader_carPolice.load( './car_police/scene.gltf', function ( gltf ) {
    carPolice = gltf.scene;
    scene.add( carPolice );
    carPolice.scale.set(0.8, 0.8, 0.8)
    carPolice.position.set(-73, 0, -10);
    carPolice.rotateY(0);
    scene.add( carPolice );
    mixerCarPolice = new THREE.AnimationMixer( carPolice );
    const clipsCarPolice = gltf.animations;
    clipsCarPolice.forEach((clip) => {
        mixerCarPolice.clipAction(clip).play();
    });
});

var loader_character = new GLTFLoader();
loader_character.load( './character/scene.gltf', function ( gltf ) {
    character = gltf.scene;
    scene.add( character );
    mixer = new THREE.AnimationMixer( character );
    const clips = gltf.animations;
    character.scale.set(0.5, 0.5, 0.5)
    character.position.set(-78, 0.11, -10);
    clips.forEach((clip) => {
        mixer.clipAction(clip).play();
});
});

var loader_doctor = new GLTFLoader();
loader_doctor.load( './doctor/scene.gltf', function ( gltf ) {
    doctor = gltf.scene;
    scene.add( doctor );
    doctor.scale.set(0.5, 0.5, 0.5)
    doctor.position.set(11.5, 0.11, -44);
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
    basketballPlayer.scale.set(350, 350, 350)
    basketballPlayer.position.set(-45, 0.11, -44);
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
    businessman.scale.set(0.9, 0.9, 0.9)
    businessman.position.set(-95, 0, -38);
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
    soldier.scale.set(0.5, 0.5, 0.5)
    soldier.position.set(-112, 0.11, -13);
    soldier.rotateY(1.6);
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
    hoodie.scale.set(1, 1, 1)
    hoodie.position.set(-170, 0, -20);
    mixerHoodie = new THREE.AnimationMixer( hoodie );
    const clipsHoodie = gltf.animations;
    const castSpellClip = THREE.AnimationClip.findByName(clipsHoodie, "Armature|Cast Spell");
    if (castSpellClip) {
        mixerHoodie.clipAction(castSpellClip).play();
    }
});

// create wall geometry and material
const wallGeometry = new THREE.BoxGeometry(120, 4.6, 0.5);
const wallMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('wall_texture1.png')
});

// create wall mesh and add to scene
const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh.position.set(-132.5, 2.3, 4.35); // set position of wall
scene.add(wallMesh);

const wallMesh2 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh2.position.set(-60, 2.3, 4.35); // set position of wall
scene.add(wallMesh2);

const wallMesh3 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh3.position.set(26, 2.3, 4.35); // set position of wall
scene.add(wallMesh3);

const wallMesh4 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh4.position.set(85.5, 2.3, -54.35); // set position of wall
wallMesh4.rotateY(Math.PI / 2);
scene.add(wallMesh4);

const wallMesh5 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh5.position.set(-132.5, 2.3, -112); // set position of wall
scene.add(wallMesh5);

const wallMesh6 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh6.position.set(-60, 2.3, -112); // set position of wall
scene.add(wallMesh6);

const wallMesh7 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh7.position.set(26, 2.3, -112); // set position of wall
scene.add(wallMesh7);

const wallMesh8 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh8.position.set(-193, 2.3, -54.35); // set position of wall
wallMesh8.rotateY(Math.PI / 2);
scene.add(wallMesh8);




const hemisphereLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 1);
hemisphereLight.position.set(-50, 50, 0);
hemisphereLight.castShadow = true;
hemisphereLight.intensity = 1.8;
scene.add(hemisphereLight);

camera.position.set(-80, 1.5, 0); // sets the position of the camera

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

const audioFileSteps = 'audio/stepping.wav';

let sourceSteps;
let isPlaying = false;

function playSteps() {
  if (isPlaying) return;

  sourceSteps = audioCtx.createBufferSource();
  sourceSteps.loop = true;

  fetch(audioFileSteps)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      sourceSteps.buffer = audioBuffer;
      sourceSteps.connect(audioCtx.destination);
      sourceSteps.start(0);
      isPlaying = true;
    });
}

function stopSteps() {
  if (!isPlaying) return;
  sourceSteps.stop(0);
  isPlaying = false;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'w' && !isPlaying) {
    playSteps();
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'w' && isPlaying) {
    stopSteps();
  }
});

document.addEventListener("click", function() {
    audioCtx.resume();
});


var animate = function () {
    requestAnimationFrame( animate );
    if (mixer) {
        mixer.update(clock.getDelta());
      }
    if (mixerCarPolice) {
        mixerCarPolice.update(clock.getDelta());
        }
        mixerCarPolice.timeScale = 50;
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

}

animate();

/*
NFTropolis is a unique virtual town where users can own NFT characters that have randomized personality traits, 
which influence the character's dialogue options and role in the overarching background story. These personalities are 
recorded professionally and updated in patches as the story develops. As users interact with their characters to progress 
the story, they earn points which can be attributed to skills/personality traits, which in turn affects the story's direction.

One key feature that sets NFTropolis apart is the personalized and dynamic nature of the characters - each NFT character 
is truly unique, with its own set of traits and dialogue options, meaning that no two users will experience the same story. 
Additionally, the characters have the potential to influence the course of the story, with their actions having real 
consequences that can affect the story's outcome.

NFTropolis provides an innovative and engaging way for users to own and interact with NFT characters in a dynamic and 
ever-changing story. 
*/

/*
LOCATION:
"CCity Building Set 1" (https://skfb.ly/LpSC) by Neberkenezer is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

BUILDINGS & PROPS:
"Low Poly Market" (https://skfb.ly/6CvFs) by Yanez Designs is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Statue of woman - Bern" (https://skfb.ly/NJCy) by w.bonato is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Building Set" (https://skfb.ly/NAJq) by nermin is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).
"Old City Building" (https://skfb.ly/6ZRtK) by Steve Morrison is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/).

VEHICLES:
"Transformers Universe: Army Truck" (https://skfb.ly/otyvo) by Primus03 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Transformers Universe: Helicopter" (https://skfb.ly/otyvH) by Primus03 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Transformers Universe: Drive-By's Vehicle Form" (https://skfb.ly/osHDI) by Primus03 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

CHARACTERS:
"Police" (https://skfb.ly/otoKS) by Alihan is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Doctor" (https://skfb.ly/6QZ8M) by 3D-Models is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Looking around medical" (https://skfb.ly/ouzT8) by Appsbypaulhamilton is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Business Man - Low Polygon game character" (https://skfb.ly/6Ezvq) by manoeldarochadeoliveira is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Girl / Woman Character + Skeleton (.FBX & .OBJ)" (https://skfb.ly/oDRG9) by samsikua is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

if you find your work here and i haven't credited you, please let me know and i will add you to the list. alternatively,
if you would like your work removed, please let me know and i will do so.
*/

