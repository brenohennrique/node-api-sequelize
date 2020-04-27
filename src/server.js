// dependencias
import express from 'express'
import './database'
require('dotenv').config()

// rotas
import routes from './routes'

export class Server {
  app = express()
  port = process.env.PORT

  setupConfig () {
    this.app.use(express.json())
  }

  startup() {
    this.setupConfig()
    this.setupRoutes()

    this.app.listen(this.port)
  }

  setupRoutes() {
    this.app.use('/v1', routes)
  }
}
