const express = require('express')
const app = express()
const cors = require('cors')

const port = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        token: '123re'
    })
})

app.listen(port, (err) => {
    if(err) console.log('Ocurrio un error')

    console.log('Servidor escuchando')
})