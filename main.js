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

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1
        random_number_g = Math.floor(Math.random() * 255) + 1
        random_number_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").innerHTML = "No. of times detected - " + (results[0].confidence * 100).toFixed(1) 
        document.getElementById("result_confidence").innerHTML = "The animal sound is - " + results[0].label
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        IMG= document.getElementById("Meow")
        IMG2 = document.getElementById("Bark")
        IMG3 = document.getElementById("Roar")
        IMG4 = document.getElementById("Moo")
        IMG5 = document.getElementById("Ear")

        if(results[0].label == 'Meow'){
            IMG.src = "cute-cat.gif" + 1
        }
        else if(results[0].label == 'Bark'){
            IMG.src = "cute-dog.gif" + 1
        }
        else if(results[0].label == 'Roar'){
            IMG.src = "cute-lion.gif" + 1
        }
        else if(results[0].label == 'Moo'){
            IMG.src = "cute-cow.gif" + 1
        }
        else{
            IMG.src = "istockphoto-1268414791-612x612.jpg"

        }
    }
}