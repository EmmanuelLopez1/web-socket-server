// DEPENDENCIES
import express from 'express'
import cors from "cors"
import http from "http"
import { Server as socketIo } from 'socket.io'
import { socketController } from '../sockets/controller.js'

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.server = http.createServer(this.app)
        this.io = new socketIo(this.server) 

        // PATHS
        const api_base_url = "/api"
        this.paths = {
        
        }
        
        // middlewares
        this.middlewares()

        // routes
        this.routes()

        // SOCKETS
        this.sockets()
    }

    async dbConnection() {
        await dbConnection()
    }

    routes() {
        // const {
        //     uploads} = this.paths

        // this.app.use(uploads, uploads_router)
    }

    middlewares() {
        this.app.use(express.static("public"))

        this.app.use(cors())
    }

    sockets(){
        this.io.on('connection', socketController)   
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log("app running on port ", this.port);
        })

    }
}


export default Server