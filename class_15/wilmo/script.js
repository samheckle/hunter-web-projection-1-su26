window.onload = () =>{ // <html>

	setInterval(()=>{ // <body>
		let time = new Date()
		let currentHour = time.getHours()

		let main = document.querySelector("#main")

		if(currentHour == 12){
			main.style.background = "navy"
		} 
		if(currentHour == 11){
			main.style.background = "lightpink"
		}

		let otherDiv = document.querySelector("#show")
		otherDiv.classList.toggle('toggleColor')

	}, 1000) // </body>

} // </html>