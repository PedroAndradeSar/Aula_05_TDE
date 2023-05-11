const express = require("express")

const server = express()
server.use(express.json()); // serve para dizer " o server ira se comunicar por json"

server.get("/health", (req, res) => { // o /health é usando por convernsao, toda vez que o get/health for solicitado ele ira fazer uma requisição para ver se o servidor esta sendo utilizado, ele ira retornar um res.json que vai retornar se esta rodando ou não.
    res.json({
        status: "Rodando"
    })
})

let listaDeTarefas = [
    {
        "id": 1,
        "name": "Comprar leite",
        "description": "Ir no mercado da esquina e comprar leite",
        "isDone": false //tradução é feito:
    },
    {
        "id": 2,
        "name": "Estudar",
        "description": "Ir ao curso e aprender coisas novas",
        "isDone": true
    },
    {
        "id": 3,
        "name": "Trabalhar",
        "description": "Ir ao trabalho",
        "isDone": false
    },
    {
        "id": 4,
        "name": "Dormir",
        "description": "Deitar na cama e dormir",
        "isDone": false
    }
]

server.get("/tasks", (req, res) => { //mostra a resposta de todo o array json
    res.json({
        listaDeTarefas
    })

})
server.post("/tasks", (req, res) => {
    const novaTarefa = {
        id: listaDeTarefas.length +1,
        name: req.body.name, //req = usa para fazer a pegar a requisição, o body =  corpo do json, e o nome = a vareavel que sera atribuida
        description: req.body.description,
        isDone: req.body.isDone
    }
    listaDeTarefas.push(novaTarefa) //aqui é usado o push para fazer o incremento da tarefa
    res.json({
        listaDeTarefas
    })
})
server.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const listaDeTarefa = listaDeTarefas.find((lista) => {
        return lista.id === id;
    })
    if (!listaDeTarefa) {
        return res.status(404).json({message: "lista de tarefas not found"});
    }
    listaDeTarefa.name = req.body.name;
    listaDeTarefa.description = req.body.description;
    listaDeTarefa.isDone = req.body.isDone;
    res.json({
        listaDeTarefas
    })
})
server.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    listaDeTarefas = listaDeTarefas.filter((listaDeTarefa) => {
        return listaDeTarefa.id !== id;
    })
    res.status(204).send();
})

//porta para funcionar no localhost
const port = 8080;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});