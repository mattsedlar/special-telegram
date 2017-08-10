let ModuleView = Backbone.View.extend({
    className: 'module',
    tagName: 'section',
    el: this.el,
    template: _.template($('#moduleTemplate').html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.append( this.template(this.model.toJSON()));
    }
});

let SiteCollectionView = Backbone.View.extend({
    initialize: function () {
        this.render();
    },
    render: function() {
        this.collection.forEach(this.addOne, this);
    },
    addOne: function(module){
            var moduleView = new ModuleView({
                model: module
            });
            $("#wages").append(moduleView.el);
    }
});

var siteSectionsView = new SiteCollectionView({
	collection: siteSections
});