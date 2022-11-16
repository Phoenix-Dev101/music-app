function setup() {
	
        video = createCapture(VIDEO);
        video.size(550, 500);
      
        
            createCanvas(100, 50);
            background(153);
            line(0, 0, width, height);
          
      
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
      }

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

  function preload(){
    song = loadSound("SOU");
    song2 = loadSound("Despacito");
  }