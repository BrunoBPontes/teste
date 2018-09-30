var controle = 1;
var lista;

function listarAvaliacoes(){
    lista = getAvaliacoes();
    for(x in lista){
        console.log(lista[x]);
        $(".box").append("<p>"+ lista[x].id +"</p>");
    }   
    
};

$(document).ready(function(){
    $(".btn").click(function(){
        if(controle==1){
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

    listarAvaliacoes();
    
});

