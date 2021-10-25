
document.addEventListener('DOMContentLoaded', function(){
        let moviesContainer = document.getElementById('movieContainer');
        let movies = JSON.parse(localStorage.getItem('watchlist'))
        console.log(movies);
        moviesContainer.innerHTML = renderMovies(movies);
     }) 



//Function to render all the movies onto the screen 
function renderMovies(movieArray) {
        
    let moviesHTML = movieArray.map(function(currentMovie){
        console.log(currentMovie);
        //if(document.getElementById('userSearch').value == currentMovie.Title) {}
        //Don't forget to also remove the + from += `
            
        return `
            <div class="col-3 movie">
                <div class="card" style="width: 18rem;">
                    <img id="moviePoster" src="${currentMovie.Poster}" class="card-img-top" alt="">
                    <div id="movieDetailsSection" class="card-body">
                        <h5 id="movieTitle" class="card-title">${currentMovie.Title}</h5>
                        <p id="movieYear" class="card-text">${currentMovie.Year}</p>
                    </div>
                </div>	
            </div>
        `                      
    });  

    return moviesHTML.join('');
}


