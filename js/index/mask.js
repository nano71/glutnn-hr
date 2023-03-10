let selects = document.querySelectorAll("#content > .box.left .titleBar .select")
for (let i = 0; i < selects.length; i++) {
    selects[i].onmouseover = function () {
        document.querySelector("#content > .box.left .titleBar .select.active").classList.remove("active")
        document.querySelector("#content > .box.left .content.show").classList.remove("show")
        this.classList.add("active")
        document.querySelectorAll("#content > .box.left .content")[i].classList.add("show")
    }
}
let search = document.querySelector("#top .top .search")
search.onclick = function () {
    let value = document.querySelector("#top #search").value;
    value && window.open(this.getAttribute("target") + value)
    value || alert("不为空")
}
let canScroll = false
let goTop = document.querySelector("#goTop")
const callback = function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0 && canScroll) {
        window.scrollTo(0, Math.floor(scrollTop - scrollTop / 8));
        window.requestAnimationFrame(callback);
    } else {
        window.cancelAnimationFrame(callback)
    }
}
goTop.onclick = function () {
    window.requestAnimationFrame(callback);
}
let currentScroll = {
    x: 0, y: 0
}
window.onscroll = function (e) {
    // console.log(window.scrollY < currentScroll.y);
    if (window.scrollY > currentScroll.y) {
        canScroll = false
    }
    currentScroll.y = window.scrollY
    if (window.scrollY > window.screen.height * 0.5) {
        goTop.classList.remove("hide")
        canScroll = true
    } else {
        goTop.classList.add("hide")
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