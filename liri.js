require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
//var moment = require("moment");
//var Spotify = require("node-sotify-api");
// var fs = require("fs");
// var spotify = new Spotify({
//     id:  keys.spotify.id,
//     secret:  keys.spotify.secret,
// });

var command = process.argv[2];
//console.log(command);

var value = process.argv.slice(3).join(" ");
//console.log(value);

switch(command){
    case 'movie-this':
        movie(value);
    break;
    case 'concert-this':
        concert(value);
    break;
    case 'spotify-this-song':
        song(value);
    break;
    case 'do-what-it-says':
        doWhatItSays()
    break;
    default:
        console.log("LIRI does not know that.");
};

function movie(){
    //console.log('You are in the movie command!');
    var queryUrl = "http://www.omdbapi.com/?apikey=trilogy&t=" + value;
    axios.get(queryUrl)
    .then(function(response){
        var omdbR = response.data;
        console.log("---------------------------------------------------------------");
        console.log("           Movie Title: "+omdbR.Title);
        console.log("   Year Movie Released: "+omdbR.Year);
        console.log("           IMBD Rating: "+omdbR.imdbRating);
        console.log("Rotten Tomatoes Rating: "+omdbR.Ratings[1].Value);
        console.log("      Country Produced: "+omdbR.Country);
        console.log("              Language: "+omdbR.Language);
        console.log("                Actors: "+omdbR.Actors);
        console.log("                  Plot: "+omdbR.Plot);
        console.log("---------------------------------------------------------------");
    })
};

function concert(){
    //console.log("You are in the Concert command!");
    var queryUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";
    axios.get(queryUrl)
    .then(function(response){
        //var concertR = response.data[0];
        console.log("---------------------------------------------------------------");
        console.log("       Artist: "+value);
        console.log("Name of Venue:  "+response.data[0].venue.name);
        console.log(" Name of City:  "+response.data[0].venue.city +", " + response.data[0].venue.region);
        // var eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
         console.log("Date of Event: ");    //+eventDate);
        console.log("---------------------------------------------------------------");
        // for (var i = 0; i<response.data[i]; i++){
        //     console.log(response.data[i].venue.name);
        // }
        
    });
};

// function song(songName){
//     //If user has not specified a song, default to "The Sign" by Ace of Base
//     if (songName === "") {
//         songName = "The Sign";
//     }

//     spotify.search({ type: 'track', query: songName }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 
//       });

// };


