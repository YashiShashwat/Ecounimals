function startClassification(){
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/7HP3G0khY/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(){
    console.log("Got Result")
}