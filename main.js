noseY=0;
noseX=0;
function preload(){
emoji=loadImage('https://i.postimg.cc/wMMJCc4k/Happy-Emoji-Icon-5c9b7b25-b215-4457-922d-fef519a08b06-large.webp');
}
function setup(){
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.size(350,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded); 
poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,350,300);
fill(0,0,255);
stroke(0,0,255);
image(emoji,noseX,noseY,30,30);
}
function shy(){
    save('ufunny.png');
}
function modelLoaded(){
    console.log('pe');
}
function gotPoses(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x-10;
noseY=results[0].pose.nose.y-5;
console.log("nose x= "+noseX);
console.log("nose y= "+noseY);
    }
    }