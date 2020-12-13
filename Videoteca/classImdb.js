// const { Professional } = require("./classProfessional");
// var myLib = require ("./classProfessional");
// const { Movie } = require("./classMovie");
// var myLib = require ("./classMovie");

class Imdb {
    constructor (peliculas) {
        this.peliculas = peliculas;
    }

    printAllMovies() {
        for (var i = 0; i < this.peliculas.length; i++) {

            console.log(this.peliculas[i].toStringMovie());
        }
    }
}

// module.exports = {Imdb}
