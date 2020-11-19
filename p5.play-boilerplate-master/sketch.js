var backgrondimg;
var block1,block2;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var police,policeimg,policeimg2;
var bulletDirection="right";
var bullet,leftBulletimg,rightBulletimg;
var policespeed=5;
var thief1bullet,thief2bullet,thief3bullet,thief4bullet,thief5bullet,thief6bullet,thief7bullet,thief8bullet,thief9bullet,thief10bullet;
var thief1,thief1img,thief2,thief2img,thief3,thief4,thief5,thief6,thief7,thief8,thief9,thief10;
var thief1life=200;
var thief2life=200;
var thief3life=200;
var thief4life=200;
var thief5life=200;
var thief6life=200;
var thief7life=200;
var thief8life=200;
var thief9life=200;
var thief10life=200;
var policelife=200;
var gunShot,damage;
var bulletPower=40;
var failed,failedimg;
var bulletGroup,thief1Group,thief2Group,thief3Group,thief4Group,thief5Group,thief6Group,thief7Group,thief8Group,thief9Group,thief10Group;
var policeBullets=100;
var thiefbar;
var key,keyimg;
var thiefslife=0;
function preload(){
  policeimg2=loadImage("img/police.png");
backgrondimg=loadImage("img/backgroundimg.png");
policeimg=loadImage("img/police2.png");
thief1img=loadImage("img/thief1.png");
thief2img=loadImage("img/thief2.png");
leftBulletimg=loadImage("img/bullet left.png")
rightBulletimg=loadImage("img/bullet right.png")
failedimg=loadImage("img/failed1.png")
gunShot=loadSound("sounds/shotgun.mp3");
damage=loadSound("sounds/damagemale.mp3");
keyimg=loadImage("img/key1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
 police= createSprite(300, 170, 30, 30);
 police.addImage(policeimg);
 police.scale=0.05;
 police.visible=true;
 //police.debug=true;
 police.setCollider("circle",0,0,300);

 thief1= createSprite(170, random(315,415), 30, 30);
 thief1.addImage(thief1img);
 thief1.scale=0.2;

 thief2= createSprite(170, 550, 30, 30);
 thief2.addImage(thief1img);
 thief2.scale=0.2;
 
thief3= createSprite(170, 800, 30, 30);
thief3.addImage(thief1img);
thief3.scale=0.2;

thief4= createSprite(370, 805, 20, 20);
thief4.addImage(thief1img);
thief4.scale=0.2;

thief5= createSprite(1210, 430, 30, 30);
thief5.addImage(thief1img);
thief5.scale=0.2;

thief6= createSprite(1210, 560, 30, 30);
thief6.addImage(thief1img);
thief6.scale=0.2;
//thief6.debug=true;

thief7= createSprite(1490, 805, 30, 30);
thief7.addImage(thief2img);
thief7.scale=0.25;

thief8= createSprite(1490, 705, 30, 30);
thief8.addImage(thief2img);
thief8.scale=0.25;

thief9= createSprite(1720, 125, 30, 30);
thief9.addImage(thief2img);
thief9.scale=0.25;

thief10= createSprite(1720, 250, 30, 30);
thief10.addImage(thief2img);
thief10.scale=0.25;

bulletGroup=new Group();
thief1Group=new Group();
thief2Group=new Group();
thief3Group=new Group();
thief4Group=new Group();
thief5Group=new Group();
thief6Group=new Group();
thief7Group=new Group();
thief8Group=new Group();
thief9Group=new Group();
thief10Group=new Group();

wall1= createSprite(105, 500, 20, 725);
wall1.visible=false;

wall2= createSprite(225, 160, 15, 195);
wall2.visible=false;

wall3= createSprite(450, 252, 455, 8);
wall3.visible=false;

wall4= createSprite(672, 230, 11, 50);
wall4.visible=false;

wall5= createSprite(672, 120, 11, 110);
wall5.visible=false;

wall6= createSprite(450, 70, 450, 12);
wall6.visible=false;

wall7= createSprite(390, 300, 565, 8);
wall7.visible=false;

wall8= createSprite(390, 605, 565, 8);
wall8.visible=false;

wall9= createSprite(390, 858, 565, 10);
wall9.visible=false;

wall10= createSprite(500, 665, 353, 8);
wall10.visible=false;

wall11= createSprite(332, 760, 10, 190);
wall11.visible=false;

wall12= createSprite(670, 810, 13, 100);
wall12.visible=false;

wall13= createSprite(670, 680, 12, 30);
wall13.visible=false;

wall14= createSprite(670, 570, 12, 70);
wall14.visible=false;

wall15= createSprite(670, 450, 12, 70);
wall15.visible=false;

wall16= createSprite(670, 325, 12, 60);
wall16.visible=false;

wall17= createSprite(1460, 70, 630, 12);
wall17.visible=false;

wall18= createSprite(1655, 305, 250, 8);
wall18.visible=false;

wall19= createSprite(1295, 305, 300, 8);
wall19.visible=false;

wall20= createSprite(1152, 290, 13, 30);
wall20.visible=false;

wall21= createSprite(1172, 490, 10, 240);
wall21.visible=false;

wall22= createSprite(1385, 610, 435, 8);
wall22.visible=false;

wall23= createSprite(1385, 375, 435, 8);
wall23.visible=false;

wall24= createSprite(1465, 655, 600, 8);
wall24.visible=false;

wall25= createSprite(1360, 858, 390, 8);
wall25.visible=false;

wall26= createSprite(1543, 805, 14, 110);
//wall26.visible=false;

wall27= createSprite(1543, 685, 12, 60);
//wall27.visible=false;

wall28= createSprite(1170, 820, 10, 80);
wall28.visible=false;

wall29= createSprite(1170, 685, 10, 60);
wall29.visible=false;

wall30= createSprite(1660, 775, 230, 10);
wall30.visible=false;

wall31= createSprite(1770, 420, 15, 710);
wall31.visible=false;

wall32= createSprite(1600, 590, 10, 40);
wall32.visible=false;

wall33= createSprite(1600, 470, 10, 90);
wall33.visible=false;

wall34= createSprite(1600, 385, 10, 30);
wall34.visible=false;

wall35= createSprite(1150, 130, 11, 130);
wall35.visible=false;

block1= createSprite(1540, 730, 35, 35);
block1.visible=false;

block2= createSprite(220, 200, 35, 35);
block2.visible=false;

thief1lifebar=createSprite(250,300,thief1life,10);
thief1lifebar.shapeColor="red";

thief2lifebar=createSprite(250,605,thief2life,10);
thief2lifebar.shapeColor="red";

thief3lifebar=createSprite(220,860,thief3life,10);
thief3lifebar.shapeColor="red";

thief4lifebar=createSprite(550,860,thief4life,10);
thief4lifebar.shapeColor="red";

thief5lifebar=createSprite(1400,thief5.y-60,thief5life,10);
thief5lifebar.shapeColor="red";

thief6lifebar=createSprite(1400,thief6.y+50,thief6life,10);
thief6lifebar.shapeColor="red";

thief7lifebar=createSprite(1400,thief7.y+55,thief7life,10);
thief7lifebar.shapeColor="red";

thief8lifebar=createSprite(1400,thief8.y-50,thief8life,10);
thief8lifebar.shapeColor="red";

thief9lifebar=createSprite(1650,thief9.y-57,thief9life,10);
thief9lifebar.shapeColor="red";

thief10lifebar=createSprite(1650,thief10.y+55,thief10life,10);
thief10lifebar.shapeColor="red";

policelifebar=createSprite(1650,38,policelife*2,20);
policelifebar.shapeColor="red";

key=createSprite(1700,700,50,50);
key.addImage(keyimg);
key.scale=0.1;  


}

function draw() {
  background(backgrondimg); 
 //background(255); 
 
 police.bounceOff(wall1);
  police.bounceOff(wall2);
  police.bounceOff(wall3);
  police.bounceOff(wall4);
  police.bounceOff(wall5);
  police.bounceOff(wall6);
  police.bounceOff(wall7);
  police.bounceOff(wall8);
  police.bounceOff(wall9);
  police.bounceOff(wall10);
  police.bounceOff(wall11);
  police.bounceOff(wall12);
  police.bounceOff(wall13);
  police.bounceOff(wall14);
  police.bounceOff(wall15);
  police.bounceOff(wall16);
  police.bounceOff(wall17);
  police.bounceOff(wall18);
  police.bounceOff(wall19);
  police.bounceOff(wall20);
  police.bounceOff(wall21);
  police.bounceOff(wall22);
  police.bounceOff(wall23);
  police.bounceOff(wall24);
  police.bounceOff(wall25);
  police.bounceOff(wall26);
  police.bounceOff(wall27);
  police.bounceOff(wall28);
  police.bounceOff(wall29);
  police.bounceOff(wall30);
  police.bounceOff(wall31);
  police.bounceOff(wall32);
  police.bounceOff(wall33);
  police.bounceOff(wall34);
  police.bounceOff(wall35);
  police.bounceOff(block2);

  if(keyDown("up")){
    police.y = police.y -policespeed;
  }
 
 if(keyDown("down")){
    police.y = police.y +policespeed;
  }
 if(keyDown("right")){
     police.x= police.x +policespeed;
     police.addImage(policeimg); 
     bulletDirection="right";
    }
 
 if(keyDown("left")){
     police.x = police.x -policespeed;
     police.addImage(policeimg2);
     bulletDirection="left";
 }

 if(policeBullets>0){
if(keyDown("space")){
  policeBullets-=1
shootBullet(bulletDirection);
gunShot.play();
}
}
console.log(policeBullets)
if(policeBullets===0){
  if(keyDown("space")){
 fill("red")
    }else{
    fill(255);}
    textSize(50);
text("Bullets are Over" ,displayWidth/2-220,50)
     
} 
if(bulletGroup.isTouching(thief1)){
 bulletGroup.destroyEach();
  thief1life-=bulletPower
  thief1lifebar.width-=bulletPower;
  damage.play();
}
if(bulletGroup.isTouching(thief2)){
  bulletGroup.destroyEach();
   thief2life-=bulletPower
   thief2lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief3)){
  bulletGroup.destroyEach();
   thief3life-=bulletPower
   thief3lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief4)){
  bulletGroup.destroyEach();
   thief4life-=bulletPower
   thief4lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief5)){
  bulletGroup.destroyEach();
   thief5life-=bulletPower
   thief5lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief6)){
  bulletGroup.destroyEach();
   thief6life-=bulletPower
   thief6lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief7)){
  bulletGroup.destroyEach();
   thief7life-=bulletPower
   thief7lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief8)){
  bulletGroup.destroyEach();
   thief8life-=bulletPower
   thief8lifebar.width-=bulletPower;
   damage.play();
 }
 if(bulletGroup.isTouching(thief9)){
  bulletGroup.destroyEach();
   thief9life-=bulletPower
   thief9lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief10)){
  bulletGroup.destroyEach();
   thief10life-=bulletPower
   thief10lifebar.width-=bulletPower;
   damage.play();
 }

if(bulletGroup.isTouching(wall1) || bulletGroup.isTouching(wall2) || bulletGroup.isTouching(wall3) || bulletGroup.isTouching(wall4) || bulletGroup.isTouching(wall5) || bulletGroup.isTouching(wall6) || bulletGroup.isTouching(wall7) || bulletGroup.isTouching(wall8) || bulletGroup.isTouching(wall9) || bulletGroup.isTouching(wall10) || bulletGroup.isTouching(wall11) || bulletGroup.isTouching(wall12) || bulletGroup.isTouching(wall13) || bulletGroup.isTouching(wall14) || bulletGroup.isTouching(wall15) || bulletGroup.isTouching(wall16) || bulletGroup.isTouching(wall17) || bulletGroup.isTouching(wall18) || bulletGroup.isTouching(wall19) || bulletGroup.isTouching(wall20) || bulletGroup.isTouching(wall21) || bulletGroup.isTouching(wall22) || bulletGroup.isTouching(wall23) || bulletGroup.isTouching(wall24) || bulletGroup.isTouching(wall25) || bulletGroup.isTouching(wall26) || bulletGroup.isTouching(wall27) || bulletGroup.isTouching(wall28) || bulletGroup.isTouching(wall29) || bulletGroup.isTouching(wall30) || bulletGroup.isTouching(wall31) || bulletGroup.isTouching(wall32) || bulletGroup.isTouching(wall33) || bulletGroup.isTouching(wall34) || bulletGroup.isTouching(wall35)){
  bulletGroup.destroyEach();
 }
 if(thief1Group.isTouching(wall1) || thief1Group.isTouching(wall2) || thief1Group.isTouching(wall3) || thief1Group.isTouching(wall4) || thief1Group.isTouching(wall5) || thief1Group.isTouching(wall6) || thief1Group.isTouching(wall7) || thief1Group.isTouching(wall8) || thief1Group.isTouching(wall9) || thief1Group.isTouching(wall10) || thief1Group.isTouching(wall11) || thief1Group.isTouching(wall12) || thief1Group.isTouching(wall13) || thief1Group.isTouching(wall14) || thief1Group.isTouching(wall15) || thief1Group.isTouching(wall16) || thief1Group.isTouching(wall17) || thief1Group.isTouching(wall18) || thief1Group.isTouching(wall19) || thief1Group.isTouching(wall20) || thief1Group.isTouching(wall21) || thief1Group.isTouching(wall22) || thief1Group.isTouching(wall23) || thief1Group.isTouching(wall24) || thief1Group.isTouching(wall25) || thief1Group.isTouching(wall26) || thief1Group.isTouching(wall27) || thief1Group.isTouching(wall28) || thief1Group.isTouching(wall29) || thief1Group.isTouching(wall30) || thief1Group.isTouching(wall31) || thief1Group.isTouching(wall32) || thief1Group.isTouching(wall33) || thief1Group.isTouching(wall34) || thief1Group.isTouching(wall35)){
  thief1Group.destroyEach();
 }
 if(thief2Group.isTouching(wall1) || thief2Group.isTouching(wall2) || thief2Group.isTouching(wall3) || thief2Group.isTouching(wall4) || thief2Group.isTouching(wall5) || thief2Group.isTouching(wall6) || thief2Group.isTouching(wall7) || thief2Group.isTouching(wall8) || thief2Group.isTouching(wall9) || thief2Group.isTouching(wall10) || thief2Group.isTouching(wall11) || thief2Group.isTouching(wall12) || thief2Group.isTouching(wall13) || thief2Group.isTouching(wall14) || thief2Group.isTouching(wall15) || thief2Group.isTouching(wall16) || thief2Group.isTouching(wall17) || thief2Group.isTouching(wall18) || thief2Group.isTouching(wall19) || thief2Group.isTouching(wall20) || thief2Group.isTouching(wall21) || thief2Group.isTouching(wall22) || thief2Group.isTouching(wall23) || thief2Group.isTouching(wall24) || thief2Group.isTouching(wall25) || thief2Group.isTouching(wall26) || thief2Group.isTouching(wall27) || thief2Group.isTouching(wall28) || thief2Group.isTouching(wall29) || thief2Group.isTouching(wall30) || thief2Group.isTouching(wall31) || thief2Group.isTouching(wall32) || thief2Group.isTouching(wall33) || thief2Group.isTouching(wall34) || thief2Group.isTouching(wall35)){
  thief2Group.destroyEach();
 }
 if(thief3Group.isTouching(wall1) || thief3Group.isTouching(wall2) || thief3Group.isTouching(wall3) || thief3Group.isTouching(wall4) || thief3Group.isTouching(wall5) || thief3Group.isTouching(wall6) || thief3Group.isTouching(wall7) || thief3Group.isTouching(wall8) || thief3Group.isTouching(wall9) || thief3Group.isTouching(wall10) || thief3Group.isTouching(wall11) || thief3Group.isTouching(wall12) || thief3Group.isTouching(wall13) || thief3Group.isTouching(wall14) || thief3Group.isTouching(wall15) || thief3Group.isTouching(wall16) || thief3Group.isTouching(wall17) || thief3Group.isTouching(wall18) || thief3Group.isTouching(wall19) || thief3Group.isTouching(wall20) || thief3Group.isTouching(wall21) || thief3Group.isTouching(wall22) || thief3Group.isTouching(wall23) || thief3Group.isTouching(wall24) || thief3Group.isTouching(wall25) || thief3Group.isTouching(wall26) || thief3Group.isTouching(wall27) || thief3Group.isTouching(wall28) || thief3Group.isTouching(wall29) || thief3Group.isTouching(wall30) || thief3Group.isTouching(wall31) || thief3Group.isTouching(wall32) || thief3Group.isTouching(wall33) || thief3Group.isTouching(wall34) || thief3Group.isTouching(wall35)){
  thief3Group.destroyEach();
 }
 if(thief4Group.isTouching(wall1) || thief4Group.isTouching(wall2) || thief4Group.isTouching(wall3) || thief4Group.isTouching(wall4) || thief4Group.isTouching(wall5) || thief4Group.isTouching(wall6) || thief4Group.isTouching(wall7) || thief4Group.isTouching(wall8) || thief4Group.isTouching(wall9) || thief4Group.isTouching(wall10) || thief4Group.isTouching(wall11) || thief4Group.isTouching(wall12) || thief4Group.isTouching(wall13) || thief4Group.isTouching(wall14) || thief4Group.isTouching(wall15) || thief4Group.isTouching(wall16) || thief4Group.isTouching(wall17) || thief4Group.isTouching(wall18) || thief4Group.isTouching(wall19) || thief4Group.isTouching(wall20) || thief4Group.isTouching(wall21) || thief4Group.isTouching(wall22) || thief4Group.isTouching(wall23) || thief4Group.isTouching(wall24) || thief4Group.isTouching(wall25) || thief4Group.isTouching(wall26) || thief4Group.isTouching(wall27) || thief4Group.isTouching(wall28) || thief4Group.isTouching(wall29) || thief4Group.isTouching(wall30) || thief4Group.isTouching(wall31) || thief4Group.isTouching(wall32) || thief4Group.isTouching(wall33) || thief4Group.isTouching(wall34) || thief4Group.isTouching(wall35)){
  thief4Group.destroyEach();
 }
 if(thief5Group.isTouching(wall1) || thief5Group.isTouching(wall2) || thief5Group.isTouching(wall3) || thief5Group.isTouching(wall4) || thief5Group.isTouching(wall5) || thief5Group.isTouching(wall6) || thief5Group.isTouching(wall7) || thief5Group.isTouching(wall8) || thief5Group.isTouching(wall9) || thief5Group.isTouching(wall10) || thief5Group.isTouching(wall11) || thief5Group.isTouching(wall12) || thief5Group.isTouching(wall13) || thief5Group.isTouching(wall14) || thief5Group.isTouching(wall15) || thief5Group.isTouching(wall16) || thief5Group.isTouching(wall17) || thief5Group.isTouching(wall18) || thief5Group.isTouching(wall19) || thief5Group.isTouching(wall20) || thief5Group.isTouching(wall21) || thief5Group.isTouching(wall22) || thief5Group.isTouching(wall23) || thief5Group.isTouching(wall24) || thief5Group.isTouching(wall25) || thief5Group.isTouching(wall26) || thief5Group.isTouching(wall27) || thief5Group.isTouching(wall28) || thief5Group.isTouching(wall29) || thief5Group.isTouching(wall30) || thief5Group.isTouching(wall31) || thief5Group.isTouching(wall32) || thief5Group.isTouching(wall33) || thief5Group.isTouching(wall34) || thief5Group.isTouching(wall35)){
  thief5Group.destroyEach();
 }
 if(thief6Group.isTouching(wall1) || thief6Group.isTouching(wall2) || thief6Group.isTouching(wall3) || thief6Group.isTouching(wall4) || thief6Group.isTouching(wall5) || thief6Group.isTouching(wall6) || thief6Group.isTouching(wall7) || thief6Group.isTouching(wall8) || thief6Group.isTouching(wall9) || thief6Group.isTouching(wall10) || thief6Group.isTouching(wall11) || thief6Group.isTouching(wall12) || thief6Group.isTouching(wall13) || thief6Group.isTouching(wall14) || thief6Group.isTouching(wall15) || thief6Group.isTouching(wall16) || thief6Group.isTouching(wall17) || thief6Group.isTouching(wall18) || thief6Group.isTouching(wall19) || thief6Group.isTouching(wall20) || thief6Group.isTouching(wall21) || thief6Group.isTouching(wall22) || thief6Group.isTouching(wall23) || thief6Group.isTouching(wall24) || thief6Group.isTouching(wall25) || thief6Group.isTouching(wall26) || thief6Group.isTouching(wall27) || thief6Group.isTouching(wall28) || thief6Group.isTouching(wall29) || thief6Group.isTouching(wall30) || thief6Group.isTouching(wall31) || thief6Group.isTouching(wall32) || thief6Group.isTouching(wall33) || thief6Group.isTouching(wall34) || thief6Group.isTouching(wall35)){
  thief6Group.destroyEach();
 }
 if(thief7Group.isTouching(wall1) || thief7Group.isTouching(wall2) || thief7Group.isTouching(wall3) || thief7Group.isTouching(wall4) || thief7Group.isTouching(wall5) || thief7Group.isTouching(wall6) || thief7Group.isTouching(wall7) || thief7Group.isTouching(wall8) || thief7Group.isTouching(wall9) || thief7Group.isTouching(wall10) || thief7Group.isTouching(wall11) || thief7Group.isTouching(wall12) || thief7Group.isTouching(wall13) || thief7Group.isTouching(wall14) || thief7Group.isTouching(wall15) || thief7Group.isTouching(wall16) || thief7Group.isTouching(wall17) || thief7Group.isTouching(wall18) || thief7Group.isTouching(wall19) || thief7Group.isTouching(wall20) || thief7Group.isTouching(wall21) || thief7Group.isTouching(wall22) || thief7Group.isTouching(wall23) || thief7Group.isTouching(wall24) || thief7Group.isTouching(wall25) || thief7Group.isTouching(wall26) || thief7Group.isTouching(wall27) || thief7Group.isTouching(wall28) || thief7Group.isTouching(wall29) || thief7Group.isTouching(wall30) || thief7Group.isTouching(wall31) || thief7Group.isTouching(wall32) || thief7Group.isTouching(wall33) || thief7Group.isTouching(wall34) || thief7Group.isTouching(wall35)){
  thief7Group.destroyEach();
 }
 if(thief8Group.isTouching(wall1) || thief8Group.isTouching(wall2) || thief8Group.isTouching(wall3) || thief8Group.isTouching(wall4) || thief8Group.isTouching(wall5) || thief8Group.isTouching(wall6) || thief3Group.isTouching(wall7) || thief8Group.isTouching(wall8) || thief8Group.isTouching(wall9) || thief8Group.isTouching(wall10) || thief8Group.isTouching(wall11) || thief8Group.isTouching(wall12) || thief8Group.isTouching(wall13) || thief8Group.isTouching(wall14) || thief8Group.isTouching(wall15) || thief8Group.isTouching(wall16) || thief8Group.isTouching(wall17) || thief8Group.isTouching(wall18) || thief8Group.isTouching(wall19) || thief8Group.isTouching(wall20) || thief8Group.isTouching(wall21) || thief8Group.isTouching(wall22) || thief8Group.isTouching(wall23) || thief8Group.isTouching(wall24) || thief8Group.isTouching(wall25) || thief8Group.isTouching(wall26) || thief8Group.isTouching(wall27) || thief8Group.isTouching(wall28) || thief8Group.isTouching(wall29) || thief8Group.isTouching(wall30) || thief8Group.isTouching(wall31) || thief8Group.isTouching(wall32) || thief8Group.isTouching(wall33) || thief8Group.isTouching(wall34) || thief8Group.isTouching(wall35)){
  thief8Group.destroyEach();
 }
 if(thief9Group.isTouching(wall1) || thief9Group.isTouching(wall2) || thief9Group.isTouching(wall3) || thief9Group.isTouching(wall4) || thief9Group.isTouching(wall5) || thief9Group.isTouching(wall6) || thief9Group.isTouching(wall7) || thief9Group.isTouching(wall8) || thief9Group.isTouching(wall9) || thief9Group.isTouching(wall10) || thief9Group.isTouching(wall11) || thief9Group.isTouching(wall12) || thief9Group.isTouching(wall13) || thief9Group.isTouching(wall14) || thief9Group.isTouching(wall15) || thief9Group.isTouching(wall16) || thief9Group.isTouching(wall17) || thief9Group.isTouching(wall18) || thief9Group.isTouching(wall19) || thief9Group.isTouching(wall20) || thief9Group.isTouching(wall21) || thief9Group.isTouching(wall22) || thief9Group.isTouching(wall23) || thief9Group.isTouching(wall24) || thief9Group.isTouching(wall25) || thief9Group.isTouching(wall26) || thief9Group.isTouching(wall27) || thief9Group.isTouching(wall28) || thief9Group.isTouching(wall29) || thief9Group.isTouching(wall30) || thief9Group.isTouching(wall31) || thief9Group.isTouching(wall32) || thief9Group.isTouching(wall33) || thief9Group.isTouching(wall34) || thief9Group.isTouching(wall35)){
  thief9Group.destroyEach();
 }
 if(thief10Group.isTouching(wall1) || thief10Group.isTouching(wall2) || thief10Group.isTouching(wall3) || thief10Group.isTouching(wall4) || thief10Group.isTouching(wall5) || thief10Group.isTouching(wall6) || thief10Group.isTouching(wall7) || thief10Group.isTouching(wall8) || thief10Group.isTouching(wall9) || thief10Group.isTouching(wall10) || thief10Group.isTouching(wall11) || thief10Group.isTouching(wall12) || thief10Group.isTouching(wall13) || thief10Group.isTouching(wall14) || thief10Group.isTouching(wall15) || thief10Group.isTouching(wall16) || thief10Group.isTouching(wall17) || thief10Group.isTouching(wall18) || thief10Group.isTouching(wall19) || thief10Group.isTouching(wall20) || thief10Group.isTouching(wall21) || thief10Group.isTouching(wall22) || thief10Group.isTouching(wall23) || thief10Group.isTouching(wall24) || thief10Group.isTouching(wall25) || thief10Group.isTouching(wall26) || thief10Group.isTouching(wall27) || thief10Group.isTouching(wall28) || thief10Group.isTouching(wall29) || thief10Group.isTouching(wall30) || thief10Group.isTouching(wall31) || thief10Group.isTouching(wall32) || thief10Group.isTouching(wall33) || thief10Group.isTouching(wall34) || thief10Group.isTouching(wall35)){
  thief10Group.destroyEach();
 }
 if(policelife>0){
 if(thief1Group.isTouching(police)){
   policelife-=20;
   policelifebar.width-=40;
   thief1Group.destroyEach();
 }}
 if(policelife>0){
  if(thief2Group.isTouching(police)){
    policelife-=20;
    policelifebar.width-=40;
    thief2Group.destroyEach();
  }}
  if(policelife>0){
    if(thief3Group.isTouching(police)){
      policelife-=20;
      policelifebar.width-=40;
      thief3Group.destroyEach();
    }}
    if(policelife>0){
     if(thief4Group.isTouching(police)){
       policelife-=20;
       policelifebar.width-=40;
       thief4Group.destroyEach();
     }}
     if(policelife>0){
      if(thief5Group.isTouching(police)){
        policelife-=20;
        policelifebar.width-=40;
        thief5Group.destroyEach();
      }}
      if(policelife>0){
       if(thief6Group.isTouching(police)){
         policelife-=20;
         policelifebar.width-=40;
         thief6Group.destroyEach();
       }}
       if(policelife>0){
        if(thief7Group.isTouching(police)){
          policelife-=20;
          policelifebar.width-=40;
          thief7Group.destroyEach();
        }}
        if(policelife>0){
         if(thief8Group.isTouching(police)){
           policelife-=20;
           policelifebar.width-=40;
           thief8Group.destroyEach();
         }}
         if(policelife>0){
          if(thief9Group.isTouching(police)){
            policelife-=20;
            policelifebar.width-=40;
            thief9Group.destroyEach();
          }}
          if(policelife>0){
           if(thief10Group.isTouching(police)){
             policelife-=20;
             policelifebar.width-=40;
             thief10Group.destroyEach();
           }}
           if(policelife===0){
             police.visible=false;
             policelifebar.visible=false;
             

           }
 if(policelife>0){
if(thief1life>0){
if(police.x>230 && police.x<690 && police.y>315 && police.y<415){
thief1Bulls();
thief1.y=police.y;
}}
 }
if(thief1life<=0){
  thief1.visible=false;
thief1lifebar.visible=false;
}
if(policelife>0){
if(thief2life>0){
  if(police.x>230 && police.x<690 && police.y>420 && police.y<599){
  thief2Bulls();
  thief2.y=police.y;
  }}}
  if(thief2life<=0){
    thief2.visible=false;
  thief2lifebar.visible=false;
  }
  if(policelife>0){
  if(thief3life>0){
    console.log(police.x);
    if(police.x>125 && police.x<325 && police.y>618 && police.y<835){
    thief3Bulls();
    thief3.y=police.y;
    }}}
    if(thief3life<=0){
      thief3.visible=false;
    thief3lifebar.visible=false;
    }
    if(policelife>0){
    if(thief4life>0){
      if(police.x>345 && police.x<670 && police.y>680 && police.y<845){
      thief4Bulls();
      thief4.y=police.y;
      }}}
      if(thief4life<=0){
        thief4.visible=false;
      thief4lifebar.visible=false;
      }
      if(policelife>0){
  if(thief5life>0){
    if(police.x>1170 && police.x<1525 && police.y>365 && police.y<494){
    thief5Bulls();
    thief5.y=police.y;
    }}}
    if(thief5life<=0){
      thief5.visible=false;
    thief5lifebar.visible=false;
    }
    if(policelife>0){
  if(thief6life>0){
    if(police.x>1187 && police.x<1525 && police.y>490 && police.y<596){
    thief6Bulls();
    thief6.y=police.y;
    }}}
    if(thief6life<=0){
      thief6.visible=false;
    thief6lifebar.visible=false;
    }
    if(policelife>0){
    if(thief7life>0){
      if(police.x>1187 && police.x<1600 && police.y>668 && police.y<855){
      thief7Bulls();
     // thief7.y=police.y;
      }}}
      if(thief7life<=0){
        thief7.visible=false;
      thief7lifebar.visible=false;
      }
      if(policelife>0){
      if(thief8life>0){
        if(police.x>1187 && police.x<1600 && police.y>668 && police.y<885){
        thief8Bulls();
       // thief8.y=police.y;
        }}}
        if(thief8life<=0){
          thief8.visible=false;
        thief8lifebar.visible=false;
        }
        if(policelife>0){
        if(thief9life>0){
          if(police.x>1160 && police.x<1605 && police.y>86 && police.y<186){
          thief9Bulls();
          thief9.y=police.y;
          }}}
          if(thief9life<=0){
            thief9.visible=false;
          thief9lifebar.visible=false;
          }
          if(policelife>0){
        if(thief10life>0){
          if(police.x>1160 && police.x<1605 && police.y>186 && police.y<291){
          thief10Bulls();
          thief10.y=police.y;
          }}}
         
          if(thief10life<=0){
            thief10.visible=false;
          thief10lifebar.visible=false;
          }
          if(thief10life<=0 && thief9life<=0 && thief8life<=0 && thief7life<=0 && thief6life<=0 && thief5life<=0 ){
            block1.destroy();
          }else{
            police.bounceOff(block1);
          }

console.log(policeBullets);
          //console.log(thief1life);
//console.log(police.x);
//console.log(police.y);
 drawSprites();

 if(thief1life>0){
  fill(255);
textSize(15);
text("thief1 Life :"+thief1life+"/200",thief1lifebar.x-60,thief1lifebar.y+5);
}
if(thief2life>0){
  fill(255);
textSize(15);
text("thief2 Life :"+thief2life+"/200",thief2lifebar.x-60,thief2lifebar.y+5);
}
if(thief3life>0){
  fill(255);
textSize(15);
text("thief3 Life :"+thief3life+"/200",thief3lifebar.x-60,thief3lifebar.y+5);
}
if(thief4life>0){
  fill(255);
textSize(15);
text("thief4 Life :"+thief4life+"/200",thief4lifebar.x-60,thief4lifebar.y+5);
}
if(thief5life>0){
  fill(255);
textSize(15);
text("thief7 Life :"+thief5life+"/200",thief5lifebar.x-60,thief5lifebar.y+5);
}
if(thief6life>0){
  fill(255);
textSize(15);
text("thief8 Life :"+thief6life+"/200",thief6lifebar.x-60,thief6lifebar.y+5);
}

if(thief7life>0){
  fill(255);
textSize(15);
text("thief10 Life :"+thief7life+"/200",thief7lifebar.x-60,thief7lifebar.y+5);
}
if(thief8life>0){
  fill(255);
textSize(15);
text("thief9 Life :"+thief8life+"/200",thief8lifebar.x-60,thief8lifebar.y+5);
}
if(thief9life>0){
  fill(255);
textSize(15);
text("thief5 Life :"+thief9life+"/200",thief9lifebar.x-60,thief9lifebar.y+5);
}
if(thief10life>0){
  fill(255);
textSize(15);
text("thief6 Life :"+thief10life+"/200",thief10lifebar.x-60,thief10lifebar.y+5);
}
if(policelife>0){
  fill(255);
textSize(20);
text("Police Life :"+policelife+"/200",policelifebar.x-60,policelifebar.y+5);
}
if(policelife<=0){
}
if(policelife>0){
  fill(255);
textSize(20);
text("police Life :"+policelife+"/200",policelifebar.x-75,45);
}
if(policelife===0){
  background(0); 
  textSize(150);
  fill("red");
  text("police Is Dead mission fail",displayWidth/2-900,displayHeight/2-150)
  text("You Lose",displayWidth/2-250,displayHeight/2);
}
}
function shootBullet(direction){
if(direction==="left"){
  bullet=createSprite(police.x-15,police.y-13,10,10);
bullet.addImage(leftBulletimg);
bullet.scale=0.02;
bullet.velocityX=-7;
}else if("right"){
  bullet=createSprite(police.x+15,police.y-13,10,10);
bullet.addImage(rightBulletimg);
bullet.scale=0.02;
bullet.velocityX=7;
console.log("right");
}

bulletGroup.add(bullet);
}
function thief1Bulls(){
  if(frameCount%55===0){
  var thief1bullet=createSprite(thief1.x+15,thief1.y-5,10,10);
thief1bullet.addImage(rightBulletimg);
thief1bullet.scale=0.02;
thief1bullet.velocityX=6;
thief1Group.add(thief1bullet);
}
}

function thief2Bulls(){
  if(frameCount%55===0){
 var thief2bullet=createSprite(thief2.x+15,thief2.y-5,10,10);
thief2bullet.addImage(rightBulletimg);
thief2bullet.scale=0.02;
thief2bullet.velocityX=6;
thief2Group.add(thief2bullet);
}}

function thief3Bulls(){
  if(frameCount%55===0){
  var thief3bullet=createSprite(thief3.x+15,thief3.y-5,10,10);
thief3bullet.addImage(rightBulletimg);
thief3bullet.scale=0.02;
thief3bullet.velocityX=6;
console.log(thief3bullet);
thief3Group.add(thief3bullet);
}
}

function thief4Bulls(){
  if(frameCount%25===0){
 var thief4bullet=createSprite(thief4.x+15,thief4.y-5,10,10);
thief4bullet.addImage(rightBulletimg);
thief4bullet.scale=0.02;
thief4bullet.velocityX=6;
thief4Group.add(thief4bullet);
}}

function thief5Bulls(){
  if(frameCount%25===0){
 var thief5bullet=createSprite(thief5.x+15,thief5.y-5,10,10);
thief5bullet.addImage(rightBulletimg);
thief5bullet.scale=0.02;
thief5bullet.velocityX=6;
console.log(thief5bullet);
thief5Group.add(thief5bullet);
}}

function thief6Bulls(){
  if(frameCount%25===0){
 var thief6bullet=createSprite(thief6.x+15,thief6.y-5,10,10);
thief6bullet.addImage(rightBulletimg);
thief6bullet.scale=0.02;
thief6bullet.velocityX=6;
thief6Group.add(thief6bullet);
}}
function thief7Bulls(){
  if(frameCount%25===0){
 var thief7bullet=createSprite(thief7.x+15,thief7.y-5,10,10);
thief7bullet.addImage(leftBulletimg);
thief7bullet.scale=0.02;
thief7bullet.velocityX=-6;
thief7Group.add(thief7bullet);
}}

function thief8Bulls(){
  if(frameCount%25===0){
 var thief8bullet=createSprite(thief8.x-15,thief8.y-9,10,10);
thief8bullet.addImage(leftBulletimg);
thief8bullet.scale=0.02;
thief8bullet.velocityX=-6;
thief8Group.add(thief8bullet);
}}


function thief9Bulls(){
  if(frameCount%25===0){
 var thief9bullet=createSprite(thief9.x+15,thief9.y-5,10,10);
thief9bullet.addImage(leftBulletimg);
thief9bullet.scale=0.02;
thief9bullet.velocityX=-6;
thief9Group.add(thief9bullet);
}}

function thief10Bulls(){
  if(frameCount%25===0){
 var thief10bullet=createSprite(thief10.x-15,thief10.y-9,10,10);
thief10bullet.addImage(leftBulletimg);
thief10bullet.scale=0.02;
thief10bullet.velocityX=-6;
thief10Group.add(thief10bullet);
}}