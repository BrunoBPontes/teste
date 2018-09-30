//necessário incluir jquery no html

//adiciona header para comunicação com a API
$.ajaxSetup({
    headers: {"Authorization": "teste4logic"}
});

//----------------------------------------------CLIENTES---------------------------------------------------

//GET clientes
function getClientes(){
    var ret;
    $.ajax({
        type: "GET",
        url: "http://desafio4devs.forlogic.net/api/customers",
        dataType: "json",
        async: false,
        success: function(data, res, jqXHR){
            ret = data;
        }
    });
    return ret;
}

//GET cliente específico
function getCliente(id){
    var ret;
    $.ajax({
        type: "GET",
        url: "http://desafio4devs.forlogic.net/api/customers/" + id,
        dataType: "json",
        async: false,
        success: function(data, res, jqXHR){
            res = data;
        }
    });
    return res;
}

//POST clientes
function postCliente(nomeCliente, contatoCliente, dataCliente){
    var datageral = {
        "id": "x",
        "name": nomeCliente,
        "contact": contatoCliente,
        "date": dataCliente
    };

    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/customers",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        async:false,
        data: datageral,
        success: function(data, status, xhr){
            datageral = {
                "id": data.id,
                "name": nomeCliente,
                "contact": contatoCliente,
                "date": dataCliente
            };
            putCliente(datageral);
        }
    });    
}


//PUT clientes
function putCliente(dataP){
    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/customers/" + dataP.id,
        type: "PUT",
        contentType: "application/json",
        crossDomain: true,
        async:false,
        data: dataP,
        success: function(status){
            alert(status);
        }
    });
}

//DELETE cliente
function deleteCliente(id){
    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/customers/" + id,
        type: "DELETE",
        success: function(status) {
            alert("Cliente deletado");
        }

    });
}


//----------------------------------------------AVALIAÇÕES---------------------------------------------------

//GET avaliações
function getAvaliacoes(){
    var ret;
    $.ajax({
        type: "GET",
        url: "http://desafio4devs.forlogic.net/api/evaluations",
        dataType: "json",
        async: false,
        success: function(data, res, jqXHR){
            ret = data;
        }
    });

    return ret;
}

//GET avaliação
function getAvaliacao(id){
    var ret;
    $.ajax({
        type: "GET",
        url: "http://desafio4devs.forlogic.net/api/evaluations/" + id,
        dataType: "json",
        async: false,
        success: function(data, res, jqXHR){
            ret = data;
        }
    });

    return ret;
}

//POST avaliações
function postAvaliacao(dataAva, clientes){
    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/evaluations",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        crossDomain: true,
        async: false,
        data: {
            "clients": clientes,
            "date": dataAva
        },
        success: function(data, status, xhr){
            //atualiza o campo id com o id do item
            console.log(data);
            var dataE = {
                "id": data,
                "customers": clientes,
                "date": dataAva
            };
            putAvaliacao(dataE);
        }
    });
}

//PUT avaliações
function putAvaliacao(dataP){
    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/evaluations/" + dataP.id,
        type: "PUT",
        contentType: "application/json",
        crossDomain: true,
        data: dataP,
        success: function(status){
            console.log("UPDATE REALIZADO");
        }
    });
}

//DELETE avaliação
function deleteAvaliacao(id){
    $.ajax({
        url: "http://desafio4devs.forlogic.net/api/evaluations/" + id,
        type: "DELETE",
        success: function(status) {
            console.log(status + " Avaliação deletada");
        }
    });
}