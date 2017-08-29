$.expr[':'].textEquals = function(a, i, m) {
    return $(a).text().match("^" + m[3] + "$");
};
 

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
            else if (viewid == 'employment') {
                this.employment();
            }
            else if (viewid == 'workers') {
                this.workers();
            }
    },       

    index:function (){
        $('#wages').hide();
        $('#workers').hide();
        $('#employment').hide();
    },

    wages:function() {
        $('#employment').hide();
        $('#workers').hide();
       
        $('#wages').fadeIn();
        $("ul#topics").append($("ul#topics li:textEquals('Wages')"));
        $("ul#topics li:lt(1) a").css("color","#CCCCCC");
        $("ul#topics li:eq(1) a").css("color","#23527c");        
    },
    
    employment:function() {
        $('#wages').hide();
        $('#workers').hide();
        
        $('#employment').fadeIn();
    },
    
    workers:function() {
        $('#wages').hide();
        $('#employment').hide();
        
        $('#workers').fadeIn();
        $("ul#topics").append($("ul#topics li:textEquals('Workers')"));
        $("ul#topics li:lt(1) a").css("color","#CCCCCC");
        $("ul#topics li:eq(1) a").css("color","#23527c");         
        
    }

 }));

Backbone.history.start();

});