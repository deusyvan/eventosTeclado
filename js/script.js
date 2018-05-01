function apertouTecla(event) {
	console.log("Apertou alguma tecla: " + event.keyCode);
}
function soltouTecla(event) {
	console.log("Soltou a tecla: " + event.keyCode);
}
function pressionadoTecla(event) {
	console.log("Pressionando a tecla: " + event.keyCode);
}
function soltouTeclaShift(event) {
	if(event.altKey == true)
	console.log("Apertou alguma tecla com ctrl");
}
