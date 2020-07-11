let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'photos/7_Old1.jpg') {
      myImage.setAttribute ('src','photos/ongles.jpg');
    } else {
      myImage.setAttribute ('src','photos/7_Old1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Ampidiro eto ny anaranao.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Matsiro izy zany ry, ' + myName + ' an';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Matsiro izy zany ry, ' + storedName + ' an';
  }

  myButton.onclick = function() {
    setUserName();
  }