const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,player2,nonPlayer1,nonPlayer2,pc1,pc2,npc1,npc2,mask1,mask2,mask3,mask4;

var score = 0;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,outline1,outline2,outline3,outline4;

function preload(){

  imagePreload()


}

function setup() {
  createCanvas(1500, 755);

  mazeMap()

  playerInfoC()

  mask4C()
}

function draw() {
  background("black");

  text("Score: "+ score, 500,50);

  scoreEND()

  cords()

  wallCo()

  mop()

  maskS()

  //player.x = mouseX;
  //player.y = mouseY;

  devMode()

  drawSprites();
}














function scoreEND(){

  if(score === 100)
  
  player.visible = false

  /*wall1.visible = false

  wall2.visible = false

  wall3.visible = false

  wall4.visible = false

  wall5.visible = false

  wall6.visible = false

  wall7.visible = false

  wall8.visible = false

  wall9.visible = false

  wall10.visible = false

  wall11.visible = false

  wall12.visible = false

  wall13.visible = false

  wall14.visible = false

  wall15.visible = false

  wall16.visible = false

  wall17.visible = false

  wall18.visible = false

  wall19.visible = false

  wall20.visible = false

  wall21.visible = false

  wall22.visible = false

  wall23.visible = false

  wall24.visible = false

  wall25.visible = false

  wall26.visible = false

  wall27.visible = false

  wall28.visible = false

  wall29.visible = false

  wall30.visible = false

  wall31.visible = false

  wall32.visible = false

  wall33.visible = false

  wall34.visible = false*/

  //text("NOW WE ARE SAVE!!! THANKS FOR PLAYING BE SURE TO WEAR MASK WHEN U GO OUTSIDE AND WASH YOUR HAND WHEN YOU COME BACK HOME!!", 375,377.5)
  
}

function maskS(){

  if(player.isTouching(mask1)){

  score = score+25

  mask1.visible = false;

  mask1.x = 1000;
  mask1.y = 1000;

}

if(player.isTouching(mask2)){

  score = score+25

  mask2.visible = false;

  mask2.x = 1000;
  mask2.y = 1000;
}

if(player.isTouching(mask3)){

  score = score+25

  mask3.visible = false;

  mask3.x = 1000;
  mask3.y = 1000;
}

if(player.isTouching(mask4)){

  score = score+25

  mask4.visible = false;

  mask4.x = 1000;
  mask4.y = 1000;
}
}



function cords(){

  text(mouseX + "," +mouseY,mouseX,mouseY);
}


function playerInfoC(){
  player = createSprite(750,500,50,50);
  player.scale = 0.4;
  player.addImage("pc1",pc1);  
}


function mask4C(){

  mask1 = createSprite(187,50,50,50);
  mask1.scale = 0.2;
  mask1.addImage("mask",mask);

  mask2 = createSprite(1312,50,50,50);
  mask2.scale = 0.2;
  mask2.addImage("mask",mask);

  mask3 = createSprite(750,615,50,50);
  mask3.scale = 0.2;
  mask3.addImage("mask",mask);

  mask4 = createSprite(750,400,50,50);
  mask4.scale = 0.2;
  mask4.addImage("mask",mask);

}


function wallCo(){

  //collide with maze walls

  player.collide(wall1);

  player.collide(wall2);

  player.collide(wall3);

  player.collide(wall4);

  player.collide(wall5);

  player.collide(wall6);

  player.collide(wall7);

  player.collide(wall8);

  player.collide(wall9);

  player.collide(wall10);

  player.collide(wall11);

  player.collide(wall12);

  player.collide(wall13);

  player.collide(wall14);

  player.collide(wall15);

  player.collide(wall16);

  player.collide(wall17);

  player.collide(wall18);

  player.collide(wall19);

  player.collide(wall20);

  player.collide(wall21);

  player.collide(wall22);

  player.collide(wall23);

  player.collide(wall24);

  player.collide(wall25);

  player.collide(wall26);

  player.collide(wall27);

  player.collide(wall28);

  player.collide(wall29);

  player.collide(wall30);

  player.collide(wall31);

  player.collide(wall32);

  player.collide(wall33);

  player.collide(wall34);

  player.collide(wall35);

  player.collide(wall36);

  player.collide(wall37);

  player.collide(wall38);
  
  //collide with outlines

  player.collide(outline1);
  
  player.collide(outline4);
  
  player.collide(outline3);
  
  player.collide(outline2);
}






function mop(){

player.velocityX=0;
  player.velocityY=0;
  
  
  if (keyDown(UP_ARROW)) {
    player.velocityX=0;
    player.velocityY=-10;
  }
  
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 10;
  }
  
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -10;
    player.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 10;
    player.velocityY = 0;
  }
}


function imagePreload(){

  npc1 = loadImage("images/Grandpawithoutmask2.png");

  npc2 = loadImage("images/covin2.png");
 
  pc1 = loadImage("images/ManwithoutMASK2.png");
 
  pc2 = loadImage("images/ManwithMASK2.png");
 
  mask = loadImage("images/maskcmaze.png")

}


function mazeMap() {

  //outline

  outline1 = createSprite(750, 15, 1450, 5);
  outline1.shapeColor = color("blue"); 

  outline2 = createSprite(25, 377.5, 5, 730);
  outline2.shapeColor = color("blue");

  outline3 = createSprite(750,740, 1450, 5);
  outline3.shapeColor = color("blue");

  outline4 = createSprite(1475, 377.5, 5, 730);
  outline4.shapeColor = color("blue");
  
  //walls

  wall1 = createSprite(375, 85, 10, 145);
  wall1.shapeColor = color("blue");

  wall2 = createSprite(1125, 85, 10, 145);
  wall2.shapeColor = color("blue");

  wall3 = createSprite(750, 125, 610, 45);
  wall3.shapeColor = color("blue");

  wall4 = createSprite(375, 350, 10, 170);
  wall4.shapeColor = color("blue");

  wall5 = createSprite(1125, 350, 10, 170);
  wall5.shapeColor = color("blue");

  wall6 = createSprite(187.5, 125, 199, 45)
  wall6.shapeColor = color("blue");

  wall7 = createSprite(1312.5, 125, 199, 45);
  wall7.shapeColor = color("blue");

  wall8 = createSprite(281.25, 350, 10, 45);
  wall8.shapeColor = color("blue");

  wall9 = createSprite(1218.75,350, 10, 45);
  wall9.shapeColor = color("blue");

  wall10 = createSprite(187.5,365,10,145);
  wall10.shapeColor = color("blue");

  wall11 = createSprite(234.375,440,105,10);
  wall11.shapeColor = color("blue");

  wall12 = createSprite(1312.5,365,10,145);
  wall12.shapeColor = color("blue");

  wall13 = createSprite(1265,440,105,10);
  wall13.shapeColor = color("blue");

  wall14 = createSprite(735,575,980,10);
  wall14.shapeColor = color("blue");

  wall15 = createSprite(50,575,45,10);
  wall15.shapeColor = color("blue");

  wall16 = createSprite(150,575,45,10);
  wall16.shapeColor = color("blue");

  wall17 = createSprite(175,600, 10, 60);
  wall17.shapeColor = color("blue");

  wall18 = createSprite(175,710,10, 60);
  wall18.shapeColor = color("blue");

  wall19 = createSprite(1315,710, 10, 60);
  wall19.shapeColor = color("blue");

  wall20 = createSprite(1315,600, 10, 60);
  wall20.shapeColor = color("blue");

  wall21 = createSprite(1335,575,45,10);
  wall21.shapeColor = color("blue");

  wall22 = createSprite(1450,575,45,10);
  wall22.shapeColor = color("blue");

  wall23 = createSprite(1220,605, 10, 60);
  wall23.shapeColor = color("blue");

  wall24 = createSprite(250,605, 10, 60);
  wall24.shapeColor = color("blue");
  
  wall25 = createSprite(360,700,10,80);
  wall25.shapeColor = color("blue");

  wall26 = createSprite(455,610, 10,80);
  wall26.shapeColor = color("blue");

  wall27 = createSprite(560,700,10,80);
  wall27.shapeColor = color("blue");

  wall28 = createSprite(660,610,10,80);
  wall28.shapeColor = color("blue");

  wall29 = createSprite(750,700,10,80);
  wall29.shapeColor = color("blue");

  wall30 = createSprite(850,610,10,80);
  wall30.shapeColor = color("blue");

  wall31 = createSprite(1125,700,10,80);
  wall31.shapeColor = color("blue");

  wall32 = createSprite(945,700,10,80);
  wall32.shapeColor = color("blue");

  wall33 = createSprite(1030,610,10,80);
  wall33.shapeColor = color("blue");

  wall34 = createSprite(750,430,300,10);
  wall34.shapeColor = color("blue");

  wall35 = createSprite(605,360,10,145);
  wall35.shapeColor = color("blue");

  wall36 = createSprite(895,360,10,145);
  wall36.shapeColor = color("blue");

  wall37 = createSprite(1125, 85, 10, 145);
  wall37.shapeColor = color("blue");

  wall38 = createSprite(1125, 85, 10, 145);
  wall38.shapeColor = color("blue");
}

function devMode(){

  player.velocityY=0;
  
  
  if (keyDown(UP_ARROW)) {
    player.velocityX=0;
    player.velocityY=-25;
  }
  
  if (keyDown(DOWN_ARROW)) {
    player.velocityX = 0;
    player.velocityY = 25;
  }
  
  if (keyDown(LEFT_ARROW)) {
    player.velocityX = -25;
    player.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player.velocityX = 25;
    player.velocityY = 0;
  }

}




