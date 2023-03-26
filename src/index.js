const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target.children[1].value);

        fetch('http://localhost:3000/movies')
        .then(resp => resp.json())
        .then(movies => {
            movies.forEach(movie => {
                if(movie.id === parseInt(e.target.children[1].value)){
                    const title = document.querySelector('#movieDetails h4');
                    const summary = document.querySelector('#movieDetails p');
                    title.innerText = movie.title;
                    summary.innerText = movie.summary;
                }
            })
        })
    })
}

document.addEventListener('DOMContentLoaded', init);