// Create a synth with Tone.js
var synth = new Tone.Synth().toDestination();

// Create an object to store the synth's parameters
var synthParams = {
  attack: 0.1,
  release: 0.1,
  pitch: 440,
  volume: -12
};

// Create a sequence that repeats every 4 eighth notes
var pattern = new Tone.Sequence(function(time, pitch) {
  synth.triggerAttackRelease(pitch, '8n', time);
}, [], '4n');

// Set the sequence to loop indefinitely
pattern.loop = true;

// Start the transport and the sequence
Tone.Transport.start();
pattern.start(0);

function generateRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 100000000);
  var blockchainToken = randomNumber.toString().padStart(8, '0');
  document.getElementById("blockchainToken").innerHTML = blockchainToken;

  // Update the synth's parameters based on the random number
  synthParams.attack = parseInt(blockchainToken.charAt(0)) / 10; // Set attack time between 0 and 1 second
  synthParams.release = parseInt(blockchainToken.charAt(7)) / 10; // Set release time between 0 and 1 second
  synthParams.pitch = parseInt(blockchainToken.substring(1, 4)); // Set pitch between 0 and 999

  // Change the BPM based on the random number
  var bpm = parseInt(blockchainToken.substring(4, 8)) / 100; // Set BPM between 0 and 999
  Tone.Transport.bpm.value = bpm;

  // Schedule changes in the synth's parameters
  synth.triggerAttack(synthParams.pitch, '+0', synthParams.attack);
  synth.triggerRelease('+1', synthParams.release);
}