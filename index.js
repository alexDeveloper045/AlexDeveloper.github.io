let boton = document.querySelector(".button__contact");
let contactos = document.querySelector(".contact__button")
boton.addEventListener("click", ()=>{
    contactos.classList.remove("button__contact"),
    contactos.classList.toggle("active__network")
})