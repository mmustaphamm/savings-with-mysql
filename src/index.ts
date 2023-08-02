import { AppDataSource } from "./data-source"
import express, { Application } from "express"
import * as dotenv from 'dotenv'
import morgan from 'morgan'




AppDataSource.initialize().then(async () => {
const app:Application = express()
app.use(express.json())
app.use(morgan('dev'))

dotenv.config()


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT} `)
})

}).catch(error => console.log(error))
