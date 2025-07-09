import express from 'express'
import dotenv from 'dotenv'
import {pool, connectDB} from './config/db_postgre'; //se sa

dotenv.config({override:true}) //carga y sobreescribe las variables de entorno
const app = express()
const PORT = process.env.PORT ? parseInt(process.env.PORT,10):3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(('Bmanage backend Running'))
})

connectDB()
    .then(()=>{
        app.listen(PORT,()=>{
    console.info(`server express running in port :${PORT}`)
    console.info(`Accede a http://localhost:${PORT}`);
})        
    })

export default app;
