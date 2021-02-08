// timer tracks player's reaction time
let timer = 0;
// frameTime tracks real (frame) time
let frameTime = 0;

// Keep tracks of score
let player1 = 0;
let player2 = 0;

/*
(0) Default 1 (1) Start timer 1 (2) Stop timer 2
(3) Default 2 (4) Start timer 2 (5) Stop timer 2
(6) Reset game
*/
let click_count = 0;

function preload() {
  // Classifier
  classifier = ml5.imageClassifier(imageModelURL+'model.json');
  
  // Sound
  gun_sound = loadSound("sound/gun.mp3");
  background_sound = loadSound("sound/background.mp3");
  
  // Font
  cowboy_font = loadFont("asset/edmunds.ttf")
  
  // Image
  gun_image1 = loadImage("asset/gun1.png")
  bullet_image1 = loadImage("asset/bullet1.png")
  gun_image2 = loadImage("asset/gun2.png")
  bullet_image2 = loadImage("asset/bullet2.png")
  gun_image3 = loadImage("asset/gun3.png")
  gun_image4 = loadImage("asset/gun4.png")
}

function setup() {
  createCanvas(550, 450);
  
  // Create video background and classify it
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo()
  
  // Generate random delay time for each player
  random_delay1 = random(3, 5)
  random_delay2 = random(3, 5)
  
  // Sound
  sound_background()
  
  // Font
  textFont(cowboy_font);
}


function draw() {
  background(50);
  image(video, 0, 0)
  
  
  // Summary 
  label_text()
  player_stat() 
  
  switch(click_count) {
    case 0:
      frameTime = 0;
      timer = 0;
      player1 = 0;
      player2 = 0;
      
      player1_turn();
      start_text();
      break;
    case 1:
      background_sound.setVolume(0.01)
      frameTime++;
      draw_gun3()
      if (frameTime > random_delay1*60){
        timer += 1/60;
        shoot_text();
      }
      break;
    case 2:
      background_sound.setVolume(0.1)
      draw_gun1();
      draw_shoot1();
      if (timer == 0){
        disqualify = true;
        disqualify_text();
        player1 = Infinity;
      } else{
        timer_text();
        player1 = timer;
      }
      next_text()
      break; 
    case 3:
      frameTime = 0;
      timer = 0;
      
      player2_turn();
      start_text();
      break;
    case 4:
      draw_gun4();
      background_sound.setVolume(0.01)
      frameTime++;
      if (frameTime > random_delay2*60){
        timer += 1/60;
        shoot_text();
      }
      break;
    case 5:
      draw_gun2();
      draw_shoot2();
      background_sound.setVolume(0.1)
      if (timer == 0){
        disqualify_text();
        player2 = Infinity;
      } else{
        timer_text();
        player2 = timer;
      }
      reset_text();
      break;
    case 6:
      click_count = 0;
  }
  
  
}

function trigger(){
  if (label == "shoot" && click_count == 1){
    click_count += 1
    sound_gun();
  }
  if (label == "shoot" && click_count == 4){
    click_count += 1;
    sound_gun();
  }
}  

function mouseClicked(){
  click_count += 1;
}