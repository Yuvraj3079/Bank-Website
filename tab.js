"use strict";
// var document.getElementById = function(id) { return document.getElementById(id); };

// document.querySelector('.nav-button').addEventListener("click", function(){
//     document.querySelector('.nav-item').classList.toggle("show");
//     document.querySelectorAll('ul li').classList.toggle("hide");
// });
document.getElementById("btn-feature").addEventListener("click",()=>{
    document.getElementById("feature").style.transform = "translateX(0px)";
    document.getElementById("account").style.transform = "translateX(100%)";
    document.getElementById("learn").style.transform = "translateX(100%)";

    document.getElementById("btn-feature").style.fontWeight = "600";
    document.getElementById("btn-feature").style.color = "#360101";
    document.getElementById("btn-account").style.fontWeight = "400";
    document.getElementById("btn-account").style.color = "#000";
    document.getElementById("btn-learn").style.fontWeight = "400";
    document.getElementById("btn-learn").style.color = "#000";
});
document.getElementById("btn-account").addEventListener("click",()=>{
    document.getElementById("feature").style.transform = "translateX(100%)";
    document.getElementById("account").style.transform = "translateX(0px)";
    document.getElementById("learn").style.transform = "translateX(100%)";  

    document.getElementById("btn-feature").style.fontWeight = "400";
    document.getElementById("btn-feature").style.color = "#000";
    document.getElementById("btn-account").style.fontWeight = "600";
    document.getElementById("btn-account").style.color = "#360101";
    document.getElementById("btn-learn").style.fontWeight = "400";
    document.getElementById("btn-learn").style.color = "#000";
});
document.getElementById("btn-learn").addEventListener("click",()=>{
    document.getElementById("feature").style.transform = "translateX(100%)";
    document.getElementById("account").style.transform = "translateX(100%)";
    document.getElementById("learn").style.transform = "translateX(0px)";

    document.getElementById("btn-feature").style.fontWeight = "400";
    document.getElementById("btn-feature").style.color = "#000";
    document.getElementById("btn-account").style.fontWeight = "400";
    document.getElementById("btn-account").style.color = "#000";
    document.getElementById("btn-learn").style.fontWeight = "600";
    document.getElementById("btn-learn").style.color = "#360101";    
});