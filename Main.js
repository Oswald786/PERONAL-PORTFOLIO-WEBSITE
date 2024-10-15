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


let CorrectNumber = 0;
let points = 0

function GenerateNumber(){
    UnformattedNumber = Math.random() * 100
    CorrectNumber = Math.floor(UnformattedNumber)
    return CorrectNumber
}


function GenerateLives(){
    Lives = 5
    return Lives
}


function CheckNumber(){
    console.log(CorrectNumber)
    hint = document.getElementById("hint").innerText
    let answer = parseInt(document.getElementById("answer").value)
    Result = document.getElementById("result")

    lowerBound = CorrectNumber - 5
    UpperBound = CorrectNumber + 5


    if(Lives >= 1){
    if(CorrectNumber === answer){
        Result.innerHTML = ""
        Result.innerHTML += "Correct the number i am thinking of is " + CorrectNumber + " you have " + points + " points and " + Lives + " lives left keep going"
        points += 1
        GenerateNumber()
        console.log(points)
        console.log(CorrectNumber) 
        console.log(Lives)
    }
    else if(answer > lowerBound && answer < UpperBound){
        Result.innerHTML = ""
        Result.innerHTML += "Getting Closer"
        ShowResult()
        console.log("Result is " + Result + " YOU HAVE:" + Lives)
        Lives -= 1

    }
    else if (answer > (CorrectNumber + 5)){
        Result.innerHTML = ""
        Result.innerHTML += "Too HIGH"
        ShowResult()
        console.log("Result is " + Result + " YOU HAVE:" + Lives)
        Lives -= 1
       
    }
    else if (answer < (CorrectNumber - 5)){
        Result.innerHTML = ""
        Result.innerHTML += "Too LOW"
        ShowResult()
        console.log("Result is " + Result + " YOU HAVE:" + Lives)
        Lives -= 1
      
    }
}
    if (Lives <= 0){
        Result.innerHTML = ""
        Result.innerHTML += "You have ran out of lves and will need to restart guess again and it will generate a new number the correct number was " + CorrectNumber
        Lives = 5
        DisplayGame()
}
}


function DisplayGame(){
    gameInterface = document.getElementById("gameInterface");
    gameInterfaceState = window.getComputedStyle(gameInterface);
    DisplayStatus = gameInterfaceState.getPropertyValue("display")

    if (DisplayStatus === "flex"){
        gameInterface.style.display = "none"
    }
    else if (DisplayStatus === "none"){
        gameInterface.style.display = "flex"
        GenerateNumber()
        GenerateLives()
        console.log(CorrectNumber)
        console.log(Lives)
    }
}

/*function ShowResult(){
    gameInterface = document.getElementById("gameInterface");
    gameInterfaceState = window.getComputedStyle(gameInterface);
    DisplayStatus = gameInterfaceState.getPropertyValue("display")

    Result = CorrectNumber
    ResultDisplayArea = document.getElementById("result")


    if (DisplayStatus === "flex" && Lives <= 0){
        ResultDisplayArea += Result
        console.log("RESULT HAS BEEN GIVEN DEPLOYING GAME CLOSOURE")
    }
}*/
