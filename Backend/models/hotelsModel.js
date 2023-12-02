module.exports = (sequelize, DataTypes) => {

    const hotels = sequelize.define("hotels", {
        name: {
            type: DataTypes.TEXT,
        },
        address: {
            type: DataTypes.TEXT
        },
        contact: {
            type: DataTypes.TEXT
        },
    })

    return hotels

}