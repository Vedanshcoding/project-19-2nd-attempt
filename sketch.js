var steve,steveImg
var vex,vexImg,vexGroup
var wither, witherImg,witherGroup
var piglinBrute, piglinBruteImg,piglinBruteGroup
var road,roadImg
var diamond, diamondImg,diamondGroup
var netherite, netheriteImg,netheriteGroup
var totem, totemImg,totemGroup
var minecraftSound
var score = 0
var PLAY = 1
var END = 0
var gameState = 1



function preload(){
    steveImg = loadAnimation("Runner-1.png","Runner-2.png")
    witherImg = loadImage("witherimage.png")
    vexImg = loadImage("veximage.png")
    piglinBruteImg = loadImage("piglinbruteimage.png")
    roadImg = loadImage("Road.png")
    diamondImg = loadImage("diamond.png")
    netheriteImg = loadImage("netherite.png")
    totemImg = loadImage("totem.png")
    minecraftSound = loadSound("minecraft music.mp3")
    


}

function setup() {
    createCanvas(600,600)

    road = createSprite(300,300)
    road.addImage(roadImg)
    road.velocityY = 5
   


    steve = createSprite(300,550,40,40)
    steve.addAnimation("steveRunning",steveImg)
    steve.scale = 0.05

    vexGroup = new Group()  
    witherGroup = new Group()
    piglinBruteGroup = new Group()
    diamondGroup = new Group()
    netheriteGroup = new Group()
    totemGroup = new Group()   
    
  
}

function draw() {
    
    if(road.y > 600){
       road.y = height/2
    }
  
  
    if(gameState===PLAY){

  
    background(0)
    steve.x = World.mouseX
    edges = createEdgeSprites()
    steve.collide(edges)

    createVex()
    createWither()

  text("SCORE: "+ score,300,25)
  }
  
 
    
 
 drawSprites()
}
function createVex(){
    if(frameCount % 100 == 0){
        vex = createSprite(Math.round(random(50,550),40,10,10))
        vex.addImage(vexImg)
        vex.veloxityY = 5
        vex.scale = 0.08
        vexGroup.add(vex)
    }
}

function createWither(){
    if(frameCount % 350 === 0){
        wither = createSprite(Math.round(random(50,550),0,10,10))
        wither.addImage(witherImg)
        wither.scale = 0.25
    }
}