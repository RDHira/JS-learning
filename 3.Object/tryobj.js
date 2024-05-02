const user={
    name:"Risav",
    age: 30,
    email:"rahul@gmail.com"
}
     //user.name="Rahul";
     //console.log(user.name);
//console.log(user["name"]);    //Output: Rishav
//console.log(user.name="Keshav");  //Output: Keshav
//console.log(user.name);   //Output: Keshav

// ************Access all keys and values separetly**********
console.log(Object.keys(user));
console.log(Object.values(user));
