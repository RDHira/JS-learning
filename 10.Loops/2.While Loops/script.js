// *******While Loops and do while Loops****************
document.write("****** While Loop*********","<br>");
let i=0
while(i<=10){
    document.write("The value of index i is: ", i + "<br>");
    i=i+2       // here condition is terminated
    
}
document.write("<br>");


// ******** Array while loops************
let myarray=["Man", "Woman", "Batman", "Human"]
let ar=0;
let len=myarray.length;
while(ar<len){
    const element=myarray[ar]
    document.write("The Value  is: ", element + "<br>");
    ar=ar+1;
}
document.write("<br>")


// *********do_While loops**************
// -->At first do work then check condition.
document.write('*******Do while loops**********',"<br>");
let y=0;
do{
    document.write('Value is:', y + "<br>");
    y++
}
while(y<=10);       //condition
document.write("<br>");


let score=20; 
do{
    document.write('The score is: ',score + "<br>");
    score++
}
while(score<=10);       //output: here at first initialize score print then condition checked,score and condition not match program terminated
