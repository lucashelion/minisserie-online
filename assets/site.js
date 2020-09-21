document.addEventListener("DOMContentLoaded", function(event) {
	var data_destino = new Date(2020, 09 - 1, 22, 20, 01, 00, 0);
	iniciarContador(data_destino);
});

function liberacaoCPL() {
	var dataCPL2 = new Date(2020, 10 - 1, 12);
	var dataCPL3 = new Date(2020, 10 - 1, 14);
	var dataCPL4 = new Date(2020, 10 - 1, 17 + 1);

	if (stVideoLiberado(dataCPL2)) {
		document.getElementById('tituloCPL2').innerHTML = 'Vídeo #2: LIBERADO!!';
		//$('#linkInativoCPL2').hide();
		//$('#linkAtivoCPL2').fadeIn();
	}
	if (stVideoLiberado(dataCPL3)) {
		document.getElementById('tituloCPL3').innerHTML = 'Vídeo #3: NO AR!!!';
		//$('#linkInativoCPL3').hide();
		//$('#linkAtivoCPL3').fadeIn();
	}
	if (stVideoLiberado(dataCPL4)) {
		document.getElementById('tituloCPL4').innerHTML = 'Inscrições Abertas!';
		//$('#linkInativoCPL4').hide();
		//$('#linkAtivoCPL4').fadeIn();
	}
}
function stVideoLiberado(dtComparacao) {
	var hoje = new Date();
	if (dtComparacao.getFullYear() == hoje.getFullYear() && dtComparacao.getMonth() == hoje.getMonth() && dtComparacao.getDate() == hoje.getDate())
		return true;
	else if (dtComparacao.getFullYear() < hoje.getFullYear())
		return true;
	else if (dtComparacao.getFullYear() == hoje.getFullYear() && dtComparacao.getMonth() < hoje.getMonth())
		return true;
	else if (dtComparacao.getFullYear() == hoje.getFullYear() && dtComparacao.getMonth() == hoje.getMonth() && dtComparacao.getDate() < hoje.getDate())
		return true;
	else
		return false;
}

// Usa jQuery e Bootstrap
document.addEventListener("mouseleave", exitPopup);

function exitPopup(e) {
	var st_notpopup = document.getElementById('st_notpopup').value;
	if (st_notpopup == 0 || st_notpopup == '0') {
		document.getElementById('st_notpopup').value = '1';
		$('#exitModal').modal('show');
	}
}

function depoimentoVideo(titulo, id_video) {
	$('#depo-modal-titulo').html(titulo);
	var linkVideo = 'https://www.youtube.com/embed/' + id_video;
	$('#depo-modal-video').attr('src', linkVideo);
	$('#depoimentoModal').modal('show');
}
