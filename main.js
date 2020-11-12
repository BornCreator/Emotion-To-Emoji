Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}
console.log("ml5 version: "+ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/I4WfgEiDk/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Has Been Loaded!");
}

function check(){
    var img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error+"LOL");
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        if(results[0].label=="Happy"){
            document.getElementById("update_emoji").innerHTML="&#128522;";
        }else if(results[0].label=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128545;";
        }else if(results[0].label=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128548;";
        }else if(results[0].label=="Crying"){
            document.getElementById("update_emoji").innerHTML="&#128546;";
        }else{
            document.getElementById("update_emoji").innerHTML="&#128532;";
        }

        if(results[1].label=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128522;";
        }else if(results[1].label=="Sad"){
            document.getElementById("update_emoji2").innerHTML="&#128545;";
        }else if(results[1].label=="Angry"){
            document.getElementById("update_emoji2").innerHTML="&#128548;";
        }else if(results[1].label=="Crying"){
            document.getElementById("update_emoji2").innerHTML="&#128546;";
        }else{
            document.getElementById("update_emoji2").innerHTML="&#128532;";
        }
    }
}