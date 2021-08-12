define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        lodestone: {
            hash: '#lodestone',
            controller: 'lodestone-controller'
        },
        news: {
            hash: '#news',
            controller: 'news-controller'
        }
    }

    internals.defaultRoute = 'lodestone';

    internals.currentHash = '';

    internals.hashCheck = function() {

        if(window.location.hash === internals.currentHash) {
            return;
        }
        
        var routeName = Object.keys(internals.routes).find(function(name) {
            return window.location.hash === internals.routes[name].hash;
        });

        if (!routeName) {
            routeName = internals.defaultRoute;
            window.location.hash = internals.routes[internals.defaultRoute].hash;
        }

        internals.loadController(internals.routes[routeName].controller);

    };

    internals.loadController = function(controllerName) {
        internals.currentHash = window.location.hash;

        require(['controllers/' + controllerName], function(controller){

            try{
            controller.start();
            } catch (err) {
                console.log(err.message);
                internals.loadController(internals.routes[internals.defaultRoute].controller);
            }

        })
    }

    externals.start = function(){

        window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;

        setInterval(internals.hashCheck, 150);
    };

    return externals;

});