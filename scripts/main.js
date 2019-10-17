/* sample code to display hello world
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';*/

// sample code to change image on click
let image = document.querySelector('img');
image.onclick = function() {
	let imageSource = image.getAttribute('src');
	if (imageSource === 'images/firefox-icon.png') {
		image.setAttribute('src', 'images/firefox2.jpg');
	} else {
		image.setAttribute('src', 'images/firefox-icon.png');
	}
}

// code to implement web storage api
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
	let myName = prompt('Enter a name');
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla is cool ' + myName;
	}
}
if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool ' + storedName;
}
myButton.onclick = function() {
	setuserName();
}