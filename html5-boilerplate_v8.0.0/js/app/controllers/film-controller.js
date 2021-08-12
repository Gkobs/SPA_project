define(['services/lodestone-service'], function(lodestoneService) {

    var internals = {};
    var externals = {};

    externals.start = function() {
        internals.bindEventHandlers();
        filmView.render();
    }

    internals.bindEventHandlers = function() {
        filmView.bind('filmButton', internals.newFilmHandler);
    }

    internals.newFilmHandler = function(){
        var filmIndex = Math.floor(Math.random() * 6);
        filmService.getFilm(filmIndex, filmView.render);
    }

    return externals;

});