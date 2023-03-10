let images = document.querySelectorAll("#banner .imageBox img")
if (images.length === 1) {
    document.querySelector("#banner .controlArea").style.display = "none"
}
let doll = () => document.querySelectorAll("#banner .controlArea .dollBox .bar")
let left = document.querySelector("#banner .controlArea .leftArrow")
let right = document.querySelector("#banner .controlArea .rightArrow")
let imageIndex = 0
let timer
let banner = document.querySelector("#banner")
let interval = 3000

function clearShowImage() {
    for (let i = 0; i < images.length; i++) {
        if (doll().length !== images.length) {
            document.querySelector("#banner .controlArea .dollBox").innerHTML += `<div class="bar"></div>`
        } else {
            doll()[i].classList.remove("active")
        }
        images[i].classList.remove("active")
    }
}

function clearTimer() {
    clearInterval(timer)
    timer = undefined
}

function startTimer() {
    timer = setInterval(() => {
        right.click()
    }, interval)
}

function setImage() {
    clearShowImage()
    images[imageIndex].classList.add("active")
    doll()[imageIndex].classList.add("active")
}

function init() {
    clearShowImage()
    images[0].classList.add("active")
    left.onclick = function () {
        if (imageIndex === 0) {
            imageIndex = images.length - 1
        } else {
            imageIndex--
        }
        setImage()
    }
    right.onclick = function () {
        if (imageIndex === images.length - 1) {
            imageIndex = 0
        } else {
            imageIndex++
        }
        setImage()
    }
    banner.onmouseover = function () {
        clearTimer()
        this.onmouseout = function () {
            startTimer()
        }
    }
    for (let i = 0; i < doll().length; i++) {
        doll()[i].onclick = function () {
            imageIndex = i
            setImage()
            this.classList.add("active")
        }
    }
    startTimer()
}

init()

