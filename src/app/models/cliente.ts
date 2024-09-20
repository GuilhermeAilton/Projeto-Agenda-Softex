import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// src/models/Cliente.ts


@Entity('cliente') // Nome da tabela no banco de dados
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number; // Coluna ID, gerada automaticamente

    @Column()
    nome: string; // Coluna nome

    @Column()
    email: string; // Coluna email

    @Column({ nullable: true }) // Telefone pode ser nulo
    telefone?: string; // Coluna telefone
}

