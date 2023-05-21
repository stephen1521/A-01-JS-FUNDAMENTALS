
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


const x = 6

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function sum (num1, num2) {
  	return (num1 + num2) + x;
}

console.log('-------------- Question 1 ----------------')
console.log(sum(1,4));
console.log();

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const sum2 = (num1, num2) => (num1 + num2) + x

console.log('-------------- Question 2 ----------------')
console.log(sum2(2,4))
console.log();

// 3. Write a function that returns another function. (use arrow functions please)

const func1 = () => { 
	const func2 = () => 'some words' 
	return func2;
}

console.log('-------------- Question 3 ----------------')
console.log(func1());
console.log();

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log('-------------- Question 4 ----------------')
console.log(getFunction()(2))
console.log('It still has access to y becuase the inner function is within the scope of the outer function, therefore anything in the outer function can be used inside the inner function. Also known as closures.');
console.log();

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

const q5 = (callback) => {
	try {
		return callback();
	} catch (e) {
		return 'Sorry, there was an error';
	}
}

console.log('-------------- Question 5 ----------------')
console.log(q5(couldThrowError));
console.log();

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mappedData = userData.map((element) => {
	const newData = {
		id: element.id,
		favoriteFoods: element.favorites.food.length
	}
	return newData;
});

console.log('-------------- Question 6 ----------------')
console.log(mappedData);
console.log();

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const mappedData2 = userData.reduce((arr, element) => {
	if(element.favorites.food.includes('pizza')){
		arr.push(element.name);
	}
	return arr;
}, []);

console.log('-------------- Question 7 ----------------')
console.log(mappedData2);
console.log();

// 7. Show an an example of a switch statement being used

console.log('-------------- Question 8 ----------------')

let statement = 'wednesday';
switch (statement) {
	case 'monday':
		console.log('The day is Monday')
		break;
	case 'tuesday':
		console.log('The day is Tuesday')
		break;
	case 'wednesday':
		console.log('The day is Wednesday');
		break;
	case 'thursday':
		console.log('The day is Thursday');
		break;
	default:
		console.log('Something broke');
}

console.log();

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////


const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
 };
 const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
 };
  

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedData = {...userPersonalData, ...userGameData};

console.log('-------------- Question 9 ----------------')
console.log(combinedData);
console.log();




// 9. Make a copy of your new user object but override the birthday to december 31st
 
console.log('-------------- Question 10 ----------------')

const copiedData = {...combinedData, birthday: 'Decemeber 31st'};
console.log(copiedData);
console.log();

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

console.log('-------------- Question 11 ----------------')
const copiedData2 = {...copiedData.accomplishments};
console.log(copiedData2);
console.log();



//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
 };

 console.log('-------------- Question 12 ----------------')

const {food} = user.favoriteThings;
console.log(food);
console.log();

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

console.log('-------------- Question 13 ----------------')

const [food1, food2] = food;
console.log(food1 + ' ' + food2);
console.log();

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];

console.log('-------------- Question 14 ----------------')

const [name1, age, ...rest] = data;
console.log(name1);
console.log(age);
console.log(rest);
console.log();

// 14. use object destructuring to grab the following from the userInfo object: 
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food:  ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};

console.log('-------------- Question 15 ----------------')

const {name, favorites} = userInfo;
const userName = name;
const favoriteFood = favorites.needs.food; 
const favoriteThing = favorites.wants.things[0];
const secondfavoriteThing = favorites.wants.things[1];

console.log(userName);
console.log(favoriteFood);
console.log(favoriteThing);
console.log(secondfavoriteThing);
console.log();

var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         if((Math.ceil(Math.random() * 2)) < 2){
           throw new Error('Error!')
         }
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log('-------------- Question 16 and 17 ----------------')
fetchData().then((res, rej) => console.log(res)).catch(error => console.log('The promise was rejected, question 16'));



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
async function q17 () {
	try {
		const res = await fetchData();
		console.log(res);
	} catch(e) {
		console.log('The promise was rejected, question 17');
	}
}

q17();
