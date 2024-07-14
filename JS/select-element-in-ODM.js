//DOm Manipulation

// ===change styling
const title = document.querySelector("#main-heading");
title.style.color = "red";

const listItem = document.querySelectorAll('.list-items');

for(i=0; i<listItem.length; i++){
    
    listItem[i].style.fontSize = '2rem';
}

// //GetElementById()
// const title = document.getElementById("main-heading");
// console.log(title);

// //GetElementByClassName()

// //getElementsByTagName()
// const listItems = document.getElementsByTagName('li');
// console.log(listItems)

// //querySelector()
// const queryDiv  = document.querySelector('div')
// console.log(queryDiv)

// //querySelectorAll()

// const queryAll  = document.querySelectorAll('div')
// console.log(query)
