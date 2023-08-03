Este é um projeto de chat simples desenvolvido por brkdev2 ([Github](https://github.com/brkdev2/)) usando HTML, CSS e JavaScript. Ele consiste em uma aplicação web que permite enviar e receber mensagens em tempo real, utilizando uma API RESTful para armazenar e recuperar as mensagens.

Recursos
Envio de mensagens em tempo real.
Comando /clear para limpar o chat.
Layout moderno e responsivo.
Exibição da hora de envio das mensagens no fuso horário GMT-3.
Nomes de usuários personalizados gerados automaticamente.

Instalação
Para utilizar o chat em sua máquina local, siga os passos abaixo:

Clone o repositório para sua máquina local:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

npm install mysql2
npm install mysql2 express

Crie um banco de dados chamado chat ou altere por um nome de sua preferencia e importe a tabela de mensagens no banco de dados

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
chatmessages

Use node chat.js para iniciar em seu localhost:3000

Agora você pode utilizar o chat, enviar e receber mensagens em tempo real e experimentar os recursos disponíveis.

Espero que este chat simples possa ser útil para você em seus projetos! Se tiver alguma dúvida ou precisar de ajuda adicional, sinta-se à vontade para entrar em contato. Bom desenvolvimento!
