var BASE_URL = "http://192.168.1.5:8888/sinf/webapp/";
var sinfapp = sinfapp || {};

$(document).ready(function(){
    console.log("document is ready!");

    new FastClick(document.body);

    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
	
	$('#div_formSearch #formSearch').submit(function()
	{
		// Tratar da encomenda
		var codEncomenda = $('#formSearch [name=codEncomenda]').val();
		if(codEncomenda == "")
		{
			codEncomenda = "none";
		}
		
		// Tratar da data de inicio
		var dataInit = $('#formSearch [name=dateInit]').val();
		if(dataInit == "")
		{
			dataInit = "none";
		}
		
		// Tratar da data de fim
		var dataFinal= $('#formSearch [name=dateEnd]').val();
		if(dataFinal == "")
		{
			dataFinal = "none";
		}
		
		// Tratar do preco
		var preco = $('#formSearch [name=price]').val();
		if(preco == "")
		{
			preco = "none";
		}
		
		// Tratar dos artigos
		var artigos = "";
		
		if(document.getElementById("rosas").checked)
		{
			artigos = "Rosas";
		}
		if(document.getElementById("tulipas").checked)
		{
			if(artigos == "")
			{
				artigos = "Tulipas";
			}
			else
			{
				artigos = artigos + "_" + "Tulipas";
			}
		}
		if(document.getElementById("alecrim").checked)
		{
			if(artigos == "")
			{
				artigos = "Alecrim";
			}
			else
			{
				artigos = artigos + "_" + "Alecrim";
			}
		}
		if(document.getElementById("tesoura").checked)
		{
			if(artigos == "")
			{
				artigos = "Tesoura de Podar";
			}
			else
			{
				artigos = artigos + "_" + "Tesoura de Podar";
			}
		}
		if(document.getElementById("adubo").checked)
		{
			if(artigos == "")
			{
				artigos = "Adubo Floral";
			}
			else
			{
				artigos = artigos + "_" + "Adubo Floral";
			}
		}
		if(document.getElementById("criacao").checked)
		{
			if(artigos == "")
			{
				artigos = "Criação de Arranjos Florais";
			}
			else
			{
				artigos = artigos + "_" + "Criação de Arranjos Florais";
			}
		}
		
		if(artigos == "")
		{
			artigos = "none";
		}
		
		
		// Tratar da morada
		var morada = $('#formSearch [name=address]').val();
		if(morada == "")
		{
			morada = "none";
		}
		
		// Tratar da quantidade
		var quantAux = $('#formSearch [name=quantidade]').val();
		if(quantAux == "")
		{
			quant = "none";
		}
		else
		{
			quant = "" + quantAux + "";
		}
		
		var search = codEncomenda + "___" + dataInit + "___" + dataFinal + "___" + artigos + "___" + preco + "___" + morada + "___" + quant;
		alert(search);
	});

    // sinfapp.ui = {
    //     sidebar_btns: $('#features ul > .sidebar-btn'),
    //     active_tbody: $('#in_progress .table tbody'),
    //     history_tbody: $('#history .table tbody'),
    //     package_detail: $('#package-detail')
    // };

    // trying an ajax request for our RESTful API
    // $.getJSON(BASE_URL+'api/encomendas/1', function(data){
    //     //console.log(data);
    // });
});

function narrowResults(input) {
    var text = $(input).val().trim().toLowerCase();

    $('.package-id').each(function(){
        if(text === '') {
            $(this).parent().show();
        } else {
            if($(this).text().toLowerCase().indexOf(text) == -1) {
                $(this).parent().hide();
            } else {
                $(this).parent().show();
            }
        }
    });
}

