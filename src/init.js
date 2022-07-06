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
    this.load.image("puesto1", "./assets/tp_txtp1.png");
    this.load.image("puesto2", "./assets/tp_txtp2.png");
    this.load.image("puesto3", "./assets/tp_txtp3.png");
    this.load.image("puesto4", "./assets/tp_txtp4.png");
    this.load.image("puesto5", "./assets/tp_txtp5.png");
    this.load.image("puesto6", "./assets/tp_txtp6.png");
    this.load.image("puesto7", "./assets/tp_txtp7.png");
    this.load.image("puesto8", "./assets/tp_txtp8.png");
    this.load.image("puesto9", "./assets/tp_txtp9.png");
    this.load.image("puesto10", "./assets/tp_txtp10.png");
}

function create(){
   this.add.image(0,0,"fondo").setOrigin(0);
   var puesto1 = this.add.image(138,530,"puesto1").setVisible(false);
   var puesto2 = this.add.image(107,582,"puesto2").setVisible(false);
   var puesto3 = this.add.image(369,530,"puesto3").setVisible(false);
   var puesto4 = this.add.image(345,582,"puesto4").setVisible(false);
   var puesto5 = this.add.image(635,530,"puesto5").setVisible(false);
   var puesto6 = this.add.image(650,582,"puesto6").setVisible(false);
   var puesto7 = this.add.image(900,530,"puesto7").setVisible(false);
   var puesto8 = this.add.image(890,582,"puesto8").setVisible(false);
   var puesto9 = this.add.image(1182,530,"puesto9").setVisible(false);
   var puesto10 = this.add.image(1190,585,"puesto10").setVisible(false);
   
   //console.log(Phaser.Input.Keyboard.KeyCodes);

   //var spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

   

   //Competidores

   var usu1 = this.add.image(76,28, 'ePacman');
   var usu1Fin = this.tweens.add({
    targets: usu1,
    x: 1280,
    ease: 'linear',
    duration: 6900,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto10 ]
  });

 var usu2 = this.add.image(76,70, 'princesaPeach'); 
 var usu2Fin = this.tweens.add({
  targets: usu2,
  x: 1280,
  ease: 'Power1',
  duration: 6000,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto7 ]
});


 var usu3 = this.add.image(76,113, 'ralph'); 
 var usu3Fin = this.tweens.add({
  targets: usu3,
  x: 1280,
  ease: 'Power1',
  duration: 4000,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto1 ]
});
   

   var usu4 = this.add.image(76, 156, 'vanellope'); 
   var usu4Fin = this.tweens.add({
    targets: usu4,
    x: 1280,
    ease: 'Power1',
    duration: 5700,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto6 ]
}); 



 var usu5 = this.add.image(76,199, 'chunLi'); 
 var usu5Fin = this.tweens.add({
  targets: usu5,
  x: 1280,
  ease: 'Power1',
  duration: 6600,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto9 ]
});
   

 var usu6 = this.add.image(76,244, 'sonic'); 
 var usu6Fin = this.tweens.add({
  targets: usu6,
  x: 1280,
  ease: 'Power1',
  duration: 4500,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto2 ]
});

   

 var usu7 = this.add.image(76,288, 'pikachu'); 
 var usu7Fin = this.tweens.add({
  targets: usu7,
  x: 1280,
  ease: 'Power1',
  duration: 5100,
  onComplete: onCompleteHandler,
  onCompleteParams: [ puesto4 ]
});


   var usu8 = this.add.image(76,330, 'mario'); 
   var usu8Fin = this.tweens.add({
    targets: usu8,
    x: 1280,
    ease: 'Power1',
    duration: 6300,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto8 ]
}); 
  

  var usu9 = this.add.image(76,373, 'luigi'); 
   var usu9Fin = this.tweens.add({
    targets: usu9,
    x: 1280,
    ease: 'Power1',
    duration: 5400,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto5 ]
}); 
   

  var usu10 = this.add.image(76,417, 'toadette'); 
   var usu10Fin = this.tweens.add({
    targets: usu10,
    x: 1280,
    ease: 'Power1',
    duration: 4800,
    onComplete: onCompleteHandler,
    onCompleteParams: [ puesto3 ]
}); 
   


function onCompleteHandler (tween, targets, myImage)
{
    console.log('onCompleteHandler');

    myImage.setVisible(true);

    
}

  




}

function update(){
  

}

