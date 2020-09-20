document.addEventListener("DOMContentLoaded", function(event) {
	var data_destino = new Date(2020, 09 - 1, 22, 20, 01, 00, 0);
	iniciarContador(data_destino);
});

function exibirModal(){
	$('#depoimentoModal').modal('show');
}

function depoimentoVideo(titulo, id_video) {
	$('#depoimentoModal_titulo').html(titulo);
	var linkVideo = "<iframe src='https://www.youtube.com/embed/" + id_video
		+ "?rel=0&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>";
	$('#depoimentoModal_video').html(linkVideo);
	$('#depoimentoModal').modal('show');
}