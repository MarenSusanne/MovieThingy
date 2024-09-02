updateView()
function updateView() {

    document.getElementById("app").innerHTML = `
        <select onchange="chooseGenre(this.value)" name="genreOptions">
        ${showOptions()}
        </select>
        <button id="hideButton" onclick="hideSeen()">Hide Seen</button>
        <div id="container">${showMovies()}</div>
    `
}


function showMovies() {
    let result = '';
    if (model.app.chosenGenre == 'null') {
        for (let i = 0; i < model.movies.length; i++) {
            result += `
                <div>
                    <div class="singleMovie" >
                        <div class="title">${model.movies[i].title}</div>
                        <div>Rating: ${model.movies[i].rating}</div>
                        <div id="image">
                            <div class="corner">
                                ${showStar(i)}
                            </div>
                            <img src=${model.movies[i].img} onclick="showMovieInfo(model.movies[${i}])">
                        </div>
                    </div>
                    <div id="haveSeen">
                        Have seen?: <input type=checkbox name="haveSeenInput" onchange="isMovieSeen(model.movies[${i}])">
                    </div>
                </div>
        `
        }
    } else {
        for (let i = 0; i < model.movies.length; i++) {
            if (model.movies[i].genre == model.app.chosenGenre) {
                result += `
                <div>
                    <div class="singleMovie" >
                        <div class="title">${model.movies[i].title}</div>
                        <div>Rating: ${model.movies[i].rating}</div>
                        <div id="image">
                            <div class="corner" id="favouriteStar">
                                ${showStar(i)}
                            </div>
                            <img src=${model.movies[i].img} onclick="showMovieInfo(model.movies[${i}])">
                        </div>
                    </div>
                    <div id="haveSeen">
                        Have seen?: <input type=checkbox name="haveSeenInput" onchange="isMovieSeen(${model.movies[i]})">
                    </div>
                </div>
        `
            }
        }
    }
    return result
}

function showOptions() {
    let result = `<option selected value=null>all categories</option>`;
    for (let i = 0; i < model.data.genre.length; i++) {
        result += `
        <option ${model.app.chosenGenre == i ? 'selected' : ''} value="${i}">${model.data.genre[i]}</option>
        `

    }
    return result
}

function showMovieInfo(movie) {
    document.getElementById("app").innerHTML = `
    <div id="MovieContainer">
        <img onclick="updateView()" src=${movie.img}></img>
        <div class="title">${movie.title}</div>
        <div>${movie.info}</div>
        <div>${movie.actors}</div>
    </div>

    `
}

function showStar(movieIndex){
    const movie = model.movies[movieIndex]
    let print = '';
    if(movie.isFavorite == false){
        print += `
        <img src="starOutline.svg" class="star" onclick="makeFavourite(model.movies['${movieIndex}'])">
        `
    } else if (movie.isFavorite == true){
        print += `
        <img src="starFilled.png" class="star" onclick="makeFavourite(model.movies['${movieIndex}'])">
        `
    }
    return print
}
function hideSeen(){
    let result = '';
    for (let i = 0; i < model.movies.length; i++) {
            if (model.movies[i].hasSeen == false) {
            result += `
                <div>
                    <div class="singleMovie" >
                        <div class="title">${model.movies[i].title}</div>
                        <div>Rating: ${model.movies[i].rating}</div>
                        <div id="image">
                            <div class="corner">
                                ${showStar(i)}
                            </div>
                            <img src=${model.movies[i].img} onclick="showMovieInfo(model.movies[${i}])">
                        </div>
                    </div>
                    <div id="haveSeen">
                        Have seen?: <input type=checkbox name="haveSeenInput">
                    </div>
                </div>
        `
        }
    }
    document.getElementById("container").innerHTML = result;
    changeButton();
}

function changeButton(){
    if (document.getElementById("hideButton").innerHTML == "Hide Seen") {
        document.getElementById("hideButton").innerHTML = "Show Seen"
    } else if (document.getElementById("hideButton").innerHTML == "Show Seen"){
        document.getElementById("hideButton").innerHTML = "Hide Seen"
    }
}