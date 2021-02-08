let x_bul1 = 75;
let y_bul1 = 450/2-50;
let x_bul2 = 450;
let y_bul2 = 450/2-50;

function draw_gun1(){
  image(gun_image1, 25, height/2-60);
  image(bullet_image1, x_bul1, y_bul1);
}

function draw_shoot1(){
  if (x_bul1<1000){
    x_bul1 += 15;
  }
}

function draw_gun2(){
  image(gun_image2, width-150, height/2-60);
  image(bullet_image2, x_bul2, y_bul2);
}

function draw_shoot2(){
  if (x_bul2>-100){
    x_bul2 -= 15;
  }
}

function draw_gun3(){
  image(gun_image3, 25, height/2-60);
}

function draw_gun4(){
  image(gun_image4, width-150, height/2-60);
}
