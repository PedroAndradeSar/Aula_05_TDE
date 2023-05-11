TDE 10/05/23

Crie um servidor de lista de tarefas (to-do list) utilizando o framework Express.js (Pode ser utilizado o mesmo configurado na tarefa passada).
A aplicação deve permitir que os usuários cadastrem, editem e excluam tarefas.
A aplicação deve ter as seguintes rotas:
-   GET /tasks: exibe a lista de tarefas cadastradas.
-   POST /tasks: cria uma nova tarefa.
-   PUT /tasks/:id: atualiza uma tarefa existente.
-   DELETE /tasks/:id: exclui uma tarefa existente.
Os dados das tarefas serão armazenados em memória (em um array.. igual feito na aulaLinks to an external site..)
Uma tarefa contem:
- Id
- nome
- descrição
- isDone
ex: 
{
    "id": 1,
    "name": "Comprar leite",
    "description": "Ir no mercado da esquina e comprar leite",
    "isDone": false
}
Entregar repositorio no github
/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
instalado express e nodemon usar os comandos 
npm init
npm install express
link => https://expressjs.com/pt-br/starter/installing.html

nodemon
npm install nodemon --dev
após isto no packege.json na parte "scripts" fazer as seguintes configurações:
"dev":"nodemon index.js",
"start": "node index.js"'
