let search = document.querySelector("#top .top .search")
search.onclick = function () {
    let value = document.querySelector("#top #search").value;
    value && window.open(this.getAttribute("target") + value)
    value || alert("不为空")
}
let as = document.querySelectorAll("a")
for (let i = 0; i < as.length; i++) {
    if (!as[i].className.includes("this"))
        as[i].target = "_blank"
}
