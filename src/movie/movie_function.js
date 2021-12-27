
const { where } = require("../../../MongooseProject/src/movie/movie.model");
const Movie = require("./movie_table");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
};

exports.add_Multiple_Movie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.bulkCreate([movieObj])
    } catch (error) {
        console.log(error)
    }
};

exports.find = async (movieObj) => {
    try {
    await Movie.findOne({movieObj});
    } catch (error) {
        console.log(error)
    }
};


exports.update = async (movieObj) => {
    try {
    await Movie.update({movieObj}, {where: {movieObj}});
    } catch (error) {
        console.log(error)
    }
};

exports.deleted = async (movieObj) => {
    try {
        await Movie.destroy({where: {movieObj}});
    } catch (error) {
        console.log(error)
    }
};

