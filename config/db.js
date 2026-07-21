const mongoose = require('mongoose');

mongoose.connect('mongodb://parekhmegh155_db_user:Cookie11@ac-ygaqivb-shard-00-00.fa6kttj.mongodb.net:27017,ac-ygaqivb-shard-00-01.fa6kttj.mongodb.net:27017,ac-ygaqivb-shard-00-02.fa6kttj.mongodb.net:27017/?ssl=true&replicaSet=atlas-v7slvo-shard-0&authSource=admin&appName=admin-management');

const db = mongoose.connection;

db.once('open',(err) =>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('DATABASE CONNECTION SUCCESFULLY');
});

module.exports = db;