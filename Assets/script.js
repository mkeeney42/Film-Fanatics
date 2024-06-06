const apiKey = "d254f211";
const searchButton = document.querySelector(".btn");

searchButton.addEventListener("click", () => {
    console.log("Search button clicked!");

    function searchMovie(movie) {
        fetch(

            `http://www.omdbapi.com/?s=${movie}&apikey=651c5a7f`
        ).then(function (response) {
            return response.json();
        }).then(function (data) {

            console.log(data)

        })


    }


    searchButton.addEventListener("click", function (event) {
        event.preventDefault()
        const movie = document.querySelector("#input-box").value
        searchMovie(movie)

    })
})
