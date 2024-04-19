const bub = document.querySelector("#bulb")
const btn = document.querySelector("button")

var flag = 0
btn.addEventListener('click', function () {
    if (flag == 0) {
        bub.style.backgroundColor = "yellow"
        console.log("Clicked");
        flag = 1
    }else {
        bub.style.backgroundColor = "transparent"
        console.log("Again, Clicked");
        flag = 0
    }
})
// bub.style.backgroundColor="yellow"