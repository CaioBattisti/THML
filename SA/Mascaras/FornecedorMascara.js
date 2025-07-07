// Função genérica
function mascara(o, f) {
    let objeto = o;
    let funcao = f;
    setTimeout(function () {
        objeto.value = funcao(objeto.value);
    }, 1);
}

// Telefone: (XX) XXXXX-XXXX
function Telefone(valor) {
    valor = valor.replace(/\D/g, ""); 
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");
    return valor;
}

// Letras e espaços
function ApenasLetras(valor) {
    return valor.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

// Email simples: remove espaços e lowercase
function EmailMascara(valor) {
    valor = valor.replace(/\s/g, "");
    return valor.toLowerCase();
}

// Valida email antes de enviar
function validarEmail() {
    const email = document.querySelector('#Email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido (ex: exemplo@gmail.com)");
        return false;
    }
    return true;
}
