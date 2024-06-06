const apiKey = "d254f211";
const searchButton = document.querySelector(".btn");

searchButton.addEventListener("click", () => {
    console.log("Search button clicked!");

    function searchMovie(movie) {
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=651c5a7f`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                updateSearchHistory(movie);
            });
    }

    function updateSearchHistory(movie) {
       y
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
        searchHistory.push(movie);

        
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

        
        displaySearchHistory();
    }

    function displaySearchHistory() {
        const searchHistoryContainer = document.getElementById('search-history');
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        searchHistoryContainer.innerHTML = '<h2>Search History:</h2>';
        searchHistoryContainer.innerHTML += '<ul>' + searchHistory.map(movie => `<li>${movie}</li>`).join('') + '</ul>';
    }

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        const movie = document.querySelector("#input-box").value;
        searchMovie(movie);
    });

   
    displaySearchHistory();
});
