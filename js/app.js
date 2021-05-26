'use strict';

/*let userName = prompt('what is your name?');

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


function arabic() {


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
}
arabic();

*/

/*question 6
let answer=23;
//console.log(num);
for (let i= 0; i<4; i++) {
  let num=Number(prompt('can you guess my age?  hint:from 20-30?'));

  if (num===answer) {
    alert('you are 100% right');
    break;
  }else if(num<answer) {
    alert ('you are not right,I am older');

  }else if (num>23) {
    alert ('you are not right, I am younger');

  }else {
    alert('no more trials');
  }

  if (i===3){
    alert('I am 23 yours old');
  }
}
*/

let favMovies='';
let ans=['godfather ' , 'interstellar ', 'the prestige'];
let attempts=6;

hasAttempts:while (attempts) {
  favMovies=prompt('what are my favorite movies? ');
  attempts-=1;
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
    if (favMovies===ans[i]) {
      alert('correct, my favorites are, ' +ans);
      break hasAttempts;
    }

  }
}

if (attempts<6) {
  alert('this is not correct');
}

if (!attempts) {
  alert('here are the answers ' + ans);
}
