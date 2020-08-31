const API_KEY = "0fffbc9a81f981377c5a96170820f28f"

const requests = {
    getTrending:`/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    getTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    getComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
}

export default requests