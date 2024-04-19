const myObject={
    py: 'Python',
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}
for (const key in myObject) {
    document.write(key, ":shortcut for-->", myObject[key], "<br>");

}


// *******Array**********
const Programs = ["py", "js", "cpp", "rb", "java"]
for (const key in Programs) {
    // document.write(key, "<br>");
    document.write(Programs[key], "<br>");
}


// ****** in Map ***********
map.set('NP', "Nepal")
map.set('IND', "India")
map.set('UNE', "Dubai")
map.set('US', "America")
// document.write(map);

for (const key in map) {
    document.write(key, "<br>");  // Can't iterate/in loop in map, NOT give output
    
}