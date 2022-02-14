// console.dir(document);

//  console.log(document.domain);
// console.log(document.all[1]);

// console.log(document.links);


// console.log(document.images[1]);

// We have few different selecting methods we can use to query the DOM:

// var hello = document.getElementById('hello');
// hello.innerText ='man';

// hello.innerHTML = '<h3>chris</h3>'

// var hello = document.getElementById('hello');

// hello.style.backgroundColor = '#345'

// GETELEMENTSBYCLASSNAME //
// var it =Array.from(document.getElementsByClassName('item'));
// console.log(it);

// var hello = document.getElementById('hello');
// hello.style.backgroundColor ='yellow';

// function changeText () {
//     var Items = document.getElementsByClassName('item');
//     Items[1].innerHTML = 'Chris Mugisha;'
// };


//This was possible because the items were in both an id and an a class//
// var items = document.getElementsByClassName('item-group');
// // console.log(items);
// console.log(items[2]);
// items[1].textContent = 'hello';
// items[1].style.backgroundColor = '#675';

//Adding a style to all the li elements//

// items.style.backgroundColor = 'grey'; :does not work?//

// u have to create a loop

// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor ='#278';
    
// }
 

// var Items = document.getElementsByClassName('item-group');
// // console.log(Items);

// // Items[1].textContent = 'hello'
// // Items[1].style.BackgroundColor = 'yellow';

// for (let index = 0; index < Items.length; index++) {
//     Items[index].style.BackgroundColor = '#f4f4f4';
    
// }

// var Items = document.getElementsByClassName('item-group');
// console.log(Items);

// for (var i=0; i<Items.length; i++) {
// // console.log(Items[i]);
// // };

// var Items = document.getElementsByClassName('item-group');
// console.log(Items[1]);

//GETTING ELEMENT BY CLASS// 

//  for (var i=0; i<Items.length; i++) {
//      Items[i].style.backgroundColor = '#545';
//  }

//GETTING ELEMENT BY TAGS WORKS LIKE GETTING ELEMENT BY TAGS//
// var Li= document.getElementsByTagName('li');
// console.log(Li);


//QUERYSELECTOR//

// var hero = document.querySelector('.hero');
// console.log(hero);
// USE . FOR CLASSES AND # FOR Ids

// hero.style.backgroundColor = '#675';

//another one u can use
// var input =document.queryselector("input");
//input.value = "hello world"; to add input

// With querySelector we can use in CSS Selectors//

// var sunbmit = document.querySelector('input[type="submit"]');
// Submit.value='send';

// var item = document.querySelector('.type class name here:last child if u have multiple');
// item.style.color = 'any color';

// var secondItem = document.querySelector('type class name here: second-child');

//QUERYSELECTORALL//
// var titles = document.querySelectorAll('title')


// when u wanna create different colors from a form list//

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // for (var i = 0; i<odd.length; i++) {
//     odd[i].style.backgroundColor = '#ccc';
// }

// var item = document.getElementById ('id');
// console.log(item);
// item.textContent ='hello';


// item.innerHTML = '<h1>chris</h1>';

// item.style.backgroundColor = 'Red';


// var items = document.getElementsByClassName('item');
// console.log(items[1]);
// items[1].textContent ='hello boiii';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[1].style.backgroundColor = 'black';

//Adding a style to all elements in the same class//

// items.style.backgroundColor ='grey'; // This does not work//

// for (var i = 0; i<items.length; i++){
// //     items[i].innerText = 'holly';
// //     items[i].style.backgroundColor = '#567'
// }



// var items = document.getElementsByTagName('li');

// // console.log(items[1]);
// // items[1].textContent ='hello boiii';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';
// // items[1].style.backgroundColor = 'black';


// for (var i = 0; i<items.length; i++){
//     items[i].style.background = 'red';
// };

//QUERYSELECTOR AGAIN//

// var id = document.querySelector('#id');
// id.style.backgroundColor = 'blue';

// console.log(id);

//To fill in a form with an input//
//  var input = document.querySelector('input');
//  input.value = 'hello world';

//  var hero = document.querySelector('.hero');
//  console.log(hero);
//  hero.style.backgroundColor = 'yellow';


// var input = document.getElementsByClassName('.list');
// console.log(input);

// var lastInput = document.querySelector('list:last-child');
// lastInput.style.backgroundColor = 'blue';

// u can use different css suto classes//

///QUERY SELECTOE ALL//

// var text = document.querySelectorAll('.project-c');
// console.log(text);
// text[0].textContent = 'hello';



// Down bellow is also something that u can also do//

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i<odd.length; i++) {
//     odd[2].style.backgroundColor = '345';
// }



//TRAVERSING THE DOM//: PARENT, CHILDREN,SEEBLINGS

// var itemlist = document.querySelector('.project-c');
// //parentNode
// console.log(itemlist.parentNode.parentNode.parentNode);
// // itemlist.parentNode.style.backgroundColor = 'grey';

//parentElement can be interchangable with parentNode//

// var itemlist = document.querySelector('.project-c');

// console.log(itemlist.parentElement);

// childNodes// Not a good practice, use children instead
var items =document.querySelector('.project-c');
console.log(items.children);
// items.childNodes.style.backgroundColor = 'grey';












