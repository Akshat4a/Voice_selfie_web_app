var Speechrecognition = window.webkitSpeechRecognition;
camera = document.getElementById("camera");
var recognition = new Speechrecognition();

function start() 
{
    document.getElementById("textarea").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) 
{

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textarea").innerHTML = Content;
    console.log(Content); 
       if(Content =="take my selfie")
       {
          console.log("taking selfie --- ");
          speak();
       }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="selfie" src="'+data_uri+'"/>';
});
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("selfie").src ;
    link.href = image;
    link.click();
}

  
