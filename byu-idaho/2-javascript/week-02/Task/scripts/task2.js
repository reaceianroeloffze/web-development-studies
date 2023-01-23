/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = 'Reace'

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = '2022';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const imageName = 'images/Reace Ian Roeloffze.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = imageName;
document.querySelector('img').alt = 'Reace Ian Roeloffze';
document.querySelector('img').width = 240;
// or document.querySelector('img').setAttribute('src', imageName).setAttribute('alt', 'Reace Ian Roeloffze'); Could not get width from using this method so I stuck to the one above.


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favouriteFoods = ['Meat', ' Pizza', ' Pasta', ' Fruit'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = favouriteFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let favouriteFood = ' Anything spicy';

// Step 4: add the variable holding another favorite food to the favorite food array
favouriteFoods.push(favouriteFood);
// let favouriteDesserts = ['Cheesecake', ' anything with caramel', ' mousse', ' anything with fudge']

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = favouriteFoods;

// Step 6: remove the first element in the favorite foods array
favouriteFoods.shift();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favouriteFoods;

// Step 8: remove the last element in the favorite foods array
favouriteFoods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = favouriteFoods;


