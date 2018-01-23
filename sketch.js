var rusheaSlider;
var amiahSlider;
var bobbiSlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    
    rusheaSlider = createSlider(0,255,0);
    rusheaSlider.position(20,20);
    amaihSlider = createSlider(0,255,229);
    amaihSlider.position(20,30);
    bobbiSlider = createSlider(0,225,240);
    bobbiSlider.position(20,40);
}

function draw(){
    redValue = rusheaSlider.value();
    greenValue = amaihSlider.value();
    blueValue = bobbiSlider.value();
    background(redValue, greenValue, blueValue);
}