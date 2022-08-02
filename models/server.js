const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            categories: '/api/categories',
            products: '/api/products',
            users: '/api/users',
            search: '/api/search'
        }
        
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
        this.app.use(this.paths.auth , require('../routes/auth.routes'));
        this.app.use(this.paths.users, require('../routes/users.routes'));
        this.app.use(this.paths.products, require('../routes/products.routes'));
        this.app.use(this.paths.categories, require('../routes/categories.routes'));
        this.app.use(this.paths.search, require('../routes/search.routes'))
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