const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph); 

const NewImage = document.createElement('img')
NewImage.setAttribute('src', 'https://placeimg.com/200/200/animals')
document.body.appendChild(NewImage)

const newSection = document.createElement('section')
newSection.innerHTML = '<h2>CSE 121b</h2><p>Welcome to JavaScript Language!</p>'
document.body.appendChild(newSection)