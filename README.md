

<h1>Projeto Loja</h1>

<h2> Estrutura Básica </h2>
    <ol>
        <li>Criando toda a estrutura básica de funcionamento.</li>
        <li>Tentativa de uso do padrão de projeto MVC.</li>
        <li>Criando rotas para testar o funcionamento.</li>
        <li>Crud básico criado.</li>
        <li>Tratando as informações.</li>
    </ol>

<h2>Problemas</h2>
    <h3>Resolvidos</h3>
    <ul>
        <li>Variáveis de ambiente erradas, causando erro de conexão com o banco de dados</li>
        <li>Dados do CPF nulos</li>
        <li>Tratamento de retorno de informações</li>
    </ul>

<h3>Atuais</h3>
    <p>Criar a interação entre as tabelas, procurando a melhor forma de fazer isso</p>

<h2>Tratamentos Necessários</h2>
    <h3>Tratamento 1</h3>
    <p><strong>Descrição:</strong> Tratar a rota de busca por ID para que ela não retorne um array vazio</p>
    <p><strong>Requisitos:</strong> Entender melhor o fluxo de aplicação e retorno de dados</p>

<h2>Implementações</h2>
    <ul>
        <li>Criar interação entre as tabelas, procurando a melhor forma de fazer isso</li>
        <li>Implementar roteamento para o front end</li>
        <li>Refatorar o código</li>
    </ul>

<h2>Boas Práticas e Aprendizado</h2>
    <p>Para requisições do tipo GET, a melhor forma de acesso é através do:</p>
    <pre><code>const { id } = req.query;</code></pre>


