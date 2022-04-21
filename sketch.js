var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite (200, 200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;



//Criando menino que corre 
 if (keyDown(RIGHT_ARROW)){
    boy.velocityY = -velocidade;
 }
 

// Criando Boundary (Limite) esquerdo  
leftBoundary = createSprite(0,0,800,100);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary = createSprite(0,0,100,800);
rightBoundary.visible = true;
}

function mostrarCoordenadas() {
    document.getElementById("coordenadas").innerHTML =
      " X: " + boy.x + " y: " + boy.y ;
  }
  


function draw() {
background(0);
path.velocityY = 4;

mostrarCoordenadas();

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);

boy.x = World.mouseX;

edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 //Reiniciar o fundo




 drawSprites();

 }




