//******Number_Method*************/
// It convert string into number:
let a="99";
let num=Number(a);
document.write(num); 
document.write("<br>");

//******parseInt()*************/
// It gives result in integer without decimal value:
let pInt="250.33";
let prs=parseInt(pInt);
document.write(prs); 
document.write("<br>");

//******parsefloat()*************/
// It gives result in integer with decimal value:
let pFlt="250.33";
let pf=parseFloat(pFlt);
document.write(pf); 
document.write("<br>");

/******isFinite()*************/
// It is checked only condition and result in True/False:
let isF=20;
let isfn=Number.isFinite(isF);
document.write(isfn); 
document.write("<br>");

//******isInteger()*************/
//It is checked only integer value and give result in True/False:
let isint="hello";
let isn=Number.isInteger(isint);
document.write(isn); 
document.write("<br>");

//******toFixed()*************/
//It gives result fixed value:
let fx=12.4565;
let tfx=fx.toFixed(2);
document.write(tfx); 
document.write("<br>");

//*********toPrecision()*******************
//It gives result 
let tpre=2.83467;
let pre=tpre.toPrecision(2);
document.write(pre);
document.write("<br>");

//******toExponential()*******************/
//Returns a number written in exponential notation:
let epl=5.677847;
let ep=epl.toExponential(3);
document.write(ep);
document.write("<br>");
