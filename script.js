//tema

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');   

});

//contato

const formulario = document.getElementById('contatoForm');
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (!formulario.checkValidity()) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    mensagemSucesso.style.display = 'block';

    formulario.reset();
});

// ... (código existente)

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validação personalizada
    if (!validarNome(nome.value) || !validarEmail(email.value)) {
        // Exibir mensagens de erro específicas
        return;
    }

    // Envio assíncrono com AJAX
    fetch('seu_script_php.php', {
        method: 'POST',
        body: new FormData(formulario)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // Exibir mensagem de sucesso personalizada com base na resposta do servidor
        mensagemSucesso.textContent = data;
        mensagemSucesso.classList.add('success');
        formulario.reset();
    })
    .catch(error => {
        // Exibir mensagem de erro personalizada
        console.error('Error:', error);
        mensagemErro.textContent = 'Ocorreu um erro ao enviar o formulário.';
        mensagemErro.classList.add('error');
    });
});