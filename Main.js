function ShowWebDesignServiceDetails() {
    let Service1Details = document.getElementById("webSiteDesignDetails");
    let CurrentDesign = window.getComputedStyle(Service1Details);

    let Display = CurrentDesign.getPropertyValue("display")
    console.log(Display)
    if (Display === 'none'){
        Service1Details.style.display = 'block'
        console.log("display changed to :" + CurrentDesign)
    }
    else if (Display === 'block'){
        Service1Details.style.display  = 'none'
        console.log("display changed to :" + CurrentDesign)
    }
}

function ShowWebOptimization() {
    let Service1Details = document.getElementById("WebOptimization");
    let CurrentDesign = window.getComputedStyle(Service1Details);

    let Display = CurrentDesign.getPropertyValue("display")
    console.log(Display)
    if (Display === 'none'){
        Service1Details.style.display = 'block'
        console.log("display changed to :" + CurrentDesign)
    }
    else if (Display === 'block'){
        Service1Details.style.display  = 'none'
        console.log("display changed to :" + CurrentDesign)
    }
}

function ShowWebSupport(){
    let Service1Details = document.getElementById("webFixing");
    let CurrentDesign = window.getComputedStyle(Service1Details);

    let Display = CurrentDesign.getPropertyValue("display")
    console.log(Display)
    if (Display === 'none'){
        Service1Details.style.display = 'block'
        console.log("display changed to :" + CurrentDesign)
    }
    else if (Display === 'block'){
        Service1Details.style.display  = 'none'
        console.log("display changed to :" + CurrentDesign)
    }

}

function GenerateNumber(){
    UnformattedNumber = Math.random() * 100
    CorrectNumber = Math.floor(UnformattedNumber)
}


function CheckNumber(){
    UnformattedNumber = Math.random() * 100
    CorrectNumber = Math.floor(UnformattedNumber)
    console.log(CorrectNumber)
    hint = document.getElementById("hint").innerText
    answer = document.getElementById("answer").innerHTML
    Result = document.getElementById("result").innerHTML
    Lives = 5

    lowerBound = CorrectNumber - 5
    UpperBound = CorrectNumber + 5


    if(Lives >= 1){
    if(CorrectNumber == answer){
        Result = ""
        Result += "Correct the number i am thinking of is " + CorrectNumber
        ShowResult()
        console.log("Result is " + Result)
    }
    else if(answer > lowerBound && answer < UpperBound){
        Result = ""
        Result += "Getting Closer"
        ShowResult()
        console.log("Result is " + Result)
        Lives =- 1

    }
    else if (answer > (CorrectNumber + 5)){
        Result = ""
        Result += "Too low"
        ShowResult()
        console.log("Result is " + Result)
        Lives =- 1
       
    }
    else if (answer < (CorrectNumber - 5)){
        Result = ""
        Result += "Too high"
        ShowResult()
        console.log("Result is " + Result)
        Lives =- 1
      
    }
}
    if (lives <= 0){
        Result = ""
        Result += "You have ran out of lves and will need to restart guess again and it will generate a new number the correct number was " + CorrectNumber
        Lives = 5
}
}

function ShowResult()