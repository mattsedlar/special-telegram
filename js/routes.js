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
            else if (viewid == 'education') {
                this.education();
            }
    },       

    index:function (){
        $('#wages').hide();
        $('#education').hide();
        $('#employment').hide();
    },

    wages:function() {
        $('#employment').hide();
        $('#education').hide();
       
        $('#wages').fadeIn();
        $("ul#topics").append($("ul#topics li:textEquals('Wages')"));
        $("ul#topics li:lt(2) a").css("color","#CCCCCC");
        $("ul#topics li:eq(2) a").css("color","#23527c");        
    },
    
    employment:function() {
        $('#wages').hide();
        $('#education').hide();
        
        $('#employment').fadeIn();
        $("ul#topics").append($("ul#topics li:textEquals('Employment')"));
        $("ul#topics li:lt(2) a").css("color","#CCCCCC");
        $("ul#topics li:eq(2) a").css("color","#23527c");         
    },
    
    education:function() {
        $('#wages').hide();
        $('#employment').hide();
        
        $('#education').fadeIn();
        $("ul#topics").append($("ul#topics li:textEquals('Education')"));
        $("ul#topics li:lt(2) a").css("color","#CCCCCC");
        $("ul#topics li:eq(2) a").css("color","#23527c");         
        
    }

 }));

Backbone.history.start();

});