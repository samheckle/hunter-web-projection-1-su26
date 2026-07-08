// to write comments
// if you use the hotkey ⌘+/ (Mac) or CTRL+/ (PC) it will automatically switch based on file type

// semi-colons (;) are optional in js
// function name = alert()
// parameter = 'this is a javascript alert!'
// text that is wrapped in '' or "" is called a string

// this will not work because it is reading apostrophe in i've as code syntax instead of a character
// alert('i've changed this text)

// removing apostrophe fixes the issue	 	
alert('ive changed this text'); 
// we could also use "" and ' to differentiate
// alert("i've changed this text")
// or use an escape character \ before the apostrophe
// alert('i\'ve changed this text')

// this does not show up on the webpage
// you need to open the inspector → console to see
// function name = log
// parameter = 'this is a console message'
// log belongs to the console → console.log
// log does not exist outside of the console
console.log('this is a console message')

// in order for js to manipulate the HTML, the HTML file needs to be fully loaded. 
// we detect when the page has loaded using
// addEventListener() → function
// "load" → parameter #1, which event we are looking for
// we are waiting for the WINDOW to finish LOAD the HTML
// ()=>{} → parameter #2, the action / function execute when the page has fully loaded
window.addEventListener("load", ()=>{
	// all of our code that changes the HTML/CSS will live inside these {}
	console.log('page has loaded, js connected')

	// to change something in js we need to grab the specific element we are changing
	// document → HTML document
	// getElementById() → function to retrieve an element name
	// 'big-paragraph' → name of the id, without #
	// .textContent → html inside of the <p> to change does not accept html tags in the text
	document.getElementById('big-paragraph').textContent = '<strong>changed with js</strong>'
	// querySelector() → function to retrieve an element using CSS selector syntax. it retrieves the first item that matches the CSS selector
	// .innerHTML → does include the html tags
	document.querySelector('.red-paragraph').innerHTML = '<em> changed again </em>'

	// querySelector for ids needs the CSS selector with the #
	// to grab the style we use .style
	// to change a specific style property we use the CSS property name without hypen (-)
	// converting this css rule to js
	// #big-paragraph { background-color: #454e9e}
	document.querySelector('#big-paragraph').style.backgroundColor = '#454e9e'

	// grab the #another id and add a class to it
	// add() → function name
	// 'red-paragraph' → parameter of the class name you want to add
	document.querySelector('#another').classList.add('red-paragraph')

	// creating a variable so we don't have to write document.getElementById over and over
	let sp = document.getElementById('special')
	sp.textContent = 'this is a very special paragraph'
	sp.style.fontSize = '50px'
	sp.style.color = '#f00699'

	// remove elements
	// let another = document.querySelector('#another')
	// another.remove()
	document.querySelector('#another').remove()

	// add HTML elements after the page has loaded
	// 1. use the createElement() function to decide which tag is being created
		// createElement() → function name
		// 'h1' → parameter, with the name of the tag
	let newElement = document.createElement('h1')
	// 2. make any changes to the element as needed
	newElement.textContent = 'this was added with js'
	// 3. add the element to the page using appendChild()
		// we can add to the body
	document.body.appendChild(newElement)
		// we can add to a parent container
	document.querySelector('#container').appendChild(newElement)

})
// window.onload = () => {} // shorthand








