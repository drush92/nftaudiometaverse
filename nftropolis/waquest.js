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
    2. props / buildings
    3. vehicles
    4. characters
*/

var location;

var market;
var statue;
var fountain;
var mixerFountain;
var fenceChain;
var armyHelipad;
var armyWoodTower;
var rollercoaster;
var mixerRollercoaster;

var buildingFlats;
var buildingWoka;
var buildingWoodbros;
var buildingShop;
var armyBunker;

var tank;
var helicopter;
var armyJet;
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
    market.scale.set(0.01, 0.01, 0.01);
    market.position.set(-170, 0, -1);
    market.rotateY(0);
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

var loader_fountain = new GLTFLoader();
loader_fountain.load( './fountain/scene.gltf', function ( gltf ) {
    fountain = gltf.scene;
    scene.add( fountain );
    fountain.scale.set(1.75, 1.75, 1.75);
    fountain.position.set(-27.5, 0.11, -28);
    fountain.rotateY(1.6);
    mixerFountain = new THREE.AnimationMixer(fountain);
    const clipsFountain = gltf.animations;
    clipsFountain.forEach((clip) => {
        mixerFountain.clipAction(clip).play();
    });
});


var loader_fenceChain = new GLTFLoader();
loader_fenceChain.load( './fence_chain/scene.gltf', function ( gltf ) {
    fenceChain = gltf.scene.clone();
    fenceChain.scale.set(2.5, 2.5, 2.5);
    fenceChain.position.set(-187.8, 0, -68);
    fenceChain.rotateY(0);
    scene.add( fenceChain );
    
    var clonedFenceChain = fenceChain.clone();
    clonedFenceChain.position.set(-180.4, 0, -68);
    scene.add(clonedFenceChain);

    var clonedFenceChain2 = fenceChain.clone();
    clonedFenceChain2.position.set(-173, 0, -68);
    scene.add(clonedFenceChain2);

    var clonedFenceChain3 = fenceChain.clone();
    clonedFenceChain3.position.set(-165.6, 0, -68);
    scene.add(clonedFenceChain3);

    var clonedFenceChain4 = fenceChain.clone();
    clonedFenceChain4.position.set(-158.2, 0, -68);
    scene.add(clonedFenceChain4);

    var clonedFenceChain5 = fenceChain.clone();
    clonedFenceChain5.position.set(-150.8, 0, -68);
    scene.add(clonedFenceChain5);

    var clonedFenceChain6 = fenceChain.clone();
    clonedFenceChain6.position.set(-148.2, 0, -73);
    clonedFenceChain6.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain6);

    var clonedFenceChain7 = fenceChain.clone();
    clonedFenceChain7.position.set(-148.2, 0, -80.4);
    clonedFenceChain7.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain7);

    /*
    var clonedFenceChain8 = fenceChain.clone();
    clonedFenceChain8.position.set(-148.2, 0, -87.8);
    clonedFenceChain8.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain8);
    */

    var clonedFenceChain9 = fenceChain.clone();
    clonedFenceChain9.position.set(-148.2, 0, -95.2);
    clonedFenceChain9.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain9);

    var clonedFenceChain10 = fenceChain.clone();
    clonedFenceChain10.position.set(-148.2, 0, -102.6);
    clonedFenceChain10.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain10);

    var clonedFenceChain11 = fenceChain.clone();
    clonedFenceChain11.position.set(-148.2, 0, -110);
    clonedFenceChain11.rotateY(Math.PI / 2);
    scene.add(clonedFenceChain11);
});

var loader_armyHelipad = new GLTFLoader();
loader_armyHelipad.load( './army_helipad/scene.gltf', function ( gltf ) {
    armyHelipad = gltf.scene;
    scene.add( armyHelipad );
    armyHelipad.scale.set(0.2, 0.25, 0.25);
    armyHelipad.position.set(-175, 0.5, -88);
    armyHelipad.rotateY(0);
    mixerArmyHelipad = new THREE.AnimationMixer(armyHelipad);
});

var loader_armyWoodTower = new GLTFLoader();
loader_armyWoodTower.load( './army_wood_tower/scene.gltf', function ( gltf ) {
    armyWoodTower = gltf.scene.clone();
    scene.add( armyWoodTower );
    armyWoodTower.scale.set(1.5, 1.5, 1.5);
    armyWoodTower.position.set(-190.4, 0, -71);
    armyWoodTower.rotateY( Math.PI / 2);

    var clonedArmyWoodTower = armyWoodTower.clone();
    clonedArmyWoodTower.position.set(-150.25, 0, -71);
    clonedArmyWoodTower.rotateY( Math.PI / 2);
    scene.add(clonedArmyWoodTower);

    var clonedArmyWoodTower2 = armyWoodTower.clone();
    clonedArmyWoodTower2.position.set(-150.25, 0, -108);
    clonedArmyWoodTower2.rotateY( Math.PI / 1);
    scene.add(clonedArmyWoodTower2);
});

var loader_rollercoaster = new GLTFLoader();
loader_rollercoaster.load( './rollercoaster/scene.gltf', function ( gltf ) {
    rollercoaster = gltf.scene;
    scene.add( rollercoaster );
    rollercoaster.scale.set(1, 1, 1);
    rollercoaster.position.set(40, 0, -105);
    rollercoaster.rotateY(-1.6);
    mixerRollercoaster = new THREE.AnimationMixer(rollercoaster);
    const clipsRollercoaster = gltf.animations;
    clipsRollercoaster.forEach((clip) => {
        mixerRollercoaster.clipAction(clip).play();
    });
});

var loader_buildingFlats = new GLTFLoader();
loader_buildingFlats.load( './building_flats/scene.gltf', function ( gltf ) {
    buildingFlats = gltf.scene.clone();
    scene.add( buildingFlats );
    buildingFlats.scale.set(1, 1, 1);
    buildingFlats.position.set(6.2, 0, 6);
    buildingFlats.rotateY(0);
    scene.add( buildingFlats );

    var clonedBuildingFlats = buildingFlats.clone();
    clonedBuildingFlats.position.set(-80, 0, -95);
    clonedBuildingFlats.rotateY( Math.PI / 2);
    scene.add(clonedBuildingFlats);
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

var loader_buildingWoodbros = new GLTFLoader();
loader_buildingWoodbros.load( './building_woodbros/scene.gltf', function ( gltf ) {
    buildingWoodbros = gltf.scene;
    scene.add( buildingWoodbros );
    buildingWoodbros.scale.set(8, 8, 8);
    buildingWoodbros.position.set(-53, 0, -29);
    buildingWoodbros.rotateY(Math.PI / 1);
    scene.add( buildingWoodbros );
});

var loader_buildingShop = new GLTFLoader();
loader_buildingShop.load( './building_shop/scene.gltf', function ( gltf ) {
    buildingShop = gltf.scene;
    scene.add( buildingShop );
    buildingShop.scale.set(29, 29, 29);
    buildingShop.position.set(-95, 0, -5.8);
    buildingShop.rotateY(Math.PI / 2);
    scene.add( buildingShop );
});

var loader_armyBunker = new GLTFLoader();
loader_armyBunker.load( './army_bunker/scene.gltf', function ( gltf ) {
    armyBunker = gltf.scene.clone();
    scene.add( armyBunker );
    armyBunker.scale.set(6, 6, 6);
    armyBunker.position.set(-158, 0, -74);
    armyBunker.rotateY(0);
    scene.add( armyBunker );

    var clonedArmyBunker = armyBunker.clone();
    clonedArmyBunker.position.set(-170, 0, -74);
    clonedArmyBunker.rotateY(0);
    scene.add(clonedArmyBunker);

    var clonedArmyBunker2 = armyBunker.clone();
    clonedArmyBunker2.position.set(-182, 0, -74);
    clonedArmyBunker2.rotateY(0);
    scene.add(clonedArmyBunker2);

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
    helicopter.position.set(60, 0.5, -18);
    helicopter.rotateY(0);
    scene.add( helicopter );
});

var loader_armyJet = new GLTFLoader();
loader_armyJet.load( './army_jet/scene.gltf', function ( gltf ) {
    armyJet = gltf.scene.clone();
    scene.add( armyJet );
    armyJet.scale.set(0.05, 0.05, 0.05)
    armyJet.position.set(-160, 8, -103);
    armyJet.rotateY(-1.5 );
    scene.add( armyJet );

    var clonedArmyJet = armyJet.clone();
    clonedArmyJet.position.set(-170, 8, -103);
    scene.add(clonedArmyJet);

    var clonedArmyJet2 = armyJet.clone();
    clonedArmyJet2.position.set(-180, 8, -103);
    scene.add(clonedArmyJet2);
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

// create surrounding wall geometry and material
const wallGeometry = new THREE.BoxGeometry(120, 4.6, 0.5);
const wallMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('wall_texture1.png')
});

// create wall mesh and add to scene
const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh.position.set(-132.5, 2.3, 4.35); // set position of wall
scene.add(wallMesh);

const wallMesh2 = new THREE.Mesh(wallGeometry, wallMaterial);
wallMesh2.position.set(-60, 2.3, 4.15); // set position of wall
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
wallMesh6.position.set(-60, 2.3, -111.85); // set position of wall
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

// create audio source and gain node
const source = audioCtx.createBufferSource();
const gainNode = audioCtx.createGain();

// load audio file
const request = new XMLHttpRequest();
request.open('GET', 'audio/background.wav', true);
request.responseType = 'arraybuffer';
request.onload = function() {
  audioCtx.decodeAudioData(request.response, function(buffer) {
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.value = 0.01;
    // start audio source when buffer is loaded
    source.start(0);
  });
};
request.send();

// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create the PositionalAudio object (passing in the listener)
const sound = new THREE.PositionalAudio( listener );

let audioFile = 'audio/police_officer.wav';
// load a sound and set it as the PositionalAudio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( audioFile, function( buffer ) {
	sound.setBuffer( buffer );
	sound.setRefDistance( 0.1 );
  sound.setMaxDistance( 0.01 );
  sound.setRollOffFactor( 0.1 );
});

// create an object for the sound to play from
const sphere = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const material = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const mesh = new THREE.Mesh( sphere, material );
mesh.position.set(-78, 0.11, -10);
scene.add( mesh );

// finally add the sound to the mesh
mesh.add( sound );

const soundSoldier = new THREE.PositionalAudio( listener );
const audioLoaderSoldier = new THREE.AudioLoader();
audioLoaderSoldier.load( 'audio/soldier.wav', function( buffer ) {
  soundSoldier.setBuffer( buffer );
  soundSoldier.setRefDistance( 0.1 );
  soundSoldier.setMaxDistance( 0.01 );
  soundSoldier.setRollOffFactor( 0.1 );
});

const sphereSoldier = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const materialSoldier = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const meshSoldier = new THREE.Mesh( sphereSoldier, materialSoldier );
meshSoldier.position.set(-112, 0.11, -13);
scene.add( meshSoldier );

meshSoldier.add( soundSoldier );

const soundBasketballPlayer = new THREE.PositionalAudio( listener );
const audioLoaderBasketballPlayer = new THREE.AudioLoader();
audioLoaderBasketballPlayer.load( 'audio/basketball_player.wav', function( buffer ) {
  soundBasketballPlayer.setBuffer( buffer );
  soundBasketballPlayer.setLoop( false );
  soundBasketballPlayer.setRefDistance( 0.1 );
  soundBasketballPlayer.setMaxDistance( 0.01 );
  soundBasketballPlayer.setRollOffFactor( 0.1 );
});

const sphereBasketballPlayer = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const materialBasketballPlayer = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const meshBasketballPlayer = new THREE.Mesh( sphereBasketballPlayer, materialBasketballPlayer );
meshBasketballPlayer.position.set(-45, 0.11, -44);
scene.add( meshBasketballPlayer );

meshBasketballPlayer.add( soundBasketballPlayer );

const soundCarMuscle = new THREE.PositionalAudio( listener );

// load a sound and set it as the PositionalAudio object's buffer
const audioLoaderCarMuscle = new THREE.AudioLoader();
audioLoaderCarMuscle.load( 'audio/car_muscle.wav', function( buffer ) {
  soundCarMuscle.setBuffer( buffer );
  soundCarMuscle.setRefDistance( 1 );
  soundCarMuscle.setMaxDistance( 0.01 );
  soundCarMuscle.setRollOffFactor( 0.1 );
});

// create an object for the sound to play from
const sphereCarMuscle = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const materialCarMuscle = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const meshCarMuscle = new THREE.Mesh( sphereCarMuscle, materialCarMuscle );
meshCarMuscle.position.set(-73, 0, -25);
scene.add( meshCarMuscle );

// finally add the sound to the mesh
meshCarMuscle.add( soundCarMuscle );

const soundFountain = new THREE.PositionalAudio( listener );

const audioLoaderFountain = new THREE.AudioLoader();
audioLoaderFountain.load( 'audio/fountain.wav', function( buffer ) {
  soundFountain.setBuffer( buffer );
  soundFountain.setRefDistance( 0.5 );
  soundFountain.setMaxDistance( 0.01 );
  soundFountain.setRollOffFactor( 0.1 );
});

const sphereFountain = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const materialFountain = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const meshFountain = new THREE.Mesh( sphereFountain, materialFountain );
meshFountain.position.set(-27.5, 0.11, -28);
scene.add( meshFountain );

meshFountain.add( soundFountain );

const soundRollercoaster = new THREE.PositionalAudio( listener );

const audioLoaderRollercoaster = new THREE.AudioLoader();
audioLoaderRollercoaster.load( 'audio/rollercoaster.wav', function( buffer ) {
  soundRollercoaster.setBuffer( buffer );
  soundRollercoaster.setRefDistance( 1 );
  soundRollercoaster.setMaxDistance( 0.01 );
  soundRollercoaster.setRollOffFactor( 0.1 );
});

const sphereRollercoaster = new THREE.SphereGeometry( 0.001, 0.001, 0.001 );
const materialRollercoaster = new THREE.MeshPhongMaterial( { color: 0xff2200 } );
const meshRollercoaster = new THREE.Mesh( sphereRollercoaster, materialRollercoaster );
meshRollercoaster.position.set(40, 0, -105);
scene.add( meshRollercoaster );

meshRollercoaster.add( soundRollercoaster );

const audioFileSteps = 'audio/stepping.wav';

let sourceSteps;
let isPlaying = false;

var gainSteps = audioCtx.createGain();
gainSteps.gain.value = 0.2;
gainSteps.connect(audioCtx.destination);

function playSteps() {
  if (isPlaying) return;

  sourceSteps = audioCtx.createBufferSource();
  sourceSteps.loop = true;

  fetch(audioFileSteps)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      sourceSteps.buffer = audioBuffer;
      sourceSteps.connect(gainSteps);
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
    soundBasketballPlayer.setLoop( false );
    sound.setLoop(false);
    //soundCarMuscle.play();
    //soundCarMuscle.setLoop( true );
    soundFountain.play();
    soundFountain.setLoop( true );
    soundRollercoaster.play();
    soundRollercoaster.setLoop( true );
});

const characterPosition = new THREE.Vector3(-78, 0.11, -10);
const distanceToShow = 3.5;
const nearCharacter = document.getElementById('near-character');
const characterRun = document.getElementById('character-run');
const characterPayToll = document.getElementById('character-pay-toll');
const nearSoldier = document.getElementById('near-soldier');
const soldierWhatIsTestDrill = document.getElementById('soldier-what-is-test-drill');

// register the event listener for the click event


let characterPlayedSound = false;
let basketballPlayerSoundPlayed = false;
let soldierSoundPlayed = false;

function updateSounds() {
  const distanceToCharacter = camera.position.distanceTo(characterPosition);
  const distanceToCarMuscle = camera.position.distanceTo(carMuscle.position);
  const distanceToSoldier = camera.position.distanceTo(soldier.position);
  const distanceToBasketetballPlayer = camera.position.distanceTo(basketballPlayer.position);
  if (distanceToCharacter < distanceToShow) {
    nearCharacter.style.display = 'block';
    sound.play();
    sound.setLoop(false);
  } else {
    nearCharacter.style.display = 'none';
    characterRun.style.display = 'none';
    characterPayToll.style.display = 'none';
  }
  if (distanceToBasketetballPlayer < distanceToShow) {
    if (!basketballPlayerSoundPlayed) {
      soundBasketballPlayer.play();
      soundBasketballPlayer.setLoop( false );
      basketballPlayerSoundPlayed = true;
    }
  } else {
    basketballPlayerSoundPlayed = false;
  }
  if (distanceToCarMuscle < distanceToShow) {
    soundCarMuscle.play();
  } else {
  }
  if (distanceToSoldier < distanceToShow) {
    nearSoldier.style.display = 'block';
    soundSoldier.setLoop(false);
    if (soundSoldier.isPlaying === false && soldierSoundPlayed === false) {
      soundSoldier.play();
      soldierSoundPlayed = true;
    }
  } else {
    nearSoldier.style.display = 'none';
    soldierWhatIsTestDrill.style.display = 'none';
    soldierSoundPlayed = false;
  }
}

// Call updateSounds whenever the camera moves
controls.addEventListener('change', function() {
  updateSounds();
});




var animate = function () {
    requestAnimationFrame( animate );
    if (mixer) {
      mixer.update(clock.getDelta());
      }
    if (mixerFountain) {
        mixerFountain.update(clock.getDelta());
      }
    if (mixerRollercoaster) {
        mixerRollercoaster.update(clock.getDelta());
      }
      mixerRollercoaster.timeScale = 10000;
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
    //var distance_PoliceOfficer = camera.position.distanceTo(character.position);
    //var maxDistance_PoliceOfficer = 10;
    //gain_PoliceOfficer.gain.value = Math.max(0, 1 - (distance_PoliceOfficer / maxDistance_PoliceOfficer))
    //panner_PoliceOfficer.setPosition(camera.position.x, camera.position.y, camera.position.z);
    
      // Check the distance to the character object
  



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
"Background building 3" (https://skfb.ly/oCKGN) by Trueno is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"#15 "The Fall" 3December2019" (https://skfb.ly/6SorR) by Canary Games is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
"Chainlink Fences (Mid-Poly)" (https://sketchfab.com/3d-models/chainlink-fences-mid-poly-b79e24cad33340da9b0f1e91901840bb) by Tiko (https://sketchfab.com/tikoavp) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
"Army_Wood_Tower" (https://sketchfab.com/3d-models/army-wood-tower-d78fa9daa7d4450d93f6d63f79e8463e) by BlackSpire (https://sketchfab.com/blackspire) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
"'Stekelvarken S3' Kazemat (Dutch WWII bunker)" (https://sketchfab.com/3d-models/stekelvarken-s3-kazemat-dutch-wwii-bunker-f409a77deaaf4e3888d47f76ec48dbdd) by Sjoerd van Riel (https://sketchfab.com/sjoerdnijkerk) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)

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

SOUND:
Fairgrounds: Rides - Cobra rollercoaster - from side of track - May '1985 (recorded West Midlands Safari Park) (5F4,reprocessed)- https://sound-effects.bbcrewind.co.uk/search?q=rollercoaster

if you find your work here and i haven't credited you, please let me know and i will add you to the list. alternatively,
if you would like your work removed, please let me know and i will do so.
*/

