// const { Imdb } = require("./classImdb");
// var myLib = require ("./classImdb");
// const { Movie } = require("./classMovie");
// var myLib = require ("./classMovie");
// const { Professional } = require("./classProfessional");
// var myLib = require ("./classProfessional");

var movies = new Array();
movie1 = new Movie("El club de la lucha", 1999, "EEUU", "Drama", "https://pics.filmaffinity.com/El_club_de_la_lucha-320750671-mmed.jpg");
movie1.director = new Professional("David Fincher", 58, "Male", 83, 185, "Black", "Blue", "Caucasian", false, "American", 0, "Director", "https://upload.wikimedia.org/wikipedia/commons/6/67/David_Fincher_%282012%29_3.jpg");
movie1.actors = new Array(new Professional("Edward Norton", 51, "Male", 83, 185, "Blond", "Blue", "Caucasian", false, "American", 0, "Actor", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Edward_Norton_with_Steve_Jurvetson_%28cropped%29.jpg/330px-Edward_Norton_with_Steve_Jurvetson_%28cropped%29.jpg"), new Professional("Brad Pitt", 56, "Male", 80, 180, "Blond", "Blue", "Caucasian", false, "American", 1, "Actor", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg"));
movies.push(movie1);

movie2 = new Movie("Interstellar", 2014, "EEUU", "Drama", "https://pics.filmaffinity.com/Interstellar-366875261-large.jpg");
movie2.director = new Professional("Christopher Nolan", 50, "Male", 83, 185, "Brown", "Blue", "Caucasian", false, "English", 0, "Director", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Christopher_Nolan_Cannes_2018.jpg/300px-Christopher_Nolan_Cannes_2018.jpg");
movie2.actors = new Array(new Professional("Matthew McConaughey", 50, "Male", 83, 182, "Black", "Blue", "Caucasian", false, "American", 1, "Actor", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Sing_07_%2829144312374%29.jpg/375px-Sing_07_%2829144312374%29.jpg"), new Professional("Jessica Chastain", 43, "Female", 60, 170, "Read head", "Blue", "Caucasian", false, "American", 0, "Actress", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jessica_chastain_Cannes_2017.jpg/435px-Jessica_chastain_Cannes_2017.jpg"));
movies.push(movie2);

movie3 = new Movie("El árbol de la vida", 2011, "EEUU", "Drama", "https://pics.filmaffinity.com/El_rbol_de_la_vida-164794560-large.jpg");
movie3.director = new Professional("Terrence Malick", 76, "Male", 83, 185, "Brown", "Blue", "Caucasian", false, "American", 0, "Director", "https://upload.wikimedia.org/wikipedia/commons/f/f6/Terrence_Malick.jpg");
movie3.actors = new Array(new Professional ("Brad Pitt", 56, "Male", 80, 180, "Blond", "Blue", "Caucasian", false, "American", 1, "Actor", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/330px-Brad_Pitt_2019_by_Glenn_Francis.jpg"), new Professional("Jessica Chastain", 43, "Female", 60, 170, "Read head", "Blue", "Caucasian", false, "American", 0, "Actress", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Jessica_chastain_Cannes_2017.jpg/435px-Jessica_chastain_Cannes_2017.jpg"));
movies.push(movie3);

movie4 = new Movie("Split",2016, "EEUU","Terror","https://pics.filmaffinity.com/Fragmentado-172094905-mmed.jpg");
movie4.director = new Professional("M. Night Shyamalan", 50, "Male", 83, 185, "Black", "Black", "Indian", false, "Indian", 0, "Director", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/M._Night_Shyamalan_by_Gage_Skidmore.jpg/330px-M._Night_Shyamalan_by_Gage_Skidmore.jpg");
movie4.actors = new Array(new Professional ("James McAvoy", 41, "Male", 80, 180, "Black", "Blue", "Caucasian", false, "English", 0, "Actor", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/James_McAvoy_by_Gage_Skidmore_2.jpg/330px-James_McAvoy_by_Gage_Skidmore_2.jpg"), new Professional("Anya Taylor-Joy", 24, "Female", 60, 170, "Black", "Black", "Caucasian", false, "American", 0, "Actress", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Anya_Taylor-Joy_by_Gage_Skidmore.jpg/1200px-Anya_Taylor-Joy_by_Gage_Skidmore.jpg"));
movies.push(movie4);

var videoteca = new Imdb (movies);

mostrarPeliculas();

function mostrarPeliculas()
{
    for (var i = 0; i < videoteca.peliculas.length; i++)
    {      
        $("#verpeliculas > .row").append('<div class="col-6 col-md-6 col-xl-3"><div class="card"><img class="card-img-top" src="'+videoteca.peliculas[i].picture+'"><div class="card-body"><h5 class="card-title">'+videoteca.peliculas[i].title+' '+videoteca.peliculas[i].releaseYear+'</h5><h6>'+videoteca.peliculas[i].nationality+' - '+videoteca.peliculas[i].genre+'</h6><button type="button" onclick="verProfessional('+ i +')" value="" id="" class="btn btn-dark" data-toggle="modal" data-target="#info">Ver Info</button></div></div>');
    }
}

function agregarPelicula()
{      
    var title = $("#title").val();
    var releaseYear = $("#release").val();
    var nationality = $("#pais").val();
    var genre = $("#genre").val();
    var picture = $("#picture").val();
    var newMovie = new Movie(title, releaseYear,nationality, genre, picture);
    videoteca.peliculas.push(newMovie);
    $("#verpeliculas > .row").append('<div class="col-6 col-md-6 col-xl-3"><div class="card"><img class="card-img-top" src="'+newMovie.picture+'"><div class="card-body"><h5 class="card-title">'+newMovie.title+' '+newMovie.releaseYear+'</h5><h6>'+newMovie.nationality+' - '+newMovie.genre+'</h6><button type="button" onclick="verProfessional('+ (videoteca.peliculas.length - 1) +')" value="" id="" class="btn btn-dark" data-toggle="modal" data-target="#info">Ver Info</button></div></div>');


}




function verProfessional(index) { 
    $(".modal-body").empty(); 
    $(".modal-body").append('<img style="width:60px" src="' +videoteca.peliculas[index].director.picture + '"><br>');
    $(".modal-body").append(JSON.stringify(videoteca.peliculas[index].director)+"<br>");
    
    for (var i = 0; i < videoteca.peliculas[index].actors.length; i++) 
    { 
        $(".modal-body").append('<img style="width:60px" src="' +videoteca.peliculas[index].actors[i].picture + '"><br>');
        $(".modal-body").append(JSON.stringify(videoteca.peliculas[index].actors[i])+"<br>");

    }

    
    $('#info').modal();
}
