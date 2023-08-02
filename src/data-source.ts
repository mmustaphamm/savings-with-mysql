import "reflect-metadata"
import { DataSource } from "typeorm"

import * as dotenv from 'dotenv'

dotenv.config()


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "savings",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})