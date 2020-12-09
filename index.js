const btn = document.querySelector("#btn")

function paint_color() {
    btn.classList.add("yello_color")
}

function init() {
    btn.addEventListener('click', paint_color )
}

init() 