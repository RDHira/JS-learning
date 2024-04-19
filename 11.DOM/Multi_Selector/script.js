const h = document.querySelectorAll("h1")
console.log(h)
h.forEach(function(e){
    console.log(e)
})


const or = document.getElementById("pone")
or.addEventListener("click", function(){
    or.innerHTML = "Wel-Come to my new Vlog!!"
    or.style.color = "red"

})