const urlParams = new URLSearchParams(window.location.search);
const movieID = urlParams.get('movieID');
if (movieID) {
    getMovieDetails(movieID);
}

function getMovieDetails(movieID) {
    fetch(`https://api.watchmode.com/v1/title/${movieID}/details/?apiKey=s7V7ouDr0KAENqnahUeSndhy5at0c5ITRnzhjkaa&append_to_response=plot,sources`)
        .then(response => response.json())
        .then(data => {
            const movieDetailsElement = document.getElementById('movie-details');
           let movieDetails = 
           `
                <h2>${data.title}</h2>
                <p><strong>Plot:</strong> ${data.plot}</p>
            

                <p><strong>Sources:</strong><ul>`
               for (let i = 0; i< data.sources.length; i++){
                movieDetails += `<li>${data.sources[i].name}</li>`


            }
            movieDetails += `</ul></p>`
            movieDetailsElement.innerHTML = movieDetails
            ;
        })
        .catch(error => {
            console.error('Error fetching movie details:', error);
        });
}
// Home Button
const homeButtons = document.getElementsByClassName('homeBtn');
for (let i = 0; i < homeButtons.length; i++) {
    homeButtons[i].addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
}