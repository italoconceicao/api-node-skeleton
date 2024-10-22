const express = require('express');
const app = express();
const tarefaRoutes = require('./routes/tarefaRoutes')
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', tarefaRoutes);

app.get('/', (req,res) => {
    res.send("Bem-vindo a API de tarefas!");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando da porta ${PORT}`)
});