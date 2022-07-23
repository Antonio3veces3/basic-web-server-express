const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usersPath = '/api/users';
        this.connectDB();
        this.middleware();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth.routes'));
        this.app.use(this.usersPath, require('../routes/users.routes'));
        this.app.use((req, res) => {
            res.status(404).send({
                "error": "Page not found"
            })
        })
    }

    listener() {
        this.app.listen(this.port, () => {
            console.log('Listening on ', this.port);
        })
    }
}

module.exports = Server;