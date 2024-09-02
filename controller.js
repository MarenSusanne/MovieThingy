function chooseGenre(genre){
    model.app.chosenGenre = genre
    updateView()
}
function makeFavourite(movie){
    if(movie.isFavorite == false){
        movie.isFavorite = true;    
    } else {
        movie.isFavorite = false;    
    }
    updateView()
}
function isMovieSeen(movie){
    if(movie.hasSeen == false){
        movie.hasSeen = true;    
    } else {
        movie.hasSeen = false;    
    }
}