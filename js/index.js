$(document).ready(function(){

$("#review-link-btn-1").on("mouseover", function(){
    $("#review-link-btn-1").text("View");
});

$("#review-link-btn-1").mouseout(function(){
   $("#review-link-btn-1").text("Learn more");
});

$("#review-link-btn-2").on("mouseover", function(){
    $("#review-link-btn-2").text("View");
});

$("#review-link-btn-2").mouseout(function(){
   $("#review-link-btn-2").text("Learn more");
});

$("#review-link-btn-3").on("mouseover", function(){
    $("#review-link-btn-3").text("View");
});

$("#review-link-btn-3").mouseout(function(){
   $("#review-link-btn-3").text("Learn more");
});

$(document).keypress(function(e){
    if(e.key === "1"){
        window.location.href = "index.html#home";
    }
    if(e.key === "2"){
        window.location.href = "index.html#next";
    }
    if(e.key === "3"){
        window.location.href = "index.html#next2";
    }
    if(e.key === "4"){
        window.location.href = "index.html#reviews";
    }
    if(e.key === "5"){
        window.location.href = "index.html#contact";
    }
});

var audio = new Audio("audio.mp3");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
button.addEventListener("click", () => {
    audio.play();
  });


});


})
window.onload = function () {
    document.body.classList.add('loaded');
  }