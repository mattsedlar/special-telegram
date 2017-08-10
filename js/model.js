let Module = Backbone.Model.extend({
    defaults: {
        id: 0,
        title: '',
        description: '',
        visual: '',
    },
    initialize: function() {
    }
});

let sections = [
    {
    id: 1,
    title: 'Wages',
    description: 'Despite rapid job growth, median real wages of full-time, full-year healthcare employees were stagnant – rising modestly in some industry sector/occupation groups and falling in others.\n Healthcare professionals saw an increase of just 60 cents an hour in median real pay in hospitals over the decade, and an even smaller increase in outpatient care.',
    visual: 'median-full-time-full-year',
    }
]

let ModuleCollection = Backbone.Collection.extend({
    model: Module
});

/* SECTIONS */

var siteSections = new ModuleCollection();
siteSections.reset(sections);