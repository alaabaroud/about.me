'use strict';

let userName = prompt('what is your name?');

console.log(userName);
alert(' hey, ' + userName);



let book= prompt('do you like books?');
//console.log(book);
switch (book.toLowerCase()) {
    case 'yes':
    alert('good for you')
        break;
    case 'no':
alert('thats not good!!')
break
    default:
alert('only answer with yes or no')
break;

}

let food = prompt('do you like chinese food?');
//console.log(food);
switch(food.toLowerCase()) {
    case 'yes':
    alert('meh')
        break;
    case 'no':
alert('totally agree')
break
    default:
alert('only answer with yes or no')
break;

}

let movies = prompt('do you love watching movies');
//console.log(movies);
switch(movies.toLowerCase()) {
    case 'yes':
    alert('saame')
        break;
    case 'no':
alert('you should start now')
break
    default:
alert('only answer with yes or no')
break;

}

let tvShows = prompt('do you like TV Shows?');
//console.log(tvShows);
switch(tvShows.toLowerCase()) {
    case 'yes':
    alert('thats great')
        break;
    case 'no':
alert('why nottt!!')
break
    default:
alert('only answer with yes or no')
break;

}

let arabic = prompt('do you find arabic language hard');
//console.log(arabic);
switch(arabic.toLowerCase()) {
    case 'yes':
    alert('thats wrong')
        break;
    case 'no':
alert('totally agree')
break
    default:
alert('only answer with yes or no')
break;

}
alert('it was nice to talk with you '+ userName);
