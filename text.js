function start_text(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK ANYWHERE TO START", width/2, height*3/4)
}

function next_text(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK WHEN PLAYER 2 IS READY", width/2, height*3/4)
}

function reset_text(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("CLICK TO RESTART GAME", width/2, height*3/4)
  if (player1 < player2){
    text("PLAYER 1 WINS", width/2, height/4)
  } else if (player2 < player1){
    text("PLAYER 2 WINS", width/2, height/4)
  } else {
    text("DRAW", width/2, height/4)
  }
}


function timer_text(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(50);
  text(timer.toFixed(3)+" s", width/2, height/2)
}

function shoot_text(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("SHOOT!", width/2, height/4)
}

function disqualify_text(){
  fill(255, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("DISQUALIFIED", width/2, height/2)
}

function player1_turn(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("PLAYER 1's TURN", width/2, height/4)
}

function player2_turn(){
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(25);
  text("PLAYER 2's TURN", width/2, height/4)
}

function player_stat(){
  fill(255);
  textAlign(LEFT, CENTER);
  textSize(15);
  text("Player 1: "+player1.toFixed(3)+" s", 15, height-40)
  text("Player 2: "+player2.toFixed(3)+" s", 15, height-25)
}

function label_text(){
  fill(255)
  textSize(25)
  text(label, 50, 20)
}