const path = require('path')
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')

const app = express()

const path_frontend = path.resolve(__dirname, 'frontend', 'build')

const TOKEN_PRIVADO = 'k4d2956bd531ab61d44f4fa07304b20e13913815'

app.use(cors())

app.get('/api/:dni', (req,res) => {
	const dni = req.params.dni
	fetch('https://dni.optimizeperu.com/api/prod/persons/'+dni, {
		headers: {
			'Content-Type': 'application/json',
			'authorization': 'token ' + TOKEN_PRIVADO
		}
	})
		.then(_res=>_res.json())
		.catch(err=>{
			console.error(err)
			// res.send(err)
		})
		.then(_res=>{
			// res.json(_res)
		})
		.finally(()=>res.json({ nombre: "Darwin", dni }))
})

app.use(express.static(path_frontend))

app.get('*', (_req, res) => {
	res.sendFile(path.resolve(path_frontend, 'index.html'))
})

app.listen(3030, ()=>console.log('Running in 3030'))