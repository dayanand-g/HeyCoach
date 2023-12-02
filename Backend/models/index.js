const dbConfig = require('../config/dbConfig')   // importing the dbConfig file here   --imp

const {Sequelize, DataTypes} = require('sequelize') // importing sequelize   --v-imp

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
    }
)

// authentication..

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize   // constructor
db.sequelize = sequelize   // Instance

db.hotels = require('./hotelsModel.js')(sequelize, DataTypes)

// every time we ran the server and the data will be remain same (false)

db.sequelize.sync({force: false})
.then(() => {
    console.log('Re-sync Done!!');
})

module.exports = db
