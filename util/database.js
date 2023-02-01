const dotenv=require('dotenv')
dotenv.config()
const MongoClient=require('mongodb').MongoClient;
let _db;

const mongoConnect=callback=>{
    MongoClient.connect('mongodb+srv://sainadh:sainadh@mongoproject.voghkib.mongodb.net/sample?retryWrites=true&w=majority')
    .then(client => {
        console.log(client);
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

