import "reflect-metadata"
import { DataSource } from "typeorm"
import { Payins } from "./entity/Savings"
import { Collection } from "./entity/Collections"
import { Webhook } from "./entity/Webhooks"
import { Partner } from "./entity/Partner"
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
    entities: [Payins, Collection, Webhook, Partner],
    migrations: [],
    subscribers: [],
})