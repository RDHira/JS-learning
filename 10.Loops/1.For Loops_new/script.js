// *********For Loops*******************
document.write('********For_Loops*******',"<br>");
for(var index=1; index<=10; index++){
    document.write(index,"<br>");

}

// // ********* Inner Loops inside Outer loops**********
document.write('********Outer and Inner For_Loops*******',"<br>");
for (let i = 1; i <=20; i++) {    //outer loops
    document.write('Table of:',i + "<br>");

    for (let j = 1; j <=10; j++){   //inner loops
        document.write(i + '*' + j + ' = ' + i*j, "<br>");
    }
    document.write("<br>");

}

// // ******* Array in For loops ***********************
document.write('*******Array in for Loops*******',"<br>");
let anArray = ["Elephant", "Tiger", "Lion", "Danasour", "Rhiano"]
for (ar=0; ar<anArray.length; ar++){
    const element=anArray[ar];
    document.write(element,"<br>");
    
}

// ******Use if condition inside for loops***********************
document.write('******if condition use in loop*****',"<br>");
for(let x=0; x<10; x++){
    const element=x;
    if(element==5){
        document.write('<b>5 is most powerfull Number</b>',"<br>");
    }
    document.write(element,"<br>");

}


// ******** break and continue ********************
//Break: it is used to terminate the control flow
document.write('*******break_Loops*******',"<br>");
for (let b = 1; b <=20; b++) {

    if(b==5){
        document.write("<b>Detected the 5</b>", "<br><br>");
        break;      // Uses of Break
    }
    document.write('Value  of  b  is :', b +"<br>");
}

// *********** Continue ****************
// It is not the terminate control flow, it continues at one time
document.write('********Continue_Loops*******',"<br>");
for (let c = 1; c <=20; c++) {

    if(c==10){
        document.write("<b>Detected the 10</b>","<br>");
        continue;      // Uses of continue
    }
    document.write('Value  of  c  is :', c +"<br>");

}