
const Movie = require("./movie_table");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
};

exports.update = async (movieObj) => {
    try {
        await Movie.update(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.delete = async (movieObj) => {
    try {
        await Movie.destroy(movieObj);
    } catch (error) {
        console.log(error)
    }
};