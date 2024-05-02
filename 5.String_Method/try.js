let str="Hello User";
let a=str.length;
console.log(a)      //Output: 10

// *****includes()*************
// The includes() method returns true if a string contains a specified value.
//->It gives true/false values.
let user = "Welcome to the";
let i =user.includes("to the");
console.log(i);            //Output: true

// ****toUpperCase()*********
let str1 = "hi string 1";
let upcase = str1.toUpperCase()
console.log(upcase);         //Output: HI STRING 1

// *****toLowerCase()********
let str2 = "HI String 2";
let lwcase =str2.toLowerCase()
console.log(lwcase);           //Output: hi string 1

// ****startsWith()********
//->It gives true/false values.
let str3 = "Hello World !!"
let swith = str3.startsWith("Hello");
console.log(swith);                   //Output: true

// ******endWith()********
let str4 = "Hello world"
let ewith=str4.endsWith("world");
console.log(ewith);                //Output: true

// *************replace()***********
let str5="JavaScript is the popular langauges";
let rpl=str5.replace("JavaScript","Python");
console.log(rpl);                           //Output: Python is the popular langauges

// ******Concat()************
//-> Merge two or more strings.
let str6a ="Hi,"
let str6b ="Hello,"
let str6c ="How are you?"
let con =str6a.concat(str6b,str6c);
console.log(con);         //Output: Hi,Hello,How are you?


// *******trim()**********
//-> It remove extra spaces to the start.
let str7 ="           Welcome trim string"
let trm=str7.trim();
console.log(trm);             //output:Welcome trim string

// *****CharAt()***********
//->It is define position of character
let str8 ="welcome in charAt"
let chrt =str8.charAt(5);
console.log(chrt);       //output: m


// *****charCodeAt()**********
//->It is define position of character in ASCII code or numbers
let str9="JavaScript langauges";
let ccat=str9.charCodeAt(2);
console.log(ccat);            //output: 97


//*******split()***********/
/*It breaks of strings,remove split characters and gives result in array form */
let str10="Welcome";
let spt=str10.split("l");
console.log(spt);        //Output: [ 'We', 'come' ]


// *****Indexof()*************
//->it gives index value from left start with 0.
let str11 ="welcome in indexof"
let indx =str11.indexOf("in");
console.log(indx);           //output: 8


//***************match()*************/ 
 /*It match the same word or letter and
   give result as Array:*/
   let str12="the hello the user";
   let mtc=str12.match(/the/g);
   console.log(mtc);            //Output: [ 'the', 'the' ]


//****************valueOf()********************** */
//It is print the strings as it is:
let str13="Hello world";
let vof=str13.valueOf();
console.log(vof);      //Output: Hello world


//*****************slice()*************************/
/*It picks letter from given strings, 
it passes two parameter(start and end) which are position of characters */
let str14="Hello World";
let slc=str14.slice(1,5)
console.log(slc);          //output: ello


//*****************substr()*************************/
/*It also picks letter from given strings, 
it can one/more parameter passes*/
let str15="JavaScript langauges";
let sus=str15.slice(2,5);
console.log(sus);         //output: vaS


//***************repeat()************************** */
/*It repeats the strings multiple times as we like:*/
let str16="Hi,repeat";
let rpt=str16.repeat(2);
console.log(rpt);        //Output: Hi,repeat Hi,repeat


//************toString()******************* */
/*It convert number or other datatypes in strings*/
let num=81;
let tostr=num.toString()
console.log(tostr+"-Sal");    //Output: 81-Sal 












