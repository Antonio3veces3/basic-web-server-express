const express = require('express');
const cors = require('cors');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use( cors() );
        this.app.use(express.json());
        this.app.use(express.static('public'));
        
    }

    routes() {
      this.app.use(this.usersPath, require('../routes/users.routes'));
      this.app.use((req,res)=>{
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