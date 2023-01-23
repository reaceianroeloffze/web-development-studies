/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {
    // Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: 'Reace Ian Roeloffze',
    // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: 'images/Me.jpg',
    // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favouriteFoods: [
        'Meat',
        'Cheescake',
        'Fudge',
        'Pasta',
        'Curry',
        'Pizza',
        'Caramel'
    ],

    // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: [
        'Mosaic Art',
        'Gaming (Card, Board, Platform)',
        'Binging Anime',
        'Walking',
        'Being Outdoors',
        'Writing Haikus'
    ],

    // Step 6: Add another property named placesLived with a value of an empty arrays
    placesLived : [
        // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
        location1 = {
            // Step 8: For each property, add appropriate values as strings
            place: 'Alberton', 
            length: '5 years'
        },
        // Step 9: Add additional objects with the same properties for each place you've lived
        location2 = {
            place: 'Sunnyside', 
            length: '3 years'
        },
        location3 = {
            place: 'Doorinpoort', 
            length: '1.5 years'
        },
        location4 = {
            place: 'Centurion', 
            length: '13 years'
        },
        location5 = {
            place: 'Lydenburg', 
            length: '5 years'
        },
        location6 = {
            place: 'Dorandia, Pretoria North', 
            length: 'currently residing'
        },
        mission = {
            place: 'South Africa Cape Town Mission',
            length: '2 years'
        }
    ]
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('img').src = myInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').alt = myInfo.name;
document.querySelector('img').width = 300;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
myInfo.favouriteFoods.forEach((food) => {
    let foodList = document.createElement('li');
    foodList.textContent = food;

    // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.getElementById('favorite-foods').appendChild(foodList);
}) ;

// Step 6: Repeat Step 4 for each hobby in the hobbies property
myInfo.hobbies.forEach((hobby) => {
    let hobbyList = document.createElement('li');
    hobbyList.textContent = hobby;
    
    // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(hobbyList);
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
myInfo.placesLived.forEach((location) => {
    let locationList = document.createElement('dt');
    locationList.textContent = location.place;    
    // - Create an HTML <dd> element and put its length property in the <dd> element
    let livingDuration = document.createElement('dd');
    livingDuration.textContent = location.length;
    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-live
    document.getElementById('places-lived').appendChild(locationList);
    document.getElementById('places-lived').appendChild(livingDuration);
});

