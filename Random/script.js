// ********Math.random()***********
//-->Math.random() always returns a number lower than 1.
let rnd=Math.random();
document.write(rnd);
document.write("<br>")

// *******Math.floor(x):**************************
// (1)Math.floor(Math.random() * 10);
// -->Math.floor(Math.random() * 10) returns a random integer between 0 and 9 (both included).
let frn=Math.floor(Math.random() * 10);
document.write(frn);
document.write("<br>")

// (2)Math.floor(Math.random() * 10) + 1;
// -->Math.floor(Math.random() * 10) + 1) returns a random integer between 1 and 10 (both included).
let frn_all=Math.floor(Math.random() * 10) + 1;
document.write(frn_all);
document.write("<br>")

// *******Math.min() and Math.max():**********
