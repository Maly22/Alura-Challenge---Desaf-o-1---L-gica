// Función para verificar mayúsculas y mostrar alerta
function verificarMayusculas() {
    const textarea = document.getElementById('text');
    const texto = textarea.value;

    if (/[A-Z]/.test(texto)) {
        showCustomAlert("No se permiten letras mayúsculas. Por favor, use solo letras minúsculas.");
        textarea.value = texto.toLowerCase();
    }
}

// Función para ajustar la altura del textarea automáticamente
function adjustTextareaHeight() {
    const textarea = document.getElementById('text');
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

// Función para encriptar texto
function verificarEncriptar() {
    let text = document.getElementById('text').value;
    let result = encrypt(text);
    actualizarResultado(result);
}

// Función para desencriptar texto
function verificarDesencriptar() {
    let text = document.getElementById('text').value;
    let result = decrypt(text);
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');
    const copyButton = document.getElementById('copyButton');
    const imageContainer = document.querySelector('.imagen__container');
    const defaultText = document.querySelector('.presentacion__texto__derecho2');

    resultElement.innerText = result; 

    if (result) {
        resultContainer.style.display = 'flex'; 
        resultMessage.style.display = 'none'; 
        copyButton.style.display = 'block'; 
        imageContainer.style.display = 'none'; 
        defaultText.style.display = 'none'; 
    } else {
        resultContainer.style.display = 'none'; 
        resultMessage.style.display = 'block'; 
        copyButton.style.display = 'none'; 
        imageContainer.style.display = 'flex'; 
        defaultText.style.display = 'block'; 
    }
}


// Función para actualizar el resultado y manejar la visibilidad de elementos
function actualizarResultado(result) {
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');
    const copyButton = document.getElementById('copyButton');
    const imageContainer = document.querySelector('.imagen__container');
    const defaultText = document.querySelector('.presentacion__texto__derecho2');

    resultElement.innerText = result;

    if (result) {
        resultContainer.style.display = 'flex'; 
        resultMessage.style.display = 'none'; 
        copyButton.style.display = 'block'; 
        imageContainer.style.display = 'none'; 
        defaultText.style.display = 'none'; 
    } else {
        resultContainer.style.display = 'none'; 
        resultMessage.style.display = 'block'; 
        copyButton.style.display = 'none'; 
        imageContainer.style.display = 'flex'; 
        defaultText.style.display = 'block'; 
    }
}

// Función para encriptar
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

// Función para desencriptar
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

// Función para copiar texto
function copiarTexto() {
    let resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        showCustomAlert('Texto copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Función para mostrar una alerta personalizada
function showCustomAlert(message) {
    const alertElement = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    alertMessage.innerText = message;
    alertElement.style.display = 'flex'; 
}

// Ocultar la alerta personalizada
document.getElementById('closeAlert').addEventListener('click', () => {
    document.getElementById('customAlert').style.display = 'none'; 
});

// Asignación de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Eventos para encriptar y desencriptar
    document.getElementById('encryptButton').addEventListener('click', verificarEncriptar);
    document.getElementById('decryptButton').addEventListener('click', verificarDesencriptar);

    // Evento para copiar texto
    document.getElementById('copyButton').addEventListener('click', copiarTexto);
    document.getElementById('text').addEventListener('input', function() {
        const textarea = this;
        
        if (textarea.scrollHeight > parseInt(window.getComputedStyle(textarea).maxHeight)) {
            textarea.value = textarea.value.slice(0, -1); // Remove the last character entered
        }
    });
    
    // Evento para verificar mayúsculas y ajustar altura del textarea
    const textArea = document.getElementById('text');
    textArea.addEventListener('input', () => {
        verificarMayusculas();
        adjustTextareaHeight();
    });
});




