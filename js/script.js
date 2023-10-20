// var cursor = document.querySelector('#cursor')
// var main = document.querySelector('#main')

// main.addEventListener("mousemove",function(dets){
//     cursor.Style.left = dets.x + "px"
//     cursor.Style.top = dets.y + "px"
// })

// document.querySelector("#overlay1").addEventListener("mousemove",function(){
//     document.querySelector("#elem1 img").Style.scale = 1
//     document.querySelector("#elem1 img").Style.opacity = 1
//     cursor.Style.opacity = 0
//     document.querySelector("#elem1 img").Style.left = (dets.x - 350) + "px"
//     document.querySelector("#elem1 img").Style.top= (dets.y - 430)+ "px"
    
// })

// document.querySelector("#overlay1").addEventListener("mouseleave",function(){
//     document.querySelector("#elem1 img").Style.scale = 0
//     document.querySelector("#elem1 img").Style.opacity = 0
//     cursor.Style.opacity = 1
      
// })

var cursor = document.querySelector('#cursor');
var main = document.querySelector('#main');

main.addEventListener("mousemove", function(event) {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

var elem1 = document.querySelector("#elem1");
var elem1Img = document.querySelector("#elem1 img");
var overlay1 = document.querySelector("#overlay1");

overlay1.addEventListener("mousemove", function(event) {
    elem1Img.style.transform = "scale(1)";
    elem1Img.style.opacity = 1;
    cursor.style.opacity = 0;
    elem1Img.style.left = (event.clientX - 350) + "px";
    elem1Img.style.top = (event.clientY - 430) + "px";
});

overlay1.addEventListener("mouseleave", function() {
    elem1Img.style.transform = "scale(0)";
    elem1Img.style.opacity = 0;
    cursor.style.opacity = 1;
});



var elem2 = document.querySelector("#elem2");
var elem2Img = document.querySelector("#elem2 img");
var overlay2 = document.querySelector("#overlay2");

overlay2.addEventListener("mousemove", function(event) {
    elem2Img.style.transform = "scale(1)";
    elem2Img.style.opacity = 1;
    cursor.style.opacity = 0;
    elem2Img.style.left = (event.clientX - 350) + "px";
    elem2Img.style.top = (event.clientY - 430) + "px";
});

overlay2.addEventListener("mouseleave", function() {
    elem2Img.style.transform = "scale(0)";
    elem2Img.style.opacity = 0;
    cursor.style.opacity = 1;
});

var elem3 = document.querySelector("#elem3");
var elem3Img = document.querySelector("#elem3 img");
var overlay3 = document.querySelector("#overlay3");

overlay3.addEventListener("mousemove", function(event) {
    elem3Img.style.transform = "scale(1)";
    elem3Img.style.opacity = 1;
    cursor.style.opacity = 0;
    elem3Img.style.left = (event.clientX - 350) + "px";
    elem3Img.style.top = (event.clientY - 430) + "px";
});

overlay3.addEventListener("mouseleave", function() {
    elem3Img.style.transform = "scale(0)";
    elem3Img.style.opacity = 0;
    cursor.style.opacity = 1;
});











// // elem2
// document.querySelector("#overlay2").addEventListener("mousemove",function(){
//     document.querySelector("#elem2 img").Style.scale = 1
//     document.querySelector("#elem2 img").Style.opacity = 1
//     cursor.Style.opacity = 0
//     document.querySelector("#elem2 img").Style.left = (dets.x - 1000) + "px"
//     document.querySelector("#elem2 img").Style.top= (dets.y - 430)+ "px"
    
// })

// document.querySelector("#overlay2").addEventListener("mouseleave",function(){
//     document.querySelector("#elem2 img").Style.scale = 0
//     document.querySelector("#elem2 img").Style.opacity = 0
//     cursor.Style.opacity = 1
      
// })



// // elem3
// document.querySelector("#overlay3").addEventListener("mousemove",function(){
//     document.querySelector("#elem3 img").Style.scale = 1
//     document.querySelector("#elem3 img").Style.opacity = 1
//     cursor.Style.opacity = 0
//     document.querySelector("#elem3 img").Style.left = (dets.x - 1475) + "px"
//     document.querySelector("#elem3 img").Style.top= (dets.y - 430)+ "px"
    
// })

// document.querySelector("#overlay3").addEventListener("mouseleave",function(){
//     document.querySelector("#elem3 img").Style.scale = 0
//     document.querySelector("#elem3 img").Style.opacity = 0
//     cursor.Style.opacity = 1
   
    
// })