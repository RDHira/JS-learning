// *******Array*********
const Arr = [10, 20, 30, 40, 50, 60, 70, 80];
document.write(Arr);
document.write("<br>");

// *****Array Index*******
document.write(Arr[0]);
document.write("<br>");

// *******Undefine*******
document.write(Arr[8]);
document.write("<br>");

// *******Array using for loop*********
let Arry = [10, "Ram", 30, true, 50, "HHHHHH"];
for (let a = 0; a <= 5; a++) {
    document.write(Arry[a] + "<br>");
}

//*******Create Array*******************
let CArr = new Array();
CArr[0] = 10;
CArr[2] = 20;
CArr[4] = 40;
for (let a = 0; a <= 4; a++) {
    document.write(CArr[a] + "\n");
    document.write("<br>");
}

//******User get elements************
// let Uarr = new Array(3);
// for(let g = 0; g<3; g++){
//   Uarr[g] = prompt("Enter values:");
// }

// for(let a = 0; a <2; a++){
//     document.write(Uarr[a] +"<br>");
//   }

//*********Multidementional Array*********
let mdArr = [
    ["Ram", 20, "Male", "BIT"],
    ["Jerry", 21, "Female", "BCA"],
    ["Ram", 22, "Male", "CSIT"],
    ["Inna", 23, "Female", "BBA"]
];
//   document.write(mdArr[1][2]);
document.write("<table border='1px' cellspacing='0'>");
for (let i = 0; i < 4; i++) {  //For outer
    document.write("<tr>");
    for (let b = 0; b < 4; b++) {  //For inner
        document.write("<td>" + mdArr[i][b] + "</td>");

    }
    document.write("<br>" + "</tr>");
}
document.write("</table>" + "<br>");

 
// ********Modify & Delete Array Elements*********
let mArr=["Jerry", 36, "Male", "CSIT"];
mArr[0]="RD-Burman";
document.write(mArr +"<br>");
// ******delete Array Elements******
let dArr=["Tylor",20,"male","CA"]
delete dArr[1];
document.write(dArr[1] + "<br>");

