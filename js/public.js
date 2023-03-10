let search = document.querySelector("#top .top .search")
search.onclick = function () {
    let value = document.querySelector("#top #search").value;
    value && window.open(this.getAttribute("target") + value)
    value || alert("不为空")
}