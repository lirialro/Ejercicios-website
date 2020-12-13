// const { Professional } = require("./classProfessional");
// var myLib = require ("./classProfessional");

class Movie {
    constructor (title, releaseYear, nationality, genre, picture) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = new Array(new Professional("Harrinson Ford", 78, "Male", 83, 185, "Light brown", "Hazel", "Caucasian", false, "American", 0, "Actor"), new Professional("Carrie Fisher †", 60, "Female", 47, 155, "Dark brown", "Dark brown", "Caucasian", true, "American", 0, "Actress"));
        this.nationality = nationality;
        this.director = new Professional("Richard Marquand †", 49, "Male", "unknown", "unknown", "Dark brown", "Dark brown", "Caucasian", true, "English", 0, "Director");
        this.writer = "George Lucas";
        this.plataform = "Netflix";
        this.isMCU = false;
        this.mainCharacterName = "Luke Skywalker";
        this.producer = "George Lucas";
        this.distributor = "20th Century Fox";
        this.genre = genre;
        this.picture = picture
    }

    toStringMovie () {
        console.log("Title: " + this.title + "\n" + "Release Year: " + this.releaseYear + "\n" + "Nationality: " + this.nationality + "\n" + "Genre: " + this.genre + "\n" + "\n" + "Director: " + "\n" + this.director.toStringProfessional() + "\n" + "Writer: " + this.writer + "\n" + "Plataform: " + this.plataform + "\n" + "Is MCU: " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "\n" + "Actores:" + "\n");
        for (var i = 0; i < this.actors.length; i++) {
            console.log(this.actors[i].toStringProfessional());
        }
    }
}

// module.exports = {Movie}
