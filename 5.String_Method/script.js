// ****** length of the string ()***********
let str="Hello User";
let a=str.length;
document.write(a);
document.write("<br>");

// ******tolowercase()*******
let l = str.toLowerCase();
document.write(l);
document.write("<br>");

// ******toUppercase()*******
let u = str.toUpperCase();
document.write(u);
document.write("<br>");

// ********includes()**********
// It is search method, 
/*It gives True/False output 
after match the searched word from the sentences!!  */
let i =str.includes("User");
document.write(i); 
document.write("<br>");

// *********startWith() and endWith()************
/*It gives result:True/False, from starting word or letter
 in given the words and sentences */
let s = str.startsWith("Hello");
document.write(s);
document.write("<br>");
// ******endWith()********
let e=str.endsWith("User");
document.write(e);
document.write("<br>");

//*******search()*****************
/*It gives result as index value or lentgh 
  of letter from the word */
  let srch = str.search("User");
  document.write(srch);
  document.write("<br>");

 //***************match()*************/ 
 /*It match the same word or letter and
   give result as Array:*/
 let mtc="the hello the user";
 let m=mtc.match(/the/g);
 document.write(m);
 document.write("<br>");

 //******IndexOf()******************/
 /*It gives index from left */
 let idx=mtc.indexOf("hello");
 document.write(idx);
 document.write("<br>");
 //******lastIndexOf()****/
 let lidx=mtc.lastIndexOf("hello");
 document.write(lidx);
 document.write("<br>");

 //*************replace()************* */
 let rep="JavaScript is the popular langauges";
 let r=rep.replace("JavaScript","Python");
 document.write(r);
 document.write("<br>");

 //*****************Trim()******************* */
 let tm="        JavaScript ";
 let t=tm.trim();
 document.write(t);
 document.write("<br>");

 //****************charAt()********************** */
//  It is define position of character
let cra="JavaScript langauges";
let cr=cra.charAt(4);
document.write(cr);
document.write("<br>");

//****************charCodeAt()********************** */
//  It is define position of character in ASCII code or numbers
let cca="JavaScript langauges";
let cc=cca.charCodeAt(1);
document.write(cc);
document.write("<br>");

//****************fromCharCode()********************** */
//  It searches ASCII code and gives result as character
// let cca="JavaScript langauges";
let fcc=String.fromCharCode(65);  //65 ASCII code = A , 97=a;
document.write(fcc);
document.write("<br>");

//***********concat()*********************** */
/*It is concat or merged two or more than two Strings */
let str1="Hello";
let str2=" JavaScript langauges";
let str3=" let's do it";
let con=str1.concat(str2,str3);
document.write(con);
document.write("<br>");

//***************split()************************** */
/*It breaks of strings and gives result in array form */
let splt="JavaScript langauges";
let spt=splt.split("a");
document.write(spt);
document.write("<br>");

//***************repeat()************************** */
/*It repeats the strings multiple times as we like:*/
let rept="JavaScript langauges";
let rpt=rept.repeat(2);
document.write(rpt);
document.write("<br>");

//*****************slice()*************************/
/*It picks letter from given strings, 
it passes two parameter(start and end) which are position of characters */
let slc="JavaScript langauges";
let sl=slc.slice(1,8)
document.write(sl);
document.write("<br>");

//*****************substr()*************************/
/*It also picks letter from given strings, 
it can one/more parameter passes*/
// let slc="JavaScript langauges";
let sus=slc.slice(2,5);
document.write(sus);
document.write("<br>");

//*****************substring()*************************/
/*It picks letter from given strings, 
it passes two parameter(start index value end) which are position of characters */
// let slc="JavaScript langauges";
let sustr=slc.slice(2,8);
document.write(sustr);
document.write("<br>");

//************toString()******************* */
/*It convert number or other datatypes in strings*/
let num=20;
let tostr=num.toString();
document.write(tostr+80); //num changed into string 2080
document.write("<br>");

//****************valueOf()********************** */
//It is print the strings as it is:
let vl="Hello world";
let v=vl.valueOf();
document.write(v);
document.write("<br>");

//*******************trimStart()************************ */
/*The trimStart() method works like trim(), 
but removes whitespace only from the start of a string.*/
let trs="    Hello    ";
let ts=trs.trimStart();
document.write(ts);
document.write("<br>");

//*******************trimEnd()************************ */
/*The trimEnd() method works like trim(), 
but removes whitespace only from the End of a string.*/
let tre="Hello     ";
let te=tre.trimStart();
document.write(te);
document.write("<br>");