var controle = 1;

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

    $("form").submit(function(){
        var nomeCli = $("#nome")[0].value;
        var contatoCli = $("#contato")[0].value;
        var dataCli = $("#data")[0].value;

        postCliente(nomeCli, contatoCli, dataCli);



    })
});




