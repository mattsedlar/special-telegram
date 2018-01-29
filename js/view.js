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

let WageCollectionView = Backbone.View.extend({
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
        $("#wages").append(moduleView.el)
    }
});

let EdCollectionView = Backbone.View.extend({
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
        $("#education").append(moduleView.el)
    }
});

let EmploymentCollectionView = Backbone.View.extend({
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
        $("#employment").append(moduleView.el)
    }
});


let wageSectionsView = new WageCollectionView({
	collection: wageSections
});

let edSectionsView = new EdCollectionView({
	collection: edSections
});

let employmentSectionsView = new EmploymentCollectionView({
	collection: employmentSections
})