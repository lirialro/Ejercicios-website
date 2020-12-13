const { Movie } = require("./classMovie");
var myLib = require ("./classMovie");

var classMovie_1 = require("./classMovie");
var movie1 = new classMovie_1.Movie("Titac", 1997, "EEUU", "Drama");
var movie2 = new classMovie_1.Movie("The Imitation Game", 2014, "EEUU", "Biopic");
console.log("Esta es la primera pelicula: " + "\n");
movie1.toStringMovie();
console.log("Esta es la segunda pelicula: " + "\n");
movie2.toStringMovie();
