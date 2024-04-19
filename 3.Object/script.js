// *********First Method of Object create ********
let car={
    name:'Suzuki',
    color:'white',
    weight:'5500kg',
    model:2500,
    price:400000
};
document.write(car.weight)
document.write("<br>");
// console.log(car);


// *********Second method of Object create************
let person = new Object();   // i like it..
    person.fname ="Rahul";
    person.lname ="Yadav";
    person.age =25;
    person.address ='ktm';
    person.gmail ='hellogmail@gmail.com';
    document.write(person.gmail);
    console.log(person);
    document.write("<br>");

//*******Array of Objects*********
// Syntax:
/*      Var Student = [
        {Name:"Ram", Age:20},
        {Name:"Shyam", Age:25},
        {Name:"Lakhan", Age:30}, 
    ]; 
*/
// ie.
let student = [
        {name:"Ram", age:20},
        {name:"Shyam", age:25},
        {name:"Lakhan", age:30}, 
    ]; 
    // document.write(student[0].name + " " + student[0].age + "<br>");
    console.log(student);
//*****Using For Loops*********    
for(let a=0; a<student.length; a++){
    document.write(student[a].name +" "+ student[a].age + "<br>");
}

//******Const Variable with Array and Object*****
const a=[10,20,30,40,50];
     a[2]=26;
     a[4]=46;
  console.log(a)
  document.write(a);