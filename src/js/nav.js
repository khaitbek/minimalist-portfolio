const hamburgerButton = document.querySelector(".hamburger")
const primaryNavigation = document.querySelector("#primaryNavigation")

hamburgerButton.addEventListener("click",()=>{
    document.body.toggleAttribute("no-scroll")
    primaryNavigation.classList.toggle("show")
})