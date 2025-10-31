const { MongoClient } = require('mongodb');
require('dotenv').config();
let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(
            process.env.MONGODB_URI
        )
            .then((client) => {
                // Choose the learning_platform database
                dbConnection = client.db(process.env.MONGODB_DB);
                return cb();
            })
            .catch(err => {
                console.log(err);
                return cb(err);
            });
    },
    // Always returns the learning_platform database connection
    getDb: () => dbConnection
};
