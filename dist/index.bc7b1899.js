var hamburgerButton=document.querySelector(".hamburger"),primaryNavigation=document.querySelector("#primaryNavigation");hamburgerButton.addEventListener("click",(function(){if(document.body.toggleAttribute("no-scroll"),primaryNavigation.classList.contains("show"))return primaryNavigation.classList.add("closing"),void primaryNavigation.addEventListener("animationend",(function(){primaryNavigation.classList.remove("show","closing")}),{once:!0});primaryNavigation.classList.add("show")}));
//# sourceMappingURL=index.bc7b1899.js.map