//show octave illusion
$("#select-character-run").click(function(){
  $("#near-character").css({"opacity": "0", "display": "none"});
  $("#character-run").fadeIn();
});

$("#select-character-pay-toll").click(function(){
  $("#near-character").css({"opacity": "0", "display": "none"});
  $("#character-pay-toll").fadeIn();
});
