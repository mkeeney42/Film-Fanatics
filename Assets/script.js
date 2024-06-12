const apiKey = "d254f211"

const searchButton = document.querySelector(".btn")

function searchMovie(movie){
fetch(

`http://www.omdbapi.com/?s=${movie}&apikey=651c5a7f`
).then(function(response){
    return response.json();
}).then(function(data){

    console.log(data)
for(let i = 0; i< data.Search.length; i++){
renderResult(data.Search[i])
}
});


}

const render = document.querySelector(".movie-area")
render.addEventListener("click", function(event){
event.preventDefault()


})


searchButton.addEventListener("click", function(event){
event.preventDefault()
const movie = document.querySelector("#input-box").value
updateSearchHistory(movie)
searchMovie(movie)

})

    function updateSearchHistory(movie) {
       
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
        searchHistory.push(movie);

        
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        
        displaySearchHistory();
    }

    function displaySearchHistory() {
        const searchHistoryContainer = document.getElementById('search-history');
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        searchHistoryContainer.innerHTML = '<h4>Search History:</h4>';
        searchHistoryContainer.innerHTML += '<ul>' + searchHistory.map(movie => `<li>${movie}</li>`).join('') + '</ul>';
      
    }

   function renderResult (movie){
   const result = document.createElement("div")
    const todaysMovie = `
    <div>
    <h2>Title: ${movie.Title}</h2>
    <p>Year: ${movie.Year}</p>
    <button class= "details" data-movieID = "${movie.imbdID}"> Click Here </button>
    <div id="img"><img src ="${movie.Poster}" width="400" height="600"/></div>
    </div>
    `;
    result.innerHTML = todaysMovie
    const render = document.querySelector(".movie-area")

    function applyCustomStyleToId() {
        const elements = document.getElementsByTagName("img");
        const customStyle = {
            margin: "30px",
        };
        function customStyleToTagName() {
            const elements = document.querySelctor("h2");
            const customStyle = {
                margin: "30px",
            };
    
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            Object.assign(element.style, customStyle);
        }
    
    }
    applyCustomStyleToId();
    customStyleToTagName();


    render.append(result);
}
   }


    displaySearchHistory();
  
function getWhereStream(movieId) {
    fetch ( 

        `https://api.watchmode.com/v1/title/${movieId}/details/?apiKey=YOUR_API_KEY&append_to_response=sources`
        
            )
        
}

