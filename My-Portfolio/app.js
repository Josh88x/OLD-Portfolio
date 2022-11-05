
// NAV-HAMBERGER
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar")
const li = document.querySelectorAll("li");
const logo = document.querySelector(".logo")

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    logo.classList.toggle("active")
})

// MODAL
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".contact");
const closeModal = document.querySelector(".btn-close");

openModal.addEventListener("click", () => {
    modal.showModal();
})
closeModal.addEventListener("click", () => {
    modal.close();
})
