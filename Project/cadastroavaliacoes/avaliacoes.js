var controle = 1;
var lista;

$.ajaxSetup({
    headers: {"Authorization": "teste4logic"}
});

function listarClientes(){
    lista = getClientes();
    var indice = 0;
    for(x in lista){
        $(".lista").append($('<option>', {
            value: indice,
            text: lista[x].name
        }));
        indice++;
    }   
    
};

function cadastrarAvaliacao(){
    var dataA = $("#data")[0].value;
    var customers = $("#lista").val();
    console.log(customers);
}

$(document).ready(function(){
    var lista = getClientes();
    listarClientes();
    
    $(".btn").click(function(){
        if(controle == 1){
            $(".navbar").css("display", "block");
            $(".navbar").css("position", "absolute");
            $(".navbar").css("padding-top", "25px");
            $(".navbar").css("height", "150px");
            $(".text").css("display", "none");
            $(".btn").css("display", "none");
            controle = 0; 
        }else{
            controle = 1;
        }
    });
    
    $(".navbar").click(function(){
        if(controle==0){
            $(".navbar").css("display", "none");
            $(".btn").css("display", "block");
            controle = 1;
        }else{
            controle = 0;
        }
    });

    $("#main, form").submit(function(){
        
    });

});

