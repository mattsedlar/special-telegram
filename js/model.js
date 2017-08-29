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

let wages = [
    {
        id: 1,
        description: 'Despite rapid job growth, median real wages of full-time, full-year healthcare employees were stagnant – rising modestly in some industry sector/occupation groups and falling in others.\n Healthcare professionals saw an increase of just 60 cents an hour in median real pay in hospitals over the decade, and an even smaller increase in outpatient care.',
        visual: 'median-full-time-full-year',
    }
]

let workers = [
    {
        id: 1,
        title: 'John Doe',
        description: 'John Doe works and does other things for the hospital.',
        visual: '',
    }

]

let employment = [
    {
        id: 1,
        description: 'Between 2005 and 2015, employment increased by 20 percent in the healthcare industry, which includes five major segments —hospitals, outpatient care centers, physicians’ offices, home healthcare services, and nursing homes. These five healthcare segments account for about three-quarters of all healthcare jobs (77.4 percent in 2005, 75.5 percent in 2015). Hospitals and outpatient clinics account for about 41 percent of all jobs in healthcare, doctors’ offices 16 percent, nursing homes 10 percent, and home healthcare 8 percent.\nHospitals are the largest employer by far, employing 5.75 million people in 2015, up from 5.25 million in 2005. But this segment grew by about 10 percent over the decade — just half the overall growth rate of healthcare jobs. The much smaller outpatient care centers and home health services segments grew six times faster than did hospitals.',
        visual: 'occupations-all-industries',
    }
]

let ModuleCollection = Backbone.Collection.extend({
    model: Module
});

/* SECTIONS */

var wageSections = new ModuleCollection();
wageSections.reset(wages);

var workerSections = new ModuleCollection();
workerSections.reset(workers);

var employmentSections = new ModuleCollection();
employmentSections.reset(employment);