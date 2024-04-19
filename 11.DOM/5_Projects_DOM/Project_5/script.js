var arr = [
    {dp:"/Project_5/img/a.jpg",story:"/Project_5/story_img/sa.jpg"},
    {dp:"/Project_5/img/b.jpg",story:"/Project_5/story_img/sb.jpg"},
    {dp:"/Project_5/img/c.jpg",story:"/Project_5/story_img/sc.jpg"},
    {dp:"/Project_5/img/d.jpg",story:"/Project_5/story_img/sd.jpg"},
    {dp:"/Project_5/img/e.jpg",story:"/Project_5/story_img/se.jpg"},
    {dp:"/Project_5/img/f.png",story:"/Project_5/story_img/sf.jpg"},
    {dp:"/Project_5/img/g.png",story:"/Project_5/story_img/sg.jpg"},
    {dp:"/Project_5/img/h.jpg",story:"/Project_5/story_img/sh.jpg"},

]


var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter
storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style
    .backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },2000)
})