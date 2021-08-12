define(function(){

    var internals = {
        elements: {},
        handlers: {}
    };
    var externals = {};

    externals.bind = function(event, handler){
        internals.handlers[event] = handler;
    }

    externals.render = function(film) {

        internals.elements.app = $('#app');
        internals.renderButton();

        if(film) {
            internals.renderFilm(film);
        }

    }

    internals.renderFilm = function(film){
        if (internals.elements.filmCard) {
            internals.elements.filmCard.empty();
        }
        internals.elements.filmCard = $(internals.createFilmcard(film));
        internals.elements.app.append(internals.elements.filmCard);
    }

    internals.renderButton = function(){
        if(internals.elements.button) {
            return;
        }

        internals.elements.button = $(internals.createButton());
        internals.elements.button.click(internals.handlers['filmButton']);
        internals.elements.app.append(internals.elements.button);
    }

    internals.createButton = function() {
        return (
            '<button class="randomFilm">Click Me For A Random Film</button>'
        )
    }

    internals.createFilmcard = function(film) {
        return (
            '<div>' +
            '<p><strong>Tittle: </strong>' +
            film.title +
            '</p>' +
            '<p><strong>Year: </strong>' +
            film.year +
            '</p>' +
            '<p><strong>Director: </strong>' +
            film.director +
            '</p>' +
            '<p><strong>IMDB Rating: </strong>' +
            film.imdbRating +
            '</p>' +
            '</div>'
        )
    }

    return externals;

});