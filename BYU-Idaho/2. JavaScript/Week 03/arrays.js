const newArray = ['one', 'two', 'three'];
const list = (items) => `<li>${items}</li>`;
const currentArray = newArray.map(list);

document.getElementById("myList").innerHTML = currentArray.join('');

// Activity 2
const grades = ['A', 'B', 'C'];
function getGPA (grade) {
    let GPA = 0;
    if (grade === 'A') {
        GPA = 4;
    };
    if (grade === 'B') {
        GPA = 3;
    };
    if (grade === 'C') {
        GPA = 2;
    };
    return GPA
};

const GPA = grades.map(getGPA);

// Activity 3
const average_GPA = GPA.reduce((total, score) => total + score) / grades.length;
console.log('GPA: ', average_GPA)
document.getElementById("myList").textContent = GPA.join('');

// Activity 4
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
const wordLimit = fruit.filter(fruits => fruits.length < 6)
document.getElementById("myList").textContent = wordLimit.join(', ');

// Activity 5
const numerics = [12, 34, 21, 54]
const luckNumber = 21
const selectedNumerics = numerics.indexOf(34)
console.log('Index in Array: ', selectedNumerics)
console.log('Index in Array: ', numerics.indexOf(luckNumber))