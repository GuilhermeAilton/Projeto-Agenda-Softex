import { Router } from 'express'; // Importa o Router do Express
import { inserirCliente, buscarClientes,atualizarClientes,apagarCliente} from './cliente-controller'; // Importa as funções do controlador

const router = Router(); // Cria uma instância do Router

// Rota para inserir um novo cliente
router.post('/create', async (req, res) => {
    const { nome, email, telefone } = req.body; // Desestrutura os dados do corpo da requisição

    try {
        await inserirCliente(nome, email, telefone); // Chama a função para inserir o cliente
        res.status(201).send('Cliente inserido com sucesso!'); // Resposta de sucesso
    } catch (error) {
        res.status(500).send('Erro ao inserir cliente.'); // Resposta de erro
        console.error(error); // Imprime o erro no console
    }
});

// Rota para buscar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await buscarClientes(); // Chama a função para buscar clientes
        res.json(clientes); // Retorna a lista de clientes em formato JSON
    } catch (error) {
        res.status(500).send('Erro ao buscar clientes.'); // Resposta de erro
        console.error(error); // Imprime o erro no console
    }
});

// Rota para buscar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await buscarClientes(); // Chama a função para buscar clientes
        res.json(clientes); // Retorna a lista de clientes em formato JSON
    } catch (error) {
        res.status(500).send('Erro ao buscar clientes.'); // Resposta de erro
        console.error(error); // Imprime o erro no console
    }
});

router.patch('/clientes/id', async (req, res) => {
    const { id } = req.body;
    const { nome, email, telefone } = req.body;

    try {
        const clienteAtualizado = await atualizarClientes(Number(id),nome);
        res.json(clienteAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar cliente', error });
    }
});

router.delete('/delete/id', async (req, res) => {
    const { id } = req.body;

    try {
        const clienteDeletado = await apagarCliente(Number(id));
        if (!clienteDeletado) {
            res.status(401).json({message:"Cliente não encontrado"})
        } else {
            res.status(201).json({ message: 'Cliente deletado com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cliente', error });
    }
});


export default router; // Exporta o router para ser usado em outros arquivos
