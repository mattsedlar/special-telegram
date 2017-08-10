$(function() {

var AppRouter = new (Backbone.Router.extend({
    routes: {
        '': 'index',
        'view/:viewid':'handleRouteAll'
    },

    handleRouteAll: function (viewid) {
            if (viewid == '') {
                this.index();
            }
            else if (viewid == 'wages') {
                this.wages();
            }
    },       

    index:function (){
        $('#wages').hide();
    },

    wages:function() {
        $('#wages').fadeIn();
    }

 }));

Backbone.history.start();

});