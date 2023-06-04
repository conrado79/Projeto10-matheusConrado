var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//criando a jogadora Sofia
var Sofia=createSprite(20,25,18,18);
Sofia.shapeColor= "orange";
Sofia.velocityY=0;
Sofia.velocityX=0;
//criando as paredes do labirinto (parede1 - parede2)
  var wall1=createSprite(10,70,100,20);
  var wall2=createSprite(100,50,20,100);
  var wall3=createSprite(80,130,100,20);
  var wall4=createSprite(50,250,20,100);
  var wall5=createSprite(130,210,100,20);
  var wall6=createSprite(10,250,100,20);
  var wall7=createSprite(160,120,20,100);
  var wall8=createSprite(150,20,100,20);
  var wall9=createSprite(250,70,20,100);
  var wall10=createSprite(270,150,100,20);
  var wall11=createSprite(330,50,100,20);
  var wall12=createSprite(340,125,20,100);
  var wall13=createSprite(220,250,20,100);
  var wall14=createSprite(330,210,150,20);
  var wall15=createSprite(100,300,20,100);
  var wall16=createSprite(180,310,100,20);
  var wall17=createSprite(30,352,20,100);
  var wall18=createSprite(175,352,20,100);
  var wall19=createSprite(280,290,20,100);
  var wall20=createSprite(350,270,120,20);
  var wall21=createSprite(250,390,100,20);
  var wall22=createSprite(330,370,20,100);
//cria a taça
var cup=createSprite(375,375,10,50);
cup.shapeColor="yellow";
createEdgeSprites();
function draw() {
 //mudando a cor do plano de fundo para rosa
  background("pink");
  
  if (keyDown("UP_ARROW")){
  Sofia.velocityX=0;  
  Sofia.velocityY=-4;
  }
if (keyDown("DOWN_ARROW")){
  Sofia.velocityX=0;  
  Sofia.velocityY=+4;
  }
 if (keyDown("RIGHT_ARROW")){
  Sofia.velocityX=+4;  
  Sofia.velocityY=0;
  }
 if (keyDown("LEFT_ARROW")){
  Sofia.velocityX=-4;  
  Sofia.velocityY=0;
  }
 Sofia.bounceOff(wall1);
Sofia.bounceOff(wall2);
Sofia.bounceOff(wall3);
Sofia.bounceOff(wall4);
Sofia.bounceOff(wall5);
Sofia.bounceOff(wall6);
Sofia.bounceOff(wall7);
Sofia.bounceOff(wall8);
Sofia.bounceOff(wall9);
Sofia.bounceOff(wall10);
Sofia.bounceOff(wall11);
Sofia.bounceOff(wall12);
Sofia.bounceOff(wall13);
Sofia.bounceOff(wall14);
Sofia.bounceOff(wall15);
Sofia.bounceOff(wall16);
Sofia.bounceOff(wall17);
Sofia.bounceOff(wall18);
Sofia.bounceOff(wall19);
Sofia.bounceOff(wall20);
Sofia.bounceOff(wall21);
Sofia.bounceOff(wall22);
drawSprites();
checkwin();
}

function checkwin()
{
  if ( Sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("Você Venceu", 200,200);
  }
}























// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
