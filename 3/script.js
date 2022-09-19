
let addRectangle = () => {      
    const element = document.createElement("div");    
    document.body.prepend(element);
    document.querySelector("div").style.width = "20px";
    document.querySelector("div").style.height = "20px";
    document.querySelector("div").style.background = "red";
    document.querySelector("div").style.margin = "5px";      
}

document.getElementById("myButton").addEventListener("click", addRectangle);