let quantidade = document.getElementById("QUANTIDADE");
let btn_menos = document.getElementById("MENOS");
let btn_mais = document.getElementById("MAIS");
let quantidade_atual

btn_mais.addEventListener('click', function(){
     quantidade_atual = parseInt(quantidade.innerHTML);
    quantidade.innerHTML = quantidade_atual + 1;
});

btn_menos.addEventListener('click', function(){
    quantidade_atual = parseInt(quantidade.innerHTML);

    if (quantidade_atual <= 0){
        quantidade.innerHTML = quantidade_atual = 0;
    } else{ 
        quantidade.innerHTML = quantidade_atual - 1;
    }
   
})