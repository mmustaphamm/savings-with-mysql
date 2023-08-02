import { AppDataSource } from "./data-source"
import * as express from "express"
import * as dotenv from 'dotenv'
import * as morgan from 'morgan'
import payinROUTER from './routes/PayinsRoute'




AppDataSource.initialize().then(async () => {
const app: express.Application = express()
app.use(express.json())
app.use(morgan('dev'))
dotenv.config()

app.use('/api', payinROUTER)


app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT} `)
})

}).catch(error => console.log(error))
