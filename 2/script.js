const element = document.createElement("div");

document.body.append(element);

document.querySelector("div").style.width = "200px";

document.querySelector("div").style.height = "200px";

document.querySelector("div").style.background = "green";

setTimeout(() => {
    document.querySelector("div").style.background = "red";
}, "3000")