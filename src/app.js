require("./db/connection");
const yargs = require("yargs");
const Movie = require("./movie/movie_table");

const {addMovie} = require("./movie/movie_function");
const {update} = require("./movie/movie_function");

const app = async (args) => {
    try {
        if (args.add) {
            const movieObj = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await addMovie(movieObj);
        }
//Update values
        if (args.update) {
            const movieObj = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await update(movieObj);
            console.log("updated");
        }

        else {
            console.log("Incorrect command");

        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);