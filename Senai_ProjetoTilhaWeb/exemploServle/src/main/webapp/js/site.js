function validaFaleConosco() {
    /*    if (document.frmfaleconosco.txtnome.value == "") {
            alert("Preecha o campo Nome.");
            document.frmfaleconosco.txtnome.focus();
            return false;
        }
    */
    var nome = document.frmfaleconosco.txtname.value
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome correntamente.");
        document.frmfaleconosco.txtname.focus();
        return false;
    }
    
     var endereco = document.frmfaleconosco.txtadress.value
    var expRegEndereco = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    if (!expRegEndereco.test(endereco)) {
        alert("Preencha o campo Endereço correntamente.");
        document.frmfaleconosco.txtadresss.focus();
        return false;
    }

   
    var fone = document.frmfaleconosco.txtphone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente.");
        document.frmfaleconosco.txtphone.focus();
        return false;
    }


}

/* Fim de verificação de fale conosco*/


