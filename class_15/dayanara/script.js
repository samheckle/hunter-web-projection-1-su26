// this is <html> tag that all of our js code will live in
window.onload = () => { // <html>

	// anything that we do in js files will manipulate changes inside of the content
	// manipulates stuff inside <body>

	document.querySelector('img').addEventListener("click", ()=>{ // beginning of action
		// grabs the first item in html that is img
		// sets the style to 100px
		document.querySelector('img').style.width = "100px"
	}) // end of action

} // </html>