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