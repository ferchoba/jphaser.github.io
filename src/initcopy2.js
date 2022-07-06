const config = {
    width: 1350,
    height: 700,
    parent: "container",
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: { debug: true }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}
var cofre1;
var cofre2;
var cofre3;
var cofre4;
var cofre5;
var cofre6;
var cofre7;
var cofre8;
var cofre9;
var cofre10;

var usu1;
var usu2;
var usu3;
var usu4;
var usu5;
var usu6;
var usu7;
var usu8;
var usu9;
var usu10;

var stop1;
var stop2;
var stop3;
var stop4;
var stop5;
var stop6;
var stop7;
var stop8;
var stop9;
var stop0;

var game = new Phaser.Game(config);

function preload(){
    this.load.image("bird2","./assets/bird_dos.png");
    this.load.image("bird", "./assets/bird.png");
    this.load.image("fondo", "./assets/fondo.png");
    this.load.image("pdonald1", "./assets/pdonald1.png");
    this.load.image("pdonald2", "./assets/pdonald2.png");
    this.load.image("pdonald3", "./assets/pdonald3.png");
    this.load.image("pdonaldGold", "./assets/pdonaldGold.png");
    this.load.image("pdonaldCrash", "./assets/pdonaldCrash.png");
    this.load.image("pdonaldPica", "./assets/pdonaldPica.png");
    this.load.image("pdonaldDiamante", "./assets/pdonaldDiamante.png");
    this.load.image("pdonaldRefresco", "./assets/pdonaldRefresco.png");
    this.load.image("pdonaldMontana", "./assets/pdonaldMontana.png");
    this.load.image("pdonaldRock", "./assets/pdonaldRock.png");
    this.load.image("pdonaldCofreA", "./assets/pdonaldCofreA.png");
    this.load.image("pdonaldCofreC", "./assets/pdonaldCofreC.png");

    this.load.image("ePacman", "./assets/EsposaPacman.png");
    this.load.image("princesaPeach", "./assets/PrincessPeachP.png");
    this.load.image("vanellope", "./assets/VanellopeP.png");
    this.load.image("pikachu", "./assets/PikachuP.png");
    this.load.image("chunLi", "./assets/Chun_LiP.png");
    this.load.image("sonic", "./assets/SonicP.png");
    this.load.image("ralph", "./assets/RalphP.png");
    this.load.image("mario", "./assets/MarioP.png");
    this.load.image("luigi", "./assets/LuigiP.png");
    this.load.image("toadette", "./assets/ToadetteP.png");
    this.load.image("puesto1", "./assets/puesto1.png");
    this.load.image("puesto2", "./assets/puesto2.png");
    this.load.image("puesto3", "./assets/puesto3.png");
    this.load.image("puesto4", "./assets/puesto4.png");
    this.load.image("puesto5", "./assets/puesto5.png");
    this.load.image("puesto6", "./assets/puesto6.png");
    this.load.image("puesto7", "./assets/puesto7.png");
    this.load.image("puesto8", "./assets/puesto8.png");
    this.load.image("puesto9", "./assets/puesto9.png");
    this.load.image("puesto10", "./assets/puesto10.png");
}

function create(){
   this.add.image(0,0,"fondo").setOrigin(0);
   var puesto1 = this.add.image(1280,214,"puesto1").setVisible(false);
   var puesto2 = this.add.image(1280,460,"puesto2").setVisible(false);
   var puesto3 = this.add.image(1280,90,"puesto3").setVisible(false);
   var puesto4 = this.add.image(1280,276,"puesto4").setVisible(false);
   var puesto5 = this.add.image(1280,339,"puesto5").setVisible(false);
   var puesto6 = this.add.image(1280,28,"puesto6").setVisible(false);
   var puesto7 = this.add.image(1280,523,"puesto7").setVisible(false);
   var puesto8 = this.add.image(1280,153,"puesto8").setVisible(false);
   var puesto9 = this.add.image(1280,399,"puesto9").setVisible(false);
   var puesto10 = this.add.image(1280,585,"puesto10").setVisible(false);
   
   //Nombre de los competidores
   /*
   var text1 = this.add.text(10, 25, 'Alexa', { font: '16px Courier', fill: '#ffffff' });
   var text2 = this.add.text(10, 85, 'Manuela M.', { font: '16px Courier', fill: '#ffffff' });
   var text3 = this.add.text(10, 145, 'Juan P.', { font: '16px Courier', fill: '#ffffff' });
   var text4 = this.add.text(10, 210, 'Yuli', { font: '16px Courier', fill: '#ffffff' });
   var text5 = this.add.text(10, 265, 'Sully', { font: '16px Courier', fill: '#ffffff' });
   var text6 = this.add.text(10, 325, 'Manuela Y.', { font: '16px Courier', fill: '#ffffff' });
   var text7 = this.add.text(10, 385, 'Sandra', { font: '16px Courier', fill: '#ffffff' });
   var text8 = this.add.text(10, 445, 'Johanna', { font: '16px Courier', fill: '#ffffff' });
   var text9 = this.add.text(10, 505, 'Isa', { font: '16px Courier', fill: '#ffffff' });
   var text10 = this.add.text(10, 565, 'Aleja', { font: '16px Courier', fill: '#ffffff' });
   */
   //Cofres
   /*
   cofre1 = this.physics.add.image(1160,25, "pdonaldCofreC");
   cofre2 = this.physics.add.image(1160,85, "pdonaldCofreC");
   cofre3 = this.physics.add.image(1160,145, "pdonaldCofreC");
   cofre4 = this.physics.add.image(1160,210, "pdonaldCofreC");
   cofre5 = this.physics.add.image(1160,265, "pdonaldCofreC");
   cofre6 = this.physics.add.image(1160,325, "pdonaldCofreC");
   cofre7 = this.physics.add.image(1160,385, "pdonaldCofreC");
   cofre8 = this.physics.add.image(1160,445, "pdonaldCofreC");
   cofre9 = this.physics.add.image(1160,505, "pdonaldCofreC");
   cofre10 = this.physics.add.image(1160,565, "pdonaldCofreC");  
   */

   //Competidores
   var stop1 = new Phaser.Curves.Path(76,28).lineTo(700,28);
 //  var usu1 = this.add.follower(stop1, 76,28, 'ePacman');
 //  usu1.startFollow(6000);
 var usu1 = this.add.image(76,28, 'ePacman'); 
 var usu1Fin = this.tweens.add({
  targets: usu1,
  x: 1230,
  ease: 'Power1',
  duration: 5400,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto6 ]
});
   
   var stop2 = new Phaser.Curves.Path(76,90).lineTo(850,90);
 //  var usu2 = this.add.follower(stop2, 76,90, 'princesaPeach');
 //  usu2.startFollow(5000);
 var usu2 = this.add.image(76,90, 'princesaPeach'); 
 var usu2Fin = this.tweens.add({
  targets: usu2,
  x: 1230,
  ease: 'Power1',
  duration: 4800,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto3 ]
});

   var stop3 = new Phaser.Curves.Path(76,153).lineTo(600,153);
 //  var usu3 = this.add.follower(stop3, 76,153, 'ralph');
 //  usu3.startFollow(6000);
 var usu3 = this.add.image(76,153, 'ralph'); 
 var usu3Fin = this.tweens.add({
  targets: usu3,
  x: 1230,
  ease: 'Power1',
  duration: 5800,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto8 ]
});
   
   var stop4 = new Phaser.Curves.Path(76,214).lineTo(1230,214);
   //var usu4 = this.add.follower(stop4, 76,214, 'vanellope');
   //usu4.startFollow(4000);
   var usu4 = this.add.image(76, 214, 'vanellope'); 
   var usu4Fin = this.tweens.add({
    targets: usu4,
    x: 1230,
    ease: 'Power1',
    duration: 4000,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto1 ]
}); 


   var stop5 = new Phaser.Curves.Path(76,276).lineTo(800,276);
 //  var usu5 = this.add.follower(stop5, 76,276, 'chunLi');
 //  usu5.startFollow(5000);
 var usu5 = this.add.image(76,276, 'chunLi'); 
 var usu5Fin = this.tweens.add({
  targets: usu5,
  x: 1230,
  ease: 'Power1',
  duration: 5000,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto4 ]
});
   
   var stop6 = new Phaser.Curves.Path(76,339).lineTo(750,339);
 //  var usu6 = this.add.follower(stop6, 76,339, 'sonic');
 //  usu6.startFollow(6000);
 var usu6 = this.add.image(76,339, 'sonic'); 
 var usu6Fin = this.tweens.add({
  targets: usu6,
  x: 1230,
  ease: 'Power1',
  duration: 5200,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto5 ]
});

   
   var stop7 = new Phaser.Curves.Path(76,399).lineTo(550,399);
 //  var usu7 = this.add.follower(stop7, 76,399, 'pikachu');
 //  usu7.startFollow(5000);
 var usu7 = this.add.image(76,399, 'pikachu'); 
 var usu7Fin = this.tweens.add({
  targets: usu7,
  x: 1230,
  ease: 'Power1',
  duration: 6000,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto9 ]
});

   var stop8 = new Phaser.Curves.Path(76,460).lineTo(900,460);
   //var usu8 = this.add.follower(stop8, 76,460, 'mario');
   //usu8.startFollow(6000);
   var usu8 = this.add.image(76,460, 'mario'); 
   var usu8Fin = this.tweens.add({
    targets: usu8,
    x: 1230,
    ease: 'Power1',
    duration: 4500,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto2 ]
}); 
  
   var stop9 = new Phaser.Curves.Path(76,523).lineTo(650,523);
  // var usu9 = this.add.follower(stop9, 76,523, 'luigi');
  // usu9.startFollow(4500);
  var usu9 = this.add.image(76,523, 'luigi'); 
   var usu9Fin = this.tweens.add({
    targets: usu9,
    x: 1230,
    ease: 'Power1',
    duration: 5600,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto7 ]
}); 
   
   var stop10 = new Phaser.Curves.Path(76,585).lineTo(500,585);
  // var usu10 = this.add.follower(stop10, 76,585, 'toadette');
  // usu10.startFollow(6000);
  var usu10 = this.add.image(76,585, 'toadette'); 
   var usu10Fin = this.tweens.add({
    targets: usu10,
    x: 1230,
    ease: 'Power1',
    duration: 6100,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto10 ]
}); 
   
  

function onCompleteHandler (tween, targets, myImage)
{
    console.log('onCompleteHandler');

    myImage.setVisible(true);

    
}
/*
function onCompleteHandler2 (tween, targets, myImage)
{
    console.log('onCompleteHandler2');

    myImage.setVisible(true);

    
}
*/

 /*
  var collider1 = this.physics.add.overlap(usu1, stop1, function (usu1OnStop1)
  {  usu1OnStop1.body.stop(); 
    usu1.destroy();
    usu1 = this.physics.add.image(651,50, "pdonaldCrash");
    var mejora1 = this.physics.add.image(690,20, "pdonaldDiamante");
    this.physics.world.removeCollider(collider1);
  }, null, this); 

  var collider2 = this.physics.add.overlap(usu2, stop2, function (usu2OnStop2)
  {  usu2OnStop2.body.stop(); 
    usu2.destroy();
    usu2 = this.physics.add.image(801,110, "pdonaldCrash");
    var mejora2 = this.physics.add.image(840,80, "pdonaldDiamante"); 
    this.physics.world.removeCollider(collider2);
  }, null, this); 

  var collider3 = this.physics.add.overlap(usu3, stop3, function (usu3OnStop3)
  {  usu3OnStop3.body.stop(); 
    usu3.destroy();
    usu3 = this.physics.add.image(551,180, "pdonaldCrash");
    var mejora3 = this.physics.add.image(600,150, "pdonaldPica"); 
    this.physics.world.removeCollider(collider3);
  }, null, this); 

  var collider4 = this.physics.add.overlap(usu4, stop4, function (usu4OnStop4)
  {  usu4OnStop4.body.stop(); 
    usu4.destroy();
    usu4 = this.physics.add.image(1101,210, "pdonaldGold");
    stop4.destroy();
    stop4 = this.physics.add.image(1160,210, "pdonaldCofreA");
    this.physics.world.removeCollider(collider4);
  }, null, this); 

  var collider5 = this.physics.add.overlap(usu5, stop5, function (usu5OnStop5)
  {  usu5OnStop5.body.stop(); 
    usu5.destroy();
    usu5 = this.physics.add.image(751,290, "pdonaldCrash");
    var mejora5 = this.physics.add.image(790,260, "pdonaldRefresco");
    this.physics.world.removeCollider(collider5);
  }, null, this); 

  var collider6 = this.physics.add.overlap(usu6, stop6, function (usu6OnStop6)
  {  usu6OnStop6.body.stop(); 
    usu6.destroy();
    usu6 = this.physics.add.image(701,350, "pdonaldCrash");
    var mejora6 = this.physics.add.image(740,320, "pdonaldDiamante"); 
    this.physics.world.removeCollider(collider6);
  }, null, this); 

  var collider7 = this.physics.add.overlap(usu7, stop7, function (usu7OnStop7)
  {  usu7OnStop7.body.stop(); 
    usu7.destroy();
    usu7 = this.physics.add.image(501,410, "pdonaldCrash"); 
    var mejora7 = this.physics.add.image(540,380, "pdonaldRefresco"); 
    this.physics.world.removeCollider(collider7);
  }, null, this); 

  var collider8 = this.physics.add.overlap(usu8, stop8, function (usu8OnStop8)
  {  usu8OnStop8.body.stop(); 
    usu8.destroy();
    usu8 = this.physics.add.image(851,470, "pdonaldCrash"); 
    var mejora8 = this.physics.add.image(890,440, "pdonaldDiamante"); 
     this.physics.world.removeCollider(collider8);
  }, null, this); 

  var collider9 = this.physics.add.overlap(usu9, stop9, function (usu9OnStop9)
  {  usu9OnStop9.body.stop();
     usu9.destroy();
     usu9 = this.physics.add.image(601,520, "pdonaldCrash");
     var mejora9 = this.physics.add.image(650,500, "pdonaldPica"); 
     this.physics.world.removeCollider(collider9);
  }, null, this); 

  var collider10 = this.physics.add.overlap(usu10, stop10, function (usu10OnStop10)
  {     usu10OnStop10.body.stop();
        usu10.destroy();
        usu10 = this.physics.add.image(451,588, "pdonaldCrash"); 
        var mejora10 = this.physics.add.image(500,560, "pdonaldPica");
        this.physics.world.removeCollider(collider10);
  }, null, this); 
*/

// Posición de salida 7
/*
  var points = [ 100, 385, 180, 330, 250, 350, 400, 450, 505, 410 ];
  var curve = new Phaser.Curves.Spline(points);
  var graphics = this.add.graphics();
  graphics.lineStyle(1, 0xffffff, 1);
  curve.draw(graphics, 64);
  graphics.fillStyle(0x00ff00, 1);
  for (var i = 0; i < points.length; i++)
  { graphics.fillCircle(points[i].x, points[i].y, 4); }
  var ball7 = this.add.follower(curve, 100, 385, 'pdonald1');
  ball7.startFollow(6000);
  */
  




}

function update(){

}

