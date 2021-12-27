require("./db/connection");
const yargs = require("yargs");
const Movie = require("./movie/movie_table");

const { addMovie } = require("./movie/movie_function");
const { find } = require("./movie/movie_function");
const { update } = require("./movie/movie_function");
const { deleted } = require("./movie/movie_function");
const { add_Multiple_Movie } = require("./movie/movie_function");

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

        else if (args.add_bulk) {
            const movieObj1 = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            const movieObj2 = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await add_Multiple_Movie([movieObj1,movieObj2]);
            console.log("Bulk added");
        }

        else if (args.find) {
            const movieObj = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await find(movieObj);
            console.log("Consoled");

        }
//Update values
        else if (args.update) {
            const movieObj = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await update(movieObj);
            console.log("updated");
        }

        else if (args.del) {
            const movieObj = {
                title: args.title,
                actor: args.actor,
                rating: args.rating
            };
            await deleted(movieObj);
            console.log("deleted");
        }

        else {
            console.log("Incorrect command");

        }
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);