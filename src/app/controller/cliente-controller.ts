// src/controllers/clienteController.ts
import { AppDataSource } from '../../database/data-source';
import { Cliente } from '../models/cliente';
// Importa a instância do DataSource que gerencia a conexão com o banco de dados;
// Função para inserir um novo cliente no banco de dados
export async function inserirCliente(nome: string, email: string, telefone?: string) {
    // Obtém o repositório da entidade Cliente a partir da instância do DataSource
    const clienteRepository = AppDataSource.getRepository(Cliente);
    // Cria uma nova instância de Cliente com os dados fornecidos
    const novoCliente = clienteRepository.create({ nome, email, telefone });
    // Salva o novo cliente no banco de dados
    await clienteRepository.save(novoCliente);
    // Mensagem de confirmação de que o cliente foi inserido
    console.log('Cliente inserido:', novoCliente);
}

// Função para buscar todos os clientes do banco de dados
export async function buscarClientes() {
    // Obtém o repositório da entidade Cliente
    const clienteRepository = AppDataSource.getRepository(Cliente);
    // Busca todos os clientes no banco de dados
    const clientes = await clienteRepository.find();
    // Imprime a lista de clientes encontrada
    console.log('Clientes:', clientes);
}

// Função para buscar e atualizar clientes no banco de dados
export async function atualizarClientes(id: number, nome?: string, email?: string, telefone?: string) {
    
    // Obtém o repositório da entidade Cliente
    const clienteRepository = AppDataSource.getRepository(Cliente);
    
    // Busca o cliente com base no ID
    const cliente = await clienteRepository.findOneBy({ id: id });
    
    if (!cliente) {
        console.log(`Cliente com ID ${id} não foi encontrado.`);
        return;
    }
    
    // Atualiza os campos com os novos valores (se fornecidos)
    cliente.nome = nome || cliente.nome;
    if (telefone) {
        cliente.telefone = telefone;
    }
    
    // Salva o cliente atualizado no banco de dados
    await clienteRepository.save(cliente);

    // Imprime o cliente atualizado
    console.log('Cliente atualizado:', cliente);
}


export async  function apagarCliente(id:number){
    // Obtém o repositório da entidade Cliente
    const clienteRepository = AppDataSource.getRepository(Cliente);
    const cliente = await clienteRepository.delete({ id: id });
    if (!cliente) {
        console.log(`Cliente com ID ${id} não foi encontrado.`);
        return;
    }
      // Verifica se algum registro foi deletado
      return cliente.affected !== 0; // Retorna true se o cliente foi deletado, false caso contrário
    


}