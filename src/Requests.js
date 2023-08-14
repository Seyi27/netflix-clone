
const API_KEY = 'f81980ff410e46f422d64ddf3a56dddd'

// this are different requests that can be made from the server,
// it concatenates the api key with the url.
const requests={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDomentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;


// Note: we have already set up axios in './axios' to the baseURL so any time we make a request
// it concatenates the axios with the requests above to look like the link below:

// https://api.themoviedb.org/3/trending/all/week?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en=US

// This final link above is what is now sent to the movie server to fetch our data.
// the api request is made in the Banner.js file