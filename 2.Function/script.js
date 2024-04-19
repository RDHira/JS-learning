 function add(){
    let x=30;
    let y=20;
    let z=x+y;
    document.write(z);
    document.write("<br>");

}
add()

// ******Add by parameter with arguments passing*******
function CalculateSum(x,y){
const Sum = x+y;
return Sum;
}
const Sum=CalculateSum(300,120);
document.write(Sum);
document.write("<br>");


// ********Default parameter passing********
function CalculateArea(w,h=50){   //height = 50 (default value)
    const Area = w*h;
    return Area;
    }
    const Area=CalculateArea(30);  //width=30
    document.write(Area);
    document.write("<br>");

    
    // ********Undefine result (NaN)**********
    function CalculateAvg(f,l){
        const Avg = (f+l)/2;
        return Avg;
        }
        const Avg=CalculateAvg(300); //Here, only f-parameter value pass not l-parameter
        document.write(Avg);         // Output= "NaN" means Not a Number
        document.write("<br>");
        


// ***********Callback function*********
function formatText(text){
    return text.toUpperCase();
  }
  const result =formatText("hello world");
  document.write(result);
document.write("<br>");

//   *******Expression function***********
const login = function(){
    document.write("logged in")
    document.write("<br>");

}
login()


// ********Variable Scope***************
const fileName="XYZ.pdf";
function download(){
    document.write(fileName);
}
download()