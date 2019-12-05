require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");

var command = process.argv[2];
//console.log(command);

var value = process.argv[3];
console.log(value);

switch(command){
    case 'movie-this':
        movie();
    break;
    case 'concert-this':
        concert();
    break;
    case 'spotify-this-song':
        song();
    break;
    default:
        console.log("LIRI does not know that.");
};

function movie(){
    //console.log('You are in the movie command!');
    var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + value;
    axios.get(queryUrl)
    .then(function(response){
        console.log("---------------------------------------------------------------");
        console.log("Movie Title: "+response.data.Title);
        console.log("Year Movie Released: "+response.data.Year);
        console.log("IMBD Rating: ", response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: ", response.data.Ratings[1].Value);
        console.log("Country Produced: ", response.data.Country);
        console.log("Language: ", response.data.Language);
        console.log("Plot: ", response.data.Plot);
        console.log("Actors: ", response.data.Actors);
        console.log("---------------------------------------------------------------");
    })
};

function concert(){
    //console.log("You are in the Concert command!");
    var queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
    .then(function(response){
        console.log(response.venue);
    });
};

function song(){
    console.log("You are in the Spotify command!");
};


