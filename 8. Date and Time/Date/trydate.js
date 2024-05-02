let now =new Date()
console.log(typeof now);      //output: Object type

console.log(now);          //output: 2024-04-26T01:39:54:641Z

console.log(now.toString());      //output: Thu Apr 25 2024  17:39:54 GMT-0800(GMT-08:00)

console.log(now.toDateString());   //output: Thu Apr 25 2024      ****

console.log(now.toISOString());   //output: 2024-04-26T01:45:47.479Z

console.log(now.toJSON());        //output: 2024-04-26T01:45:47.479Z

console.log(now.toLocaleDateString());   //output: 4/25/2024        ****

console.log(now.toLocaleString());   //output: 4/25/2024, 5:45:47 PM   ****

console.log(now.toLocaleTimeString());   //output: 5:45:47 PM       ****

console.log(now.toTimeString());   //output: 17:49:46 GMT-0800 (GMT-08:00)


// ***********************User define Date*********************************
let CreatedDate=new Date(2055,2,15) ;
console.log(CreatedDate);                 //outout: 2055-03-15T08:00:00.000Z
console.log(CreatedDate.toDateString());  //outout: Mon Mar 15 2055
console.log(CreatedDate.toLocaleString());  //outout: 3/15/2055, 12:00:00 AM


//***************Fixed Date******************************
let FixDate =new Date(2005,5,15)
console.log(FixDate.getDate());     //Output:  15
console.log(FixDate.getDay());     //Output:  15
console.log(FixDate.getFullYear());     //Output:  2005
console.log(FixDate.getMonth());     //Output:  5



// ***************Times*************************



// ***************Customization*************************
let newDate= new Date(14-2-2020)
newDate.toLocaleString('default',{
        weekday:"long"
       
})
console.log(newDate);




