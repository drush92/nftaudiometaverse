//show octave illusion
$("#select-character-run").click(function(){
    $("#near-character").fadeOut();
    $("#near-character").css("display", "none");
    $("#character-run").css("display", "block");
    $("#character-run").fadeIn();
  });

  $("#select-character-pay-toll").click(function(){
    $("#near-character").fadeOut();
    $("#near-character").css("display", "none");
    $("#character-pay-toll").css("display", "block");
    $("#character-pay-toll").fadeIn();
  });