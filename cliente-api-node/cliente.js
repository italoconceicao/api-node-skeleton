const axios = require('axios');
const URL_BASE = 'http:localhost:8080/api';

async function obterTarefas() {
    try {
        const response = await axios.get(`${URL_BASE}/tarefas`);
        return response.data;
    } catch (error) {
        console.log('Erro ao obter tarefas:', error);
    };
};

async function criarTarefa(descricao) {
    try {
        const response = await axios.post(`${URL_BASE}/tarefas`, { descricao });
        return response.data;
    } catch (error) {
        console.log('Erro ao criar tarefa:', error);
    };
    
};

async function atualizarTarefa(id, descricao) {
    try {
        const response = await axios.put(`${URL_BASE}/tarefas/${id}`, { descricao });
        return response.data;
    } catch (error) {
        console.log('Erro ao atualizar tarefa:', error);
    };
};

async function excluirTarefa(id) {
    try {
        const response = await axios.delete(`${URL_BASE}/tarefas/${id}`);
        return response.data;
    } catch (error) {
        console.log('Erro ao excluir tarefa:', error);
    };
};

module.exports = { obterTarefas, criarTarefa, atualizarTarefa, excluirTarefa}