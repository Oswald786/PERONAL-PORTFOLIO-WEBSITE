
function ToggleServiceDetails(Service){
    let ServiceChosen = Service
    let CurrentDesign = window.getComputedStyle(ServiceChosen);

    let Display = CurrentDesign.getPropertyValue("display")
    console.log(Display)

    if (Display === 'none'){
        ServiceChosen.style.display = 'block'
        console.log("display changed to :" + CurrentDesign)
    }
    else if (Display === 'block'){
        ServiceChosen.style.display  = 'none'
        console.log("display changed to :" + CurrentDesign)
    }
}


let points = 0
Lives = 5

function GenerateNumber(){
    UnformattedNumber = Math.random() * 100
    CorrectNumber = Math.floor(UnformattedNumber)
    return CorrectNumber
}



function CheckNumber(){
    console.log(CorrectNumber)
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
    else if(answer > lowerBound && answer < UpperBound && answer <= 100){
        Lives -= 1
        Result.innerHTML = ""
        Result.innerHTML += "Getting Closer"
        console.log("Result is " + Result + " YOU HAVE:" + Lives)

    }
    else if (answer > (CorrectNumber + 5) && answer <= 100){
        Lives -= 1
        Result.innerHTML = ""
        Result.innerHTML += "Too HIGH"
        console.log("Result is " + Result + " YOU HAVE:" + Lives)
       
    }
    else if (answer < (CorrectNumber - 5)){
        Lives -= 1
        Result.innerHTML = ""
        Result.innerHTML += "Too LOW"
        console.log("Result is " + Result + " YOU HAVE:" + Lives)
      
    }
    else if(answer > 100){
        RangeError("invalid value")
        restartGame()
        alert("Value entered for number guessing game must be 1-100")

    }
}
    if (Lives === 0){
        Result.innerHTML = ""
        Result.innerHTML += "You have ran out of lives and will need to restart guess again and it will generate a new number the correct number was " + CorrectNumber + " you had " + Lives + " Lives"
        Lives = 5
}
}


function toggleGameDisplay(){
    gameInterface = document.getElementById("gameInterface");
    gameInterfaceState = window.getComputedStyle(gameInterface);
    DisplayStatus = gameInterfaceState.getPropertyValue("display")

    if (DisplayStatus === "flex"){
        gameInterface.style.display = "none"
    }
    else if (DisplayStatus === "none"){
        gameInterface.style.display = "flex"
    }
}


function BeginGame(){
    Lives = 5
    points = 0
    GenerateNumber()
    console.log(CorrectNumber)
    console.log(Lives)
    toggleGameDisplay()
}

function restartGame(){
    Result = document.getElementById("result")
    Result.innerHTML = ""
    toggleGameDisplay()
}


/*The following is the functiuon for my form to colelct or data save to session storage and log all things that have been fuleld and create a data packet for a server.*/

function submitForm() {
    FirstName = document.getElementById("Firstname").value;
    console.log(FirstName);
    MiddleName = document.getElementById("Middlename").value;
    console.log(MiddleName);
    LastName = document.getElementById("Lastname").value;
    console.log(LastName);

    Emailaddress = document.getElementById("Emailaddress").value;
    console.log(Emailaddress);
    Phonenumber = document.getElementById("Phonenumber").value;
    console.log(Phonenumber);
    Contactpreference = document.getElementById("Contactpreference").value;

    Query = document.getElementById("Query").value;
    console.log(Query);
    Description = document.getElementById("Description").value;
    console.log(Description)

    Identity = FirstName + " " + MiddleName + " " + LastName;
    ContactDetails = " Email: " + Emailaddress + " Phone number: " + Phonenumber + " Contact Preference: " + Contactpreference;
    MessageDetail = " Query Catagory: " + Query + " Description: " + Description;

    DataPacket = {
        name : Identity,
        Contact : ContactDetails,
        Message : MessageDetail
    }
    console.log(DataPacket)







}