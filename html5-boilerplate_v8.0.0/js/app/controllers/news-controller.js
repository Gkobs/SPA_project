define(['services/news-service'], function(newsService){

    var internals = {};
    var externals = {};

    externals.start() {
        newsService.processNews();
    }

    return externals;
})