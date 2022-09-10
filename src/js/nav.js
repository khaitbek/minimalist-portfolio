const hamburgerButton = document.querySelector(".hamburger")
const primaryNavigation = document.querySelector("#primaryNavigation")

hamburgerButton.addEventListener("click", () => {
    document.body.toggleAttribute("no-scroll")
    if (primaryNavigation.classList.contains("show")) {
        primaryNavigation.classList.add("closing");
        primaryNavigation.addEventListener("animationend", () => {
            primaryNavigation.classList.remove("show", "closing")
        }, { once: true })
        return
    }
    primaryNavigation.classList.add("show")
})

console.log(123);