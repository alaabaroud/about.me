'use strict';

let userName = prompt('what is your name?');

console.log(userName);
alert(' hey, ' + userName);


function book() {


  let book= prompt('do you like books?');
//console.log(book);
switch (book.toLowerCase()) {
case 'yes':
case 'y':
  alert('good for you');
  break;
case 'no':
case 'n':
  alert('thats not good!!');
  break;
default:
  alert('only answer with yes or no');
  break;

}
  
}
book();

function food() {
  

let food = prompt('do you like chinese food?');
//console.log(food);
switch(food.toLowerCase()) {
case 'yes':
case 'y':
  alert('meh');
  break;
case 'no':
case 'n':
  alert('totally agree');
  break;
default:
  alert('only answer with yes or no');
  break;

}
}
food();

function movies() {
  

let movies = prompt('do you love watching movies');
//console.log(movies);
switch(movies.toLowerCase()) {
case 'yes':
case 'y':
  alert('saame');
  break;
case 'no':
case 'n':
  alert('you should start now');
  break;
default:
  alert('only answer with yes or no');
  break;

}
}
movies();

function tvShows() {
  

let tvShows = prompt('do you like TV Shows?');
//console.log(tvShows);
switch(tvShows.toLowerCase()) {
case 'yes':
case 'y':
  alert('thats great');
  break;
case 'no':
case 'n':
  alert('why nottt!!');
  break;
default:
  alert('only answer with yes or no');
  break;

}
}
tvShows();




let arabic = prompt('do you find arabic language hard');
//console.log(arabic);
switch(arabic.toLowerCase()) {
case 'yes':
case 'y':
  alert('thats wrong');
  break;
case 'no':
case 'n':
  alert('totally agree');
  break;
default:



  alert('only answer with yes/y or no/n');
  break;

}

/*let num=Number(prompt('can you guess my age?  hint:from 20-30?'));
//let ans=23;
console.log(num);
for (let num = 0; num<4; num++) {
  if (num===23) {
    alert('right');
    break;
  }else if(num<23) {
    alert ('you are not right,I am older');

  }else if (num>23) {
    alert ('you are not right, I am younger');

  }else {
    alert('no more trials');
  }

}*/
/*let age= Number(prompt('guess my age'));
//console.log(age);
switch (age){
case(23):
  if (age===23) {
    alert('you are right');
    break;
  }
case(age<23):
  if (age < 23) {
    prompt('wrong try again');
    break;
  }
  default:
  console.log( 'I am 23');
    break;
}*/

/*
let age = Number(prompt('guess my age?'));
for (let I= 0; I<3; I++) {
  if (age===23) {
    alert('you are right');
    break;
  } else if (age <23) {
    alert('wrong, I am older than' +age);
    prompt('guess my age?');
  }else if (age>23) {
    alert('wrong,Iam younger than'+age);
    prompt('guess my age?');
  }else if(age<23) {
    alert('wrong, I am older than' +age);
    prompt('guess my age?');
  }else {
    alert('I am 23 years old');
  }

}
*/



