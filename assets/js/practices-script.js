"use strict";

// let linkElem = document.querySelector("a");

// linkElem.setAttribute("herf","https://www.linkedin.com/");

// linkElem.hasAttribute("herf");


// let btnGoogle = document.querySelector("button:nth-child(1)")
// let btnLinkedin = document.querySelector("button:nth-child(2)")


// btnGoogle.addEventListener("click",function(){
//     linkElem.setAttribute("href","https://www.google.com/");
// })


// btnLinkedin.addEventListener("click",function() {
//     linkElem.setAttribute("href","https://www.linkedin.com/");

// })


//Tab menu




// let headers = document.querySelectorAll(".tab-menu .header .item")

// let contents = document.querySelectorAll(".tab-menu .content .item")



// headers.forEach(element => {
//     element.addEventListener("click", function () {
//         document.querySelector(".active").classList.remove("active");
//         this.classList.add("active");

//         contents.forEach(content => {
//             if (content.getAttribute("data-id") == this.getAttribute("data-id")) {
//                 content.classList.remove("d-none")
//             } else {
//                 content.classList.add("d-none")
//             }
//         });

//     })
// });






//slider


let letIcon = document.querySelector(".slider .left");

let rightIcon = document.querySelector(".slider .right");


function rightSlider() {
    let activeImage = document.querySelector(".active");
    if (activeImage.nextElementSibling != null) {
        activeImage.classList.remove("active");
        activeImage.nextElementSibling.classList.add("active");

    } else {
        activeImage.classList.remove("active");
        activeImage.parentNode.firstElementChild.classList.add("active");
    }


}


rightIcon.addEventListener("click",rightSlider)




function leftSlider() {
    let activeImage = document.querySelector(".active");
    if (activeImage.previousElementSibling != null) {
        activeImage.classList.remove("active");
        activeImage.previousElementSibling.classList.add("active");

    } else {
        activeImage.classList.remove("active");
        activeImage.parentNode.lastElementChild.classList.add("active");
    }


}


letIcon.addEventListener("click",leftSlider)

setInterval(() =>{
rightSlider()
}, 2000);












