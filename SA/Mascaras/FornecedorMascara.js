// Função genérica para aplicar máscaras em campos de formulário
function mascara(o, f) {
    // Armazena o campo (objeto HTML) e a função de máscara
    let objeto = o;
    let funcao = f;

    // Executa a função de máscara após 1 milissegundo
    setTimeout(function () {
        executaMascara(objeto, funcao);
    }, 1);
}

// Executa a função de máscara recebida sobre o valor do campo
function executaMascara(objeto, funcao) {
    objeto.value = funcao(objeto.value); // Atualiza o valor do campo com a máscara aplicada
}

// ----------------------------
// Máscara de Telefone
// Formato: (XX) XXXXX-XXXX
function Telefone(valor) {
    valor = valor.replace(/\D/g, ""); // Remove todos os caracteres que não são dígitos
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses nos dois primeiros dígitos
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2"); // Adiciona hífen entre os últimos dígitos
    return valor;
}

// ----------------------------
// Máscara para apenas letras e espaços
function ApenasLetras(valor) {
    return valor.replace(/[^a-zA-ZÀ-ú\s]/g, "");
}

// ----------------------------
// Máscara para email (remove espaços e força minúsculas)
function EmailMascara(valor) {
    valor = valor.replace(/\s/g, "");
    return valor.toLowerCase();
}

// ----------------------------
// Validação de email antes de envio
function validarEmail() {
    const email = document.querySelector('#Email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Por favor, insira um e-mail válido no formato exemplo@dominio.com");
        return false;
    }
    return true;
}
