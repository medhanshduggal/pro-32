const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    const d = new Date();
 hour = d.getHours();
    fill("black");
    textSize(30);
    console.log(hour)
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    
 
    //change the data in JSON format and store it in variable responseJSON
   
    const d = new Date();
    hour = d.getHours();
    
    //fetch datetime from responseJSON
    
    

    // slice the datetime to extract hour
   

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
 //C:\Users\Medhansh\Downloads\Sunrise-and-Sunset-Template-main\Sunrise-and-Sunset-Template-main

