// declare the variables for the sequences, synth and the arrays that hold the notes for each sequence
let sequence1;
let sequence2;
let synth;
let Melody = ["G3", "A3", "B3", "G3", "G3", "A3", "B3", "G3",                                 // 1st bar
    "B3", "C4", "D4", null, "B3", "C4", "D4", null,                                 // 2nd bar
    ["D4", "E4"], ["D4", "C4"], "B3", "G3", ["D4", "E4"], ["D4", "C4"], "B3", "G3", // 3rd bar
    "G3", "D3", "G3", null, "G3", "D3", "G3", null];                                // 4th bar
                       // 4th bar

//create the synth
synth = new Tone.MonoSynth({
    oscillator: {
        type: "sine"
    },
    envelope: {
        attack: 0.05,
        decay: 0.5,
        sustain: 1,
        release: 5
    }

}).toDestination(); // connnect to the destination

var synthParams = {
    attack: 0.1,
    release: 0.1,
    pitch: 440,
    volume: -12
  };

// create the sequences
sequence1 = new Tone.Sequence(function (time, note) {
    synth.triggerAttackRelease(note, 0.5);
    console.log(note);
}, Melody, '4n');

//standard transport data
Tone.Transport.bpm.value = 120;
Tone.Transport.start();
Tone.Transport.loop = true; // loop added
Tone.Transport.loopStart = 0; // loop starts at 0
Tone.Transport.loopEnd = '8:0:0'; // loop ends after 8 bars


//starts the sequence
function Music() {
    Tone.start();
    sequence1.start();

    var randomNumber = Math.floor(Math.random() * 100000000);
  var blockchainToken = randomNumber.toString().padStart(8, '0');
  document.getElementById("blockchainToken").innerHTML = blockchainToken;

  synthParams.attack = parseInt(blockchainToken.substring(1, 4));
  synthParams.release = parseInt(blockchainToken.substring(1, 4));
  synthParams.pitch = parseInt(blockchainToken.substring(1, 4)); // Set pitch between 0 and 999

    // Schedule changes in the synth's parameters
  synth.triggerAttack(synthParams.pitch, '+0', synthParams.attack);
  synth.triggerRelease('+1', synthParams.release);

}