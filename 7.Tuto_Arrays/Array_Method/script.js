//******Array_Length***********
/*The length property returns
 the length (size) of an array:*/
let mArr=[10, 20, 30, 40, 50];
let al=mArr.length;
document.write(al +"<br>");

//*****Array_toString()*********
/*The JavaScript method toString() converts
 an array to a string of (comma separated) array values.*/
let sArr=[10,20,30,40,50];
let sa=sArr.toString();
document.write(sa +"<br><br>");

//******Array_pop()**********
/*The pop() method removes the last element from an array:*/
let pArr=["Apple","Banana","Orange","Mango"];
document.write(pArr +"<br>");
pa=pArr.pop();
document.write(pa +"<br><br>");

//*****Array_push()**************
/*The push() method adds a new element to an array (at the end):*/
document.write(pArr +"<br>");
pArr.push("Grapes");
document.write(pArr +"<br><br>");

//******Array_sort()***********
/*It is arrange in orderwise or Alphabets order*/
let stArr=["Ram","Hritik","Aman","Binay"];
document.write(stArr +"<br>");
stArr.sort();
document.write(stArr +"<br><br>");

//*****Array_reverse()******* */ 
/*It is arrange the elements in reverse or end element in start*/
document.write(stArr +"<br>");
stArr.reverse();
document.write(stArr +"<br><br>");

//******Array_shift()*****************
/*The shift() method removes the first array element 
and "shifts" all other elements to a lower index.*/
let sha=["Ram","Hritik","Aman","Binay"];
document.write(sha +"<br>");
sha.shift();
document.write(sha +"<br><br>");

//****Array_unshift()***************
/*The unshift() method adds new elements to the beginning of an array*/
let unsha=["Ram","Hritik","Aman","Binay"];
document.write(unsha +"<br>");
unsha.unshift("Nik");
document.write(unsha +"<br><br>");

//****Array_concat()***************
//The concat() method merges (concatenates) arrays
let boys=["Jonny","Sunny","Nik"];
let girls=["Mia","Jolly","Inna"];
let student=boys.concat(girls);
document.write(student +"<br><br>");

//**********Spraid***************/
//It is the same as concat() method array
let marvel_heroes=["Thor","Hulk","Ironman"];
let dc_heroes=["batman","flash","superman"];
let all_heroes=[...marvel_heroes, ...dc_heroes];
document.write(all_heroes +"<br><br>");

//****Array_join()***************
/*It is merge in one value of different array values*/
let jArr=["Ram","Hritik","Aman","Binay"];
document.write(jArr +"<br>");
let ja=jArr.join("-");
document.write(ja +"<br><br>");
 
//********Array_slice()**********************
//The slice() method can take two arguments like slice(start, end).
let slArr=["Sann","Jonn","Panny","Binek","Topen"];
document.write(slArr +"<br>");
let sl=slArr.slice(1 , 4);   //"1" is Start and "4" is End
document.write(sl +"<br><br>");

//******Array_splice()*********************************
//The splice() method returns an array with the deleted items:
document.write(slArr +"<br>");
let spl=slArr.splice(2, 0, "Lemon", "Kiwi");
document.write(spl +"<br><br>");

//*********isArray()*********************************
//output=error, it's mistake:
let isA=["Sann","Jonn","Panny","Binek"];
document.write(isA +"<br>");
let iA=Array.isArray();
document.write(iA +"<br><br>");

//*********indexOf()*********************************
//output=error, it's mistake:
let inA=["Sann","Jonn","Panny","Binek"];
document.write(inA +"<br>");
let inArr=inA.indexOf("Jonn");
document.write(inArr +"<br><br>");

//***********Flat()********************************/
//It generates many array inside arrays into one single array
const mixed_array=[1,2,3,[4,5,6],[7,8,[5,9,3]]];
const real_array=mixed_array.flat(Infinity);
document.write(real_array +"<br><br>");

//**************isArray()*****************************/
//
document.write(Array.isArray("Hiralal")+"<br>")
document.write(Array.from("Hiralal"))
document.write(Array.from({name: "hiralal"})+"<br>");
let score1=100;
let score2=200;
let score3=300;
document.write(Array.of(score1,score2,score3));