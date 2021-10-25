
document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('searchForm').addEventListener('submit', function(e){
        e.preventDefault(); //By default, clicking submit on a form sends/posts data somewhere and refreshes the page. So, we add e.preventDefault() to prevent this default behavior and stop pg from refreshing
        
        let searchString = document.getElementById('search-bar').value;  
        let urlEncodedSearchString = encodeURIComponent(searchString);
        
        axios.get('http://www.omdbapi.com/?apikey=b8372ff4&s=' + urlEncodedSearchString).then(function(response){
            console.log(response);
            let moviesContainer = document.getElementById('movieContainer');
            moviesContainer.innerHTML = renderMovies(response.data.Search);
        })
        
     }) 
})


//Function to render all the movies onto the screen 
function renderMovies(movieArray) {
        
    let moviesHTML = movieArray.map(function(currentMovie){
        
        //if(document.getElementById('userSearch').value == currentMovie.Title) {}
        //Don't forget to also remove the + from += `
            
        return `
            <div class="col-12 col-lg-3 movie">
                <div class="card" style="width: 18rem;">
                    <img id="moviePoster" src="${currentMovie.Poster}" class="card-img-top" alt="">
                    <div id="movieDetailsSection" class="card-body">
                        <h5 id="movieTitle" class="card-title">${currentMovie.Title}</h5>
                        <p id="movieYear" class="card-text">${currentMovie.Year}</p>
                        <a href="#" id="addFavBtn" onclick="saveToWatchList('${currentMovie.imdbID}')" class="btn btn-primary">Add+</a>
                    </div>
                </div>	
            </div>
        `                      
    });  

    return moviesHTML.join('');
}


//Function to save movies to watchlist
function saveToWatchList(imdbID) {
    axios.get('http://www.omdbapi.com/?apikey=b8372ff4&i=' + imdbID).then(function(response){
        //console.log(response);
       let watchlist = JSON.parse(localStorage.getItem('watchlist'));    //Put in quotes bc this watchlist is a key value pair


        if(watchlist == null){
            watchlist = [];   
        }
    
        watchlist.push(response.data);
        localStorage.setItem('watchlist', JSON.stringify(watchlist)); 
   })
};

  






