
import "reflect-metadata";
import { DataSource } from 'typeorm'
import { Cliente } from "../app/models/cliente";

 export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin", // campo vazio para senha em branco
    database: "agenda",
    entities: [
        Cliente
    ],
    logging: true,
    synchronize:true
})
 
