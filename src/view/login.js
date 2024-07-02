function verificacao() {
    let formulario = document.getElementById('FORMULARIO');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let nome = document.getElementById('nome').value;
        let senha = document.getElementById('senha').value;

        let dado = {
            nome: nome,
            senha: senha
        };

        let jsonDados = JSON.stringify(dado);
        console.log(jsonDados);

        fetch('http://localhost:3000/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonDados
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao verificar os dados');
            }
            return response.json(); 
        })
        .then((data) => {
            console.log('Resposta do servidor:', data);
            window.location.href = 'http://localhost:3000/home';
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error);
        });
    });
}

verificacao();
