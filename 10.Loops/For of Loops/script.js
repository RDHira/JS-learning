// ******For Of Loops**************
// const ar=[1, 2, 3, 4, 5]       //Array number
// for (const i of ar) {
//     document.write(i + "<br>");
    
// }

// const sug = "WELCOME"          // String
// for (const x of sug) {
//     document.write(x, "<br>");  
// }


// *******Maps************
// -->Map is the object, "Map known for unique value no repeatation". 
const map = new Map()
map.set('NP', "Nepal")
map.set('IND', "India")
map.set('UNE', "Dubai")
map.set('US', "America")
// document.write(map);

for (const [key, value] of map) {
    document.write(key, ":-", value, "<br>");
    
}

