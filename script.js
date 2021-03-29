function getPeopleData() {
    $('#data').html(
        $.get('https://swapi.dev/api/people', function (results) {
            for (var i = 0; i < 5; i++) {
                $("#data").append(`
                    <div class="results">
                        <h3>Name: ${results.results[i].name}</h3> 
                        <h3>Gender: ${results.results[i].gender}</h3> 
                        <h3>Hair Color: ${results.results[i].hair_color}</h3> 
                        <hr/>
                        <hr/>
                    </div>
                `)
            }
        })
    )
}
function getFilmData() {
    $('#data').html(
        $.get('https://swapi.dev/api/films', function (results) {
            for (var i = 0; i < 5; i++) {
                $("#data").append(`
                    <div class="results">
                        <h3>Title: ${results.results[i].title}</h3> 
                        <h3>Opening Text:</h3><p>${results.results[i].opening_crawl}</p> 
                        <h3>Episode Number: ${results.results[i].episode_id}</h3> 
                        <hr/>
                        <hr/>
                    </div>
                `)
            }
        })
    )
}
function getPlanetData() {
    $('#data').html(
        $.get('https://swapi.dev/api/planets', function (results) {
            for (var i = 0; i < 3; i++) {
                $("#data").append(`
                    <div class="results">
                        <h3>Planet Name: ${results.results[i].name}</h3> 
                        <h3>Population:</h3><p>${results.results[i].population}</p> 
                        <h3>Terrain: ${results.results[i].terrain}</h3> 
                        <hr/>
                        <hr/>
                    </div>
                `)
            }
        })
    )
}

$(document).ready(function () {
    $("#category").change(function () {
        var selectedCategory = $(this).children("option:selected").val();
        if (selectedCategory === "people") {
            getPeopleData()}
            else if (selectedCategory === "films") {
                getFilmData()}
                else {
                    getPlanetData()}
    })
})
