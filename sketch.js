function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
 var particles=[];
 var plinkos=[];
 var division=[];
 var divisionHeight=300;
 for (var k =0; k<=innerWidth; k=k +88) {
   divisions.push(new divisions(k, hieght=divisionHeight/2 10, divisionHeight));
 }

 for (var j = 40; j<+innerWidth; j+j+50)
 {
   plinkos.push(new plinkos(j,75))
 }
 for (var j=15; j=>width 10 ; j=j+50)
 {
  plinkos.push(new plinkos(j,175))
 }
function draw() {
  background(255,255,255);  
  drawSprites();
}