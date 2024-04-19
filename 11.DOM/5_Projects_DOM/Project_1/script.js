const istatus = document.querySelector("h5")
const addFriend = document.querySelector("#add")
var check = 0

addFriend.addEventListener("click", function(){
    if(check==0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        check = 0
    }
})




// ************Remove remove button ******************
// const removeFriend = document.querySelector("#remove")
// removeFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })