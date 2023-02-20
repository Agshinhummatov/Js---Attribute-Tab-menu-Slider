"use strict";


let btn =document.querySelector("#btn button")

let modal = document.querySelector("._modal")

let btnModal = document.querySelector("._modal button")



btn.addEventListener("click",function(){
modal.classList.remove("_modal-y")
modal.classList.add("_modal-top")


})

btnModal.addEventListener("click",function(){
    modal.classList.remove("_modal-top")
    modal.classList.add("_modal-y")
})