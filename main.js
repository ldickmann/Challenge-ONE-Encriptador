const inputText = document.querySelector('.decodif__conteudo__input__campo');
const outputText = document.querySelector('.decodif__resultado__texto__paragrafo');
const btnCriptografar = document.querySelector('.decodif__btn__cript');
const btnDescriptografar = document.querySelector('.decodif__btn__descript');
const imagemResultado = document.querySelector('.decodif__resultado__img');
const tituloResultado = document.querySelector('.decodif__resultado__titulo');
const btnCopy = document.querySelector('.decodif__btn__copy');

const CHAVES_CRIPT = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

function criptografar(texto) {
    return texto.replace(/[eiaou]/g, m => CHAVES_CRIPT[m]);
}

function descriptografar(texto) {
    return texto.replace(/enter|imes|ai|ober|ufat/g, m => Object.keys(CHAVES_CRIPT).find(k => CHAVES_CRIPT[k] === m));
}

function mostrarResultado(texto) {
    outputText.textContent = texto;
    btnCopy.style.display = texto ? 'block' : 'none';

    imagemResultado.style.display = texto ? 'none' : 'block';
    tituloResultado.style.display = texto ? 'none' : 'block';
}

btnCriptografar.addEventListener('click', () => {
    const texto = inputText.value.toLowerCase();
    mostrarResultado(criptografar(texto));
});

btnDescriptografar.addEventListener('click', () => {
    const texto = inputText.value.toLowerCase();
    mostrarResultado(descriptografar(texto));
});

btnCopy.addEventListener('click', () => {
    const texto = outputText.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado!');
    }).catch(err => {
        console.error('Erro ao copiar texto:', err);
    });
})

