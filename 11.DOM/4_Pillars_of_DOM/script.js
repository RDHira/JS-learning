//@@@@  4 Pillars of DOM  @@@@@@@@@@@@@@@@
//i>Selection of an Element....
//ii>Changing HTML....
//iii>Changing CSS....
//iv> Event Listener.....

// ###############################################################################################################

//************i> Selection of an Elements*******************/
const a = document.querySelector("h2")
console.log(a);

//************ii> Changing HTML*******************/
const b = document.querySelector("h3")
b.innerHTML = "Welcome to innerHTML field"

//************iii> Changing CSS*******************/
const c = document.querySelector("#pone")
c.style.color= "yellow"

// ***********iv> Event Listener ****************************
const d = document.querySelector("button")
d.addEventListener('click', function(){
    d.innerHTML="The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML-based markup language document. The DOM is a document model loaded in the browser and representing the document as a node tree, or DOM tree, where each node represents part of the document (e.g. an element, text string, or comment).The DOM is one of the most-used APIs on the Web because it allows code running in a browser to access and interact with every node in the document. Nodes can be created, moved, and changed. Event listeners can be added to nodes and triggered on the occurrence of a given event."
    d.style.backgroundColor = "#212121"
    d.style.width = "100%"
    d.style.height = "100%"
    d.style.textAlign = "justify"
})