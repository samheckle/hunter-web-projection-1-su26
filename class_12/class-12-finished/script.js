// What is the first line of code we write in a .js file?
// Write it below this line.
window.addEventListener("load", ()=>{
	let container = document.querySelector("#container")

	// add an event listener that detects when the container is hovered over with the mouse using the mouseenter
	container.addEventListener("mouseenter", ()=>{
		container.style.backgroundColor = "#c0d6df"
	})

	container.addEventListener("mouseleave", ()=>{
		container.style.backgroundColor = "#dd6e42"
	})
})

// Inside of the function, retrieve the id of the div you created in index.html and assign it to a variable.

// Q: What is another way to write the first line of code? 
// A: window.onload = () => {}

// Q: What does the document keyword represent?
// A: the html document or the DOM

// Q: What is the property we access to change the style of a selected element in js? How would we change the background color of the div we selected?
// A: document.querySelector("#container").style.backgroundColor
// OR document.getElementById('container').style.backgroundColor
// OR container.style.backgroundColor
