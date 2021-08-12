define(['services/lodestone-service', 'view/lodestone-view', 'view/news-view', 'services/news-service'], function(lodestoneService, lodestoneView, newsView, newsService) {

    var internals = {};
    var externals = {};

    externals.start = function() {
        internals.bindEventhandlers();
        lodestoneService.processNews(lodestoneView.render);
    }

    internals.bindEventhandlers = function() {

        //lodestoneView.getNewsIds().array.forEach(element => function(){
          //  lodestoneView.bind(element, internals.newsHandler);
        //});

        lodestoneView.bind('news-button', internals.lodestoneHandler);
    }

    internals.lodestonehandler = function() {
        lodestoneService.processNews(lodestoneView.render);
    }

    internals.newsHandler = function() {
        newsService.processNews(newsView.render);
    }

    return externals;
})