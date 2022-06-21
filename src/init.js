const config = {
    width: 1280,
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
}

function create(){
   this.add.image(0,0,"fondo").setOrigin(0);
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

   cofre1 = this.physics.add.image(1160,25, "pdonaldCofreC");
   stop1 = this.physics.add.image(700,50, "pdonaldMontana");
   usu1 = this.physics.add.image(50,25, "pdonald1");
   //this.physics.moveToObject(usu1,stop1, 150);
   //this.physics.moveToObject(usu1,stop1, 100);
   this.physics.moveToObject(usu1,stop1, 80);

   cofre2 = this.physics.add.image(1160,85, "pdonaldCofreC");
   stop2 = this.physics.add.image(850,110, "pdonaldMontana");
   usu2 = this.physics.add.image(50,85, "pdonald3");
   //this.physics.moveToObject(usu2,stop2, 180);
   //this.physics.moveToObject(usu2,stop2, 160);
   this.physics.moveToObject(usu2,stop2, 88);

   cofre3 = this.physics.add.image(1160,145, "pdonaldCofreC");
   stop3 = this.physics.add.image(600,180, "pdonaldMontana");
   usu3 = this.physics.add.image(50,145, "pdonald1");
   //this.physics.moveToObject(usu3,stop3, 130);
   //this.physics.moveToObject(usu3,stop3, 60);
   this.physics.moveToObject(usu3,stop3, 80);

   stop4 = this.physics.add.image(1160,210, "pdonaldCofreC");
   usu4 = this.physics.add.image(50,210, "pdonald2");
   //this.physics.moveToObject(usu4,stop4, 200);
   //this.physics.moveToObject(usu4,stop4, 200);
   this.physics.moveToObject(usu4,stop4, 96);

   cofre5 = this.physics.add.image(1160,265, "pdonaldCofreC");
   stop5 = this.physics.add.image(800,290, "pdonaldMontana");
   usu5 = this.physics.add.image(50,265, "pdonald3");
   //this.physics.moveToObject(usu5,stop5, 170);
   //this.physics.moveToObject(usu5,stop5, 140);
   this.physics.moveToObject(usu5,stop5, 88);

   cofre6 = this.physics.add.image(1160,325, "pdonaldCofreC");
   stop6 = this.physics.add.image(750,350, "pdonaldMontana");
   usu6 = this.physics.add.image(50,325, "pdonald1");
   //this.physics.moveToObject(usu6,stop6, 160);
   //this.physics.moveToObject(usu6,stop6, 120);
   this.physics.moveToObject(usu6,stop6, 80);

   cofre7 = this.physics.add.image(1160,385, "pdonaldCofreC");
   stop7 = this.physics.add.image(550,410, "pdonaldMontana");
   usu7 = this.physics.add.image(50,385, "pdonald3");
   //this.physics.moveToObject(usu7,stop7, 120);
   //this.physics.moveToObject(usu7,stop7, 40);
   this.physics.moveToObject(usu7,stop7, 88);

   cofre8 = this.physics.add.image(1160,445, "pdonaldCofreC");
   stop8 = this.physics.add.image(900,470, "pdonaldMontana");
   usu8 = this.physics.add.image(50,445, "pdonald1");
   //this.physics.moveToObject(usu8,stop8, 190);
   //this.physics.moveToObject(usu8,stop8, 180);
   this.physics.moveToObject(usu8,stop8, 80);

   cofre9 = this.physics.add.image(1160,505, "pdonaldCofreC");
   stop9 = this.physics.add.image(650,530, "pdonaldMontana");
   usu9 = this.physics.add.image(50,505, "pdonald2");
   //this.physics.moveToObject(usu9,stop9, 140);
   //this.physics.moveToObject(usu9,stop9, 80);
   this.physics.moveToObject(usu9,stop9, 92);

   cofre10 = this.physics.add.image(1160,565, "pdonaldCofreC");
   stop10 = this.physics.add.image(500,590, "pdonaldMontana");
   usu10 = this.physics.add.image(50,565, "pdonald1");
   //this.physics.moveToObject(usu10,stop10, 100);
   //this.physics.moveToObject(usu10,stop10, 20);
   this.physics.moveToObject(usu10,stop10, 80);

 
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

function update(time, delta){
    
}

