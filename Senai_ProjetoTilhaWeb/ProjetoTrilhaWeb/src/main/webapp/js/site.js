function validaFaleConosco() {
    /*    if (document.frmfaleconosco.txtnome.value == "") {
            alert("Preecha o campo Nome.");
            document.frmfaleconosco.txtnome.focus();
            return false;
        }
    */
    var nome = document.frmfaleconosco.txtnome.value
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome correntamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    /*if (document.frmfaleconosco.txtfone.value == "") {
        alert("Preencha o campo Telefone");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }*/

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente.");
        document.frmfaleconosco.txtfone.focus();
        return false;
    }


    if (document.frmfaleconosco.txtemail.value == "") {
        alert("Preencha o campo E-mail");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if (document.frmfaleconosco.txacomentario.value == "") {
        alert("Preencha o campo Comentario");
        document.frmfaleconosco.txacomentario.focus();
        return false;
    }
}

function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");
    if (motivo == "PR") {
        var select = document.createElement("select");

        select.setAttribute("name", "selproduto");

        var option = document.createElement("option");

        option.setAttribute("value", "FR");

        var texto = document.createTextNode("Freezer");

        option.appendChild(texto);

        select.appendChild(option);

        var option = document.createElement("option");

        option.setAttribute("value", "GE");

        var texto = document.createTextNode("Geladeira");

        option.appendChild(texto);

        select.appendChild(option);

        elemento.appendChild(select);

    } else {
        if (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    }
}/* Fim de verificação de fale conosco*/

// assim que o documento HTML for carregado por completo ....
$(document).ready(function(){
    //carrega cabeçalho,menu e rodape aos respectivos locais
    $("header").load("/ProjetoTrilhaWeb/pages/general/cabecalho.html");
    $("nav").load("/ProjetoTrilhaWeb/pages/general/menu.html");
    $("footer").load("/ProjetoTrilhaWeb/pages/general/rodape.html");
});


