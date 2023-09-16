let product = 'Angkor Milk';
let price = 3.99;
let qty=5;
let order= "you bought" + qty + " " + product + ". Total is: " + price*qty;

let literal = `hello ${1+2}`
let value= `you bought ${qty} ${product}.Total is: ${price*qty}`

//CONSOLE ALERT PROMT
let warning = console.warn('Uh OH warning!')

//nested condition
const pw = prompt("please enter a new password");
if(pw.length>=6){
    console.log("long enough password")
}else{
    console.log("password too short! must be 6+ characters!")
}
if(pw.indexOf(' ')===-1){ //confirm that space is not exist
    console.log("good job! pw contains no spaces")
}else{
    console.log("pw can't contain spaces!")
}