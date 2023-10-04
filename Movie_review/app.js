let search = ()=>{

    //Variable declaretion
    let title = document.getElementById("title");
    let actors = document.getElementById("actors");
    let genre = document.getElementById("genre");
    let collection = document.getElementById("box-office");
    let director = document.getElementById("director");
    let rating = document.getElementById("rating");
    let date = document.getElementById("released");
    let poster = document.getElementById("poster-img");
    let moviename = document.getElementById("search");

    //API 
    let api = "http://www.omdbapi.com/?apikey=6c32720a&t=";

    //Merging API + Moviename
    let query = api + moviename.value;

    //fetch the query
    fetch(query).then((response)=>{

        //Convert object model to JSON()
        return response.json(); 

    }).then((Data)=>{

        title.innerText = Data.Title;
        genre.innerText = Data.Genre;
        date.innerText  = Data.Released;
        collection.innerText = Data.BoxOffice;
        director.innerText = Data.Director;
        actors.innerText = Data.Actors;
        rating.innerText = Data.imdbRating;
        poster.src = Data.Poster;

    })
}