window.onload = () => {
	document.getElementById("morning").addEventListener("click", ()=>{
		document.getElementById("evening").style.display = "block"
	})

	setInterval(()=>{
		let date = new Date()
		if(date.getMinutes() == 27){
			document.getElementById("evening").classList.toggle("hidden")
		}
	}, 1000)
}