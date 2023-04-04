const express = require('express')
const cors = require('cors')

const app = express()

var corOption = {
    origin: 'https://localhost:4000'
}

//rotas

const router = require('./routes/productRouter.js')

// middlewares

app.use(cors(corOption))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.use(router)
// api test

app.get('/', (req, res) => {
    res.json({ message: 'Ola mundo'})
})

// iniciando server

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
})

