function preload(){

    classifyer=ml5.imageClassifier("DoodleNet")
}
function setup(){
    canvas= createCanvas(350,350);
    canvas.center()
    background("white")
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;


}
function draw(){

    strokeWeight(10);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }


}
function classifyCanvas(){
    classifyer.classify(canvas,gotresults);
}
function gotresults(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML= "object= "+ results[0].label;
    document.getElementById("confidence").innerHTML="accuracy= "+ Math.round(results[0].confidence*100) + "%";
    utterthis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterthis);
}

}
function clear_canvas(){
    background("white");
}
