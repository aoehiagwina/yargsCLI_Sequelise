const Movie = require("./movie_table");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync();
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error)
    }
}