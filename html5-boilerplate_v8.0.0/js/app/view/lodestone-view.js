define(function(){

    var internals = {
        elements: {},
        handlers: {
            news: {
                count: []
            }
        }
    };
    var externals = {};

    externals.render = function(obj, id) {

        internals.elements.app = $('#app');
        internals.elements.navbar = $('#news-button');
        
        internals.elements.navbar.click(internals.handlers['news-button']);
        internals.elements.app.append(internals.createNewsCard(obj, id));
    }

    externals.bind = function(event, handler) {
        internals.handlers[event] = handler;
    }

    externals.getNewsIds = function() {
        return internals.handlers['news'].count;
    }

    internals.createNewsCard = function(news, count) {

        internals.handlers['news'].count.push(count);

        return (
            '<div class="news">' +
            '<div class="news-image">' +
            '<a id="' +
            count +
            '">' +
            '<img src="' +
            news.image +
            '"/> '+
            '</a>' +
            '</div>' +
            '</div>'
        )
    }

    return externals;
})