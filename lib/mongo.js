const { MongoClient } = require('mongodb');
const { config } = require('../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+src://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLig {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        if (!MongoLig.connection) {
            MongoLig.connection = new Promise.resolve((resolve, reject) => {
                this.client.connection(err => {
                    if (err) {
                        reject(err)
                    }
                    
                    console.log('Connect successfully to mongo db');
                    resolve(this.client.db(this.dbName))
                })
            })
        }

        return MongoLig.connection
    
    }
}

module.exports = MongoLig
