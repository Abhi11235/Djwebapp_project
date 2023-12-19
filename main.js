
song = ""; 
leftWristY=0;
leftWristX=0;
rightWristY=0;
rightWristX=0;

scoreRightWrist=0;
scoreLeftWrist=0;

Status1=0;
Status2=0;

function preload()
{
song=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}

function setup()
{
 canvas=createCanvas(600,500);
 canvas.center();

 video=createCapture(VIDEO);
 video.hide();
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
}

function draw()
{
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

   Status1=song.isPlaying()
   Status2=song2.isPlaying()

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX,rightWristY,20);
        InNumberrightWristY=Number(rightWristY);
        song1.stop();

        if(Status1==false)
        {song2.play()
       document.getElementById("Theme").innerHTML="playing- Harry potter Song";
        }
    }
}
if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY=Number(leftWristY);
        song1.stop();

        if(Status2==false)
        {song1.play()
       document.getElementById("Theme").innerHTML="playing- Peter Pan Song";
        }
    }


function modelLoaded()
{
    console.log('PoseNet Is Initiallized');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
       
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
       console.log("scoreRightWrist=" + scoreRightWrist + "scoreLeftWrist =" + scoreLeftWrist);

      
        leftWristY=results[0].pose.leftWrist.y;
        leftWristX=results[0].pose.leftWrist.x;
    console.log("leftWristY="+ leftWristY+"leftWristX"+leftWristX);
    
    rightWristY=results[0].pose.rightWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
console.log("rightWristY="+ rightWristY+"rightWristX"+rightWristX);

}
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}