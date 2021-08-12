define(function(){

    var internals = {};
    var externals = {};

    internals.count = 0;

    internals.getNews = function(cb) {
        
        $.ajax({
            url: 'http://eu.lodestonenews.com/news/topics',
            type: 'GET',
            dataType: 'json',
            success: function(result, count) {
                result.forEach(cb, count);
            }
        });

    }

    externals.processNews = function(cb) {

        internals.getNews(cb);
                
    }

    return externals;

})