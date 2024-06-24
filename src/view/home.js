
function verificacao(){

    let formulario = document.getElementById('FORMULARIO');

    formulario.addEventListener('submit',(event) => {
        event.preventDefault

        let nome = document.getElementById('nome');
        let senha = document.getElementById('senha');

        console.log(nome);
        console.log(senha);


    })
}