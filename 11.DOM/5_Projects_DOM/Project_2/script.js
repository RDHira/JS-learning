const con = document.querySelector("#container")
const love = document.querySelector("i")

con.addEventListener("dblclick", function(){
    love.style.transform = "translate(-50%, -50%) scale(1)";
    love.style.opacity = 0.8


    setTimeout(function(){
        love.style.opacity = 0
    },1000)

    setTimeout(function(){
        love.style.transform = "translate(-50%, -50%) scale(0)";
    },2000)
})



// ***setTimeout ********
// -->It means Delay.
// Example:
// setTimeout(function(){
//     console.log("Hello 1")
// },5000)    // 5000 milisecond time set

// setTimeout(function(){
//     console.log("Hello 2")
// },2000)   //2000 milisecond time set
