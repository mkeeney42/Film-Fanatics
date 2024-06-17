const apiKey = "d254f211"
const apiKey2 = "QsSJXqjQpyQSrHBAtiPdCan21Ntsj3JgY8fN7czI"
  
    const searchButton = document.querySelector(".btn");
    const searchBox = document.querySelector(".search-box");

    function navigateToSecondPage(movieID) {
        const secondPageLink = document.getElementById('second-page-link');
        secondPageLink.href = `second_page.html?movieID=${movieID}`;
        secondPageLink.click();
    }

    function searchMovie(movie) {
        fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                clearPreviousResults(); 
                if (data.Response === "True") {
                    data.Search.forEach(renderResult);
                } else {
                    console.log("No results found.");
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    const render = document.querySelector(".movie-area");

    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        const movie = document.querySelector("#input-box").value;
        updateSearchHistory(movie);
        searchMovie(movie);
    });

    function updateSearchHistory(movie) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(movie);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }

    function displaySearchHistory() {
        const searchHistoryContainer = document.getElementById('search-history');
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        searchHistoryContainer.innerHTML = '<h2>Search History:</h2>';
        searchHistoryContainer.innerHTML += '<ul>' + searchHistory.map(movie => `<li class="search-history-item cursor-pointer">${movie}</li>`).join('') + '</ul>';
        
        document.querySelectorAll('.search-history-item').forEach(item => {
            console.log('Adding click listener to:', item.textContent); 
            item.addEventListener('click', function () {
                const movieTitle = this.textContent;
                console.log('Clicked on:', movieTitle); 
                searchMovie(movieTitle);
            });
        });
    }

    function clearPreviousResults() {
        render.innerHTML = '';
    }

    function renderResult(movie) {
        const result = document.createElement("div");
        result.classList.add("m-2", "p-2", "border", "border-gray-200", "rounded", "shadow-md", "w-full", "sm:w-1/2", "md:w-1/3", "lg:w-1/3", "xl:w-1/3", "mt-10");

        const todaysMovie = `
        <div class="flex flex-col justify-between h-full">
            <div>
                <h3 class="text-2xl font-bold mb-1 text-white">Title: ${movie.Title}</h3>
                <p class="text-lg mb-1 font-bold text-white">Year: ${movie.Year}</p>
            </div>
            <a href="./second_page.html?movieID=${movie.imdbID}">
                <img class="w-full h-auto object-cover" src="${movie.Poster}" alt="${movie.Title} Poster"/>
            </a>
        </div>
        `;
        result.innerHTML = todaysMovie;
        render.append(result);
    }
    document.addEventListener('DOMContentLoaded', function () {
   
    displaySearchHistory();
    })
