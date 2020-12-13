const { Imdb } = require("./classImdb");
var myLib = require ("./classImdb");
const { Movie } = require("./classMovie");
var myLib = require ("./classMovie");
const { Professional } = require("./classProfessional");
var myLib = require ("./classProfessional");

var movie1 = new Movie("Titanic", 1997, "EEUU", "Drama");
var movie2 = new Movie("The Imitation Game", 2014, "EEUU", "Biopic");
var prueba1 = new Imdb ([movie1, movie2]);

prueba1.printAllMovies();


