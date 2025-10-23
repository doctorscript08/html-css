document.querySelector("#radio1").checked = true
var c = 1

setInterval(() => {
    proximaImg()
}, 5000)

const proximaImg = () => {
    c++

    if (c > 3) {
        c = 1
    }

    document.querySelector("#radio"+ c).checked = true
}
