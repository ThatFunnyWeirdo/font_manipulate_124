function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    posenet = ml5.poseNet(video, modelLoaded);
}

function draw()
{
    background("#c9ccd1");
}

function modelLoaded()
{
    console.log("Posenet has initialized");
}

function gotPoses()
{
   
}