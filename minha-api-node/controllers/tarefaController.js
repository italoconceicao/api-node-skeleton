let tarefas = [{id: 1, descricao: 'Acordar'}, {id: 2, descricao: 'Levantar'}, {id: 3, descricao: 'Tomar Café'}];

const listarTarefas = (req, res) => {
    res.send(tarefas); //retorna a lista de tarefas como JSON
};

const criarTarefa = (req, res) => {
    const { descricao } = req.body; // Obtém a descrição da nova tarefa do corpo da requisição
    const novaTarefa = { id: tarefas.length + 1, descricao }; // Cria um objeto representando a nova tarefa
    tarefas.push(novaTarefa); // Adiciona a nova tarefa à lista de tarefas
    res.status(201).json(novaTarefa); // // Retorna a nova tarefa como JSON, com o status 201 (Created)
};

const atualizarTarefa = (req, res) => {
    const {id} = req.params; // Obtém o ID da tarefa a ser atualizada dos parâmetros da URL
    const { descricao } = req.body; // Obtém a nova descrição da nova tarefa do corpo da requisição
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id)); // Encontra o índice da tarefa na lista de tarefas
    if (index !== -1) { // Verifica se a tarefa foi encontrada
        tarefas[index].descricao = descricao; // Atualiza a descrição da tarefa
        res.status(200).json(tarefas[index]); // Retorna a tarefa atualizada
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada.' }); // Retorna um erro 404 se a tarefa não foi encontrada
    }
};

const excluirTarefa = (req, res) => {
    const {id} = req.params; // Obtém o ID da tarefa a ser atualizada dos parâmetros da URL
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if (index !== -1) {
        tarefas.splice(index, 1);
        res.status(200).json({ mensagem: 'Tarefa excluída com sucesso!'}) // Retorna uma mensagem de sucesso
    } else {
        res.status(404).json({ mensagem: 'Tarefa não encontrada.' }); 
    }
};

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    excluirTarefa
}