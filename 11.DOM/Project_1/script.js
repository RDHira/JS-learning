const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === "black")
        body.style.backgroundColor = "black"
         
        if(e.target.id === "white")
        body.style.backgroundColor = "white"

        if(e.target.id === "purple")
        body.style.backgroundColor = "purple"

        if(e.target.id === "green")
        body.style.backgroundColor = "green"

        if(e.target.id === "yellow")
        body.style.backgroundColor = "yellow"
    
    })
})