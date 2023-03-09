let selects = document.querySelectorAll("#content > .box.left .titleBar .select")
for (let i = 0; i < selects.length; i++) {
    selects[i].onmouseover = function () {
        document.querySelector("#content > .box.left .titleBar .select.active").classList.remove("active")
        document.querySelector("#content > .box.left .content.show").classList.remove("show")
        this.classList.add("active")
        document.querySelectorAll("#content > .box.left .content")[i].classList.add("show")
    }
}

let masks = document.querySelectorAll("#plate .mask")
let maskColors = [
    "#2962FF",
    "#8880FC",
    "#303F9F",
    "#00838F",
]
for (let i = 0; i < masks.length; i++) {
    masks[i].style.backgroundColor = maskColors[i]
}