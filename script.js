function verificarEncriptar() {
    let text = document.getElementById('text').value;
    let result = encrypt(text);
    document.getElementById('result').innerText = result;
    document.getElementById('resultMessage').innerText = result ? "" : "Ningún mensaje fue encontrado";
}

function verificarDesencriptar() {
    let text = document.getElementById('text').value;
    let result = decrypt(text);
    document.getElementById('result').innerText = result;
    document.getElementById('resultMessage').innerText = result ? "" : "Ningún mensaje fue encontrado";
}

function encrypt(text) {
    const substitutions = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return text.split('').map(char => substitutions[char] || char).join('');
}
function resizeInput() {
    const input = document.getElementById('text');
    input.style.width = input.value.length + "ch"; // Dynamically adjust width based on input length
}
function decrypt(text) {
    const substitutions = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return Object.keys(substitutions).reduce((acc, key) => {
        return acc.split(key).join(substitutions[key]);
    }, text);
}

function copiarTexto() {
    let resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
