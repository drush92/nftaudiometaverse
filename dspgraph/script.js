const audioContext = new AudioContext();

const reverb = new Tone.Reverb({
    decay: 1,
    preDelay: 0.01
}).toDestination();

const synth1 = new Tone.MonoSynth({
    oscillator: {
      type: "sine"
    },
    envelope: {
      attack: 0.05,
      decay: 0.5,
      sustain: 1,
      release: 5
    }
  }).connect(reverb);
  
  const synth2 = new Tone.MonoSynth({
    oscillator: {
      type: "triangle"
    },
    envelope: {
      attack: 0.1,
      decay: 0.3,
      sustain: 0.5,
      release: 2
    }
  }).connect(reverb);


// const synth1 = new Tone.PolySynth({
//     oscillator: {
//         type: "sine"
//     },
//     envelope: {
//         attack: 0.05,
//         decay: 0.5,
//         sustain: 1,
//         release: 5
//     }
// }).connect(reverb);

// const synth2 = new Tone.PolySynth({
//     oscillator: {
//         type: "sine"
//     },
//     envelope: {
//         attack: 0.05,
//         decay: 0.5,
//         sustain: 1,
//         release: 5
//     }
// }).connect(reverb);

// function playNote() {
//     const random = Math.random(0xb3635C098B78FBEC4a9be0312D60E7f3b5d5B7d6);
//     const randomNote = 440 * random;
//     const randomNoteLength = 1 * random;
//     const randomDecay = 1 * random;

//     const time = Tone.Transport.seconds;
//     synth1.triggerAttackRelease(randomNote, randomNoteLength, time);
//     reverb.decay = randomDecay;

//     // schedule the next note
//     const nextNoteTime = time + randomNoteLength;
//     Tone.Transport.scheduleOnce(() => {
//         playNote();
//     }, nextNoteTime);
// }

// function playNote2() {
//     const random = Math.random(0xb3635C098B78FBEC4a9be0312D60E7f3b5d5B7d6);
//     const randomNote = 1760 * random;
//     const randomNoteLength = 1 * random;
//     const randomDecay = 1 * random;

//     const time = Tone.Transport.seconds;
//     synth2.triggerAttackRelease(randomNote, randomNoteLength, time);
//     reverb.decay = randomDecay;

//     // schedule the next note
//     const nextNoteTime = time + randomNoteLength;
//     Tone.Transport.scheduleOnce(() => {
//         playNote();
//     }, nextNoteTime);
// }

function playNotes() {
    const random1 = Math.random();
    const random2 = Math.random();
    const random3 = Math.random();
    const random4 = Math.random();
    const randomNote1 = 440 * random1;
    const randomNote2 = 220 * random2;
    const randomNoteLength = 1 * random1;
    const randomDecay = 1 * random1;
    const time = Tone.Transport.seconds;
    synth1.triggerAttackRelease(randomNote1, randomNoteLength, time);
    synth2.triggerAttackRelease(randomNote2, randomNoteLength, time);
    reverb.decay = randomDecay;
    // schedule the next note
    const nextNoteTime = time + randomNoteLength;
    Tone.Transport.scheduleOnce(() => {
        playNotes();
    }, nextNoteTime);

    const cell1 = document.getElementById("cell1");
    const cell2 = document.getElementById("cell2");
    const cell3 = document.getElementById("cell3");
    const cell4 = document.getElementById("cell4");
    

// generate a random number between 0 and 255
const red1 = random1 * 256;
const green1 = random1 * 256;
const blue1 = random1 * 256;

const red2 = random2 * 256;
const green2 = random2 * 256;
const blue2 = random2 * 256;

const red3 = random3 * 256;
const green3 = random3 * 256;
const blue3 = random3 * 256;

const red4 = random4 * 256;
const green4 = random4 * 256;
const blue4 = random4 * 256;

// set the background color of the body element to a random RGB color
cell1.style.backgroundColor = `rgb(${red1}, ${green1}, ${blue1})`;
cell2.style.backgroundColor = `rgb(${red2}, ${green2}, ${blue2})`;
cell3.style.backgroundColor = `rgb(${red3}, ${green3}, ${blue3})`;
cell4.style.backgroundColor = `rgb(${red3}, ${green3}, ${blue3})`;

}

// start the transport
Tone.Transport.start();