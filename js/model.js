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
        description: 'Despite rapid job growth, median real wages of full-time, full-year healthcare employees were stagnant – rising modestly in some industry sector/occupation groups and falling in others.\n Healthcare professionals saw an increase of just 60 cents an hour in median real pay in hospitals over the decade, and an even smaller increase in outpatient care.<br/><br/>It is striking how low the median pay of medical technicians and social services workers in hospitals and outpatient care is, ranging from $37,000 to $45,000 a year in 2015 depending on industry sector and occupation. Medical technicians saw their median real pay drop in both hospitals and outpatient care. Median real pay of social services workers rose by $1.09 over 10 years or about 11 cents a year in hospitals, and by 32 cents over 10 years or a fraction over 3 cents a year in outpatient care.<br/><br/>Median pay of health aides & assistants working full-time, full-year was less than $15 an hour in 2015; it fell in hospitals and was flat in outpatient care. The median pay of food service and cleaning service workers rose somewhat in settings, but was still just $11.78 to $12.27 an hour in 2015.',
        visual: 'median-full-time-full-year',
    },
    {
        id: 2,
        description: 'Examining wage trends in hospitals by gender and race/ethnicity we observe that the real median hourly wage of full-time, full-year workers increased for every demographic group over the decade. However, with the exception of white women and Asian/other women, the real wage increases came to less than one dollar an hour.  White women’s real median wage increased by $1.24 between 2005 and 2015, Asian/other women saw an increase of $1.50 over that time period.<br/><br/>Workers in outpatient care centers experienced declines in real median hourly wages in every gender and race/ethnicity group except white men, whose real median pay increased by 99 cents an hour over the ten years, and Asian/other women whose real median pay was flat (a gain of 6 cents an hour) over the decade. Black men saw a steep decline in their real median wage of $2.55 an hour or $5,300 a year; Hispanic men’s pay declined by 99 cents.  ',
        visual: 'median-full-time-full-year-by-race',
    },
    {
        id: 3,
        description: 'Looking at wage trends for demographic groups by occupation, however, tells a much more complex story. The wage gains in hospitals between 2005 and 2015 for every demographic group noted above turn out to apply mainly to healthcare professionals who, with the exception of Hispanic women and Asian/other women who experienced real median hourly wage losses of 24 cents and 15 cents, respectively, saw real wage gains. In contrast, wage trends for the two largest nonprofessional occupational categories in hospitals ― medical technicians and health aides and assistants ― show wage declines. Among health aides and assistants, every gender and race/ethnicity group in hospitals except Asian/other men (up 32 cents) experienced declines in real median pay ranging from 16 cents to $1.71 an hour.  Among medical technicians, real median hourly pay declined for every group except white women (up 19 cents) and Hispanic women (up $1.08).<br/><br/>The pattern of wage gains and losses in outpatient care facilities was very different. Among healthcare professionals in outpatient care facilities, only white men and women and black men experienced wage gains over the decade. The gains in real median pay were large for white and black men ― $3.65 an hour for white men, $3.62 for black men ― an annual increase of more than $7,500.  White women saw a gain of 85 cents an hour. All other demographic groups experienced a decrease in real median hourly wages. Among nonprofessional workers in outpatient care, white, black, and Asian/other men employed as medical technicians saw declines in real median hourly wages ― steep decreases in the case of black and Asian/other men. Real median pay of Hispanic men rose by $1.53 an hour from 2006 to 2015.',
        visual: 'median-full-time-full-year-by-race-occupation',
    }    
]

let education = [
    {
        id: 1,
        title: '',
        description: 'The modal education level for med techs in hospitals and in outpatient care facilities was some post-high school/some college ― already 58 percent in hospitals in 2005; 65 percent that year in outpatient care. Over the decade, the share with a high school degree or less fell from 18.5 to 14.3 percent in hospitals and from 18.7 to 17.4 percent in outpatient care centers. At the same time, the share of workers with a bachelor’s degree or more increased from 23.8 to 26.6 percent in hospitals, and from 16.2 to 18.3 percent in outpatient care. <br/><br/>The change in educational attainment was more dramatic for health aides and assistants. Many of these workers were poorly educated in 2005 ― 41.4 percent in hospitals, and 32.5 percent in outpatient facilities had a high school degree or less. By 2015, the share with a high school degree or less had fallen to 29.4 percent in hospitals and 22.9 in outpatient care. The share with some post-secondary/some college education rose from 48.4 to 56.5 percent in hospitals and from 55.2 to 59.4 percent in outpatient facilities, while the share with four years of college or more rose from 10.3 to 14.1 percent in hospitals, and from 12.3 to 17.7 percent in outpatient care. These are dramatic increases in educational attainment. While the share of health aides and assistants in hospitals with a college degree or more is just over half the share of medical assistants with this educational level, the shares of workers with this level of education were nearly the same for both occupational groups.  Despite these notable improvements in educational attainment, median real wages of these workers fell in hospitals and were flat in outpatient care. Median pay of these workers was still less than $15 an hour in 2015.',
        visual: 'education-shares-all-industries',
    }

]

let employment = [
    {
        id: 1,
        description: 'Between 2005 and 2015, employment increased by 20 percent in the healthcare industry, which includes five major segments —hospitals, outpatient care centers, physicians’ offices, home healthcare services, and nursing homes. These five healthcare segments account for about three-quarters of all healthcare jobs (77.4 percent in 2005, 75.5 percent in 2015). Hospitals and outpatient clinics account for about 41 percent of all jobs in healthcare, doctors’ offices 16 percent, nursing homes 10 percent, and home healthcare 8 percent.<br/><br/>Hospitals are the largest employer by far, employing 5.75 million people in 2015, up from 5.25 million in 2005. But this segment grew by about 10 percent over the decade — just half the overall growth rate of healthcare jobs. The much smaller outpatient care centers and home health services segments grew six times faster than did hospitals.',
        visual: 'occupations-all-industries',
    },
    {
        id: 2,
        description: 'While white women continue to hold the lion’s share of healthcare jobs, differences in rates of employment growth have led to a more diverse workforce in both hospitals and outpatient care centers.<br/><br/>Most notable is the decline in the share of healthcare jobs held by white women from 53.1 percent to 49.4 percent in hospitals, and from 54.1 percent to 49.4 percent in outpatient facilities; black women experienced a slight decline in their relative share of jobs in hospitals and a slight increase in outpatient facilities. Hispanic women increased their share of jobs in healthcare with considerably higher job growth in outpatient centers than in hospitals; their employment share increased from 8.7 to 11.5 percent in outpatient facilities and from 5.8 percent to 7.4 percent in hospitals. Asian/other women increased their share of jobs from 5.7 to 6.8 percent in hospitals and from 4.6 to 5.8 percent in outpatient centers.',
        visual: 'women-ethnicity-employment',
    }    
]

let ModuleCollection = Backbone.Collection.extend({
    model: Module
});

/* SECTIONS */

var wageSections = new ModuleCollection();
wageSections.reset(wages);

var edSections = new ModuleCollection();
edSections.reset(education);

var employmentSections = new ModuleCollection();
employmentSections.reset(employment);