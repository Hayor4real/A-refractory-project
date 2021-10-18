let nav = document.getElementById("nav")
let exit = document.getElementById("exit-btn")
let open = document.getElementById("menu-btn")


open.addEventListener("click", ()=> {
    nav.classList.add("open-nav")
})

exit.addEventListener("click", ()=> {
    nav.classList.remove("open-nav")
})