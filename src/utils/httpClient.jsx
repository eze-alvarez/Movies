const API = "https://api.themoviedb.org/3"

export function getMovie(path){
    return fetch( API + path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGE5YzMxMTc2YjY3YjlhNGI5NDdiYzY2YzM4Nzc1OCIsInN1YiI6IjY0MDMzM2E4MTM2NTQ1MDA4Y2U4ZmUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RVLLoMUtHKaYBOhCOQnAVlDlQ3bgFQKba2v7AthhSzQ",
                "Content-Type": "application/json;charset=utf-8",
            },
        })
        .then(result => result.json())
}