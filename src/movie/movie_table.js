const {DataTypes} = require("sequelize");
const  sequelize = require("../db/connection");

const Movie = sequelize.define("Movie",{
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    actor: {
        type: DataTypes.STRING,
        validate: {
            is: ["[a-z]", 'i'],
            max: 28
        }
    },
    rating: {
        type: DataTypes.NUMBER
    }
});

module.exports = Movie;