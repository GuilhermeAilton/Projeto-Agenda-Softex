import express from 'express'
import { AppDataSource } from './database/data-source'
import clienteRoutes from './app/controller/cliente-router'

const app = express()
const port = 3000
app.use(express.json())
// Usa as rotas de cliente para o endpoint '/clientes'
app.use('/clientes', clienteRoutes); // Todas as rotas definidas em clienteRoutes começam com '/clientes'

app.get('/', async (req, res) => {
    res.json({
        "nome":'Guilherme',
        "sobrenome": 'Ailton'
    }) 
})

//Conecão com banco de dados
AppDataSource.initialize()
    .then(() => {
        app.listen(port, () =>{console.log(`Servidor Funcionando na porta :${port}`)})
        console.log("Banco de dados inicializado")
    }).catch((error) => {
        console.error("Error na sicronização do Banco de dados: ", error)
    })


