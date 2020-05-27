//Comando para establecer la conexión

var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4'); 

var lblEcritorio1 = $('#lblEscritorio1');
var lblEcritorio2 = $('#lblEscritorio2');
var lblEcritorio3 = $('#lblEscritorio3');
var lblEcritorio4 = $('#lblEscritorio4');

var lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4 ];
var lblEscritorios = [lblEcritorio1, lblEcritorio2, lblEcritorio3, lblEcritorio4];

socket.on('estadoActual', function (data){
	actualizaHTML(data.ultimos4);
});

socket.on('ultimos4', function (data){
	
	var audio = new Audio('audio/new-ticket.mp3');
	audio.play();
	actualizaHTML(data.ultimos4);
});

function actualizaHTML (ultimos4){

	for (let i = 0; i <= ultimos4.length - 1; i++) {
		
		lblTickets[i].text('Ticket ' + ultimos4[i].numero);
		lblEscritorios[i].text('Escritorio ' + ultimos4[i].escritorio); 
	}

}