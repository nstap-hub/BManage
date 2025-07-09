import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send(('Bmanage backend Running'))
})

app.listen(PORT,()=>{
    console.info(`server express running in port :${PORT}`)
})
