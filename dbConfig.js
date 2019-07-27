const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://nn-database:nn0213@nn-aca-db-g06t0.mongodb.net/test?retryWrites=true&w=majority';
let db = null;

exports.connect = function (done) {
    const client = new MongoClient(url);

    client.connect(doStuffAfterConnected, { useNewUrlParser: true });

    function doStuffAfterConnected(err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Connected successfully to server");
        db = client.db("aca_database");

        if (done) {
            done();
        }
    }
}
exports.getDatabase = function () {
    return db;
}