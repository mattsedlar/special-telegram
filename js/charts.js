 $(function () {
    Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
 });
 
 
 /* REAL MEDIAN HOURLY WAGES OF FULL-TIME, FULL-YEAR HEALTHCARE WORKERS */
 
 Highcharts.chart('median-full-time-full-year', {
        chart: { zoomType: 'xy' },
            title: {
            text: "Real Median Hourly Wages of Full-Time, Full-Year Healthcare Workers by Occupation Group",
            margin: 20,
            align: "left",
            style: {
            color: "#000000",
            useHTML: true
            }
        },
        yAxis: {
            title: {
            text: "Wages in 2015 Dollars"
            },
            labels: {
            format: "${value}"
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
            turboThreshold: 0
            },
            treemap: {
            layoutAlgorithm: "squarified"
            },
            bubble: {
            minSize: 5,
            maxSize: 25
            }
        },
        annotationsOptions: {
            enabledButtons: false
        },
        tooltip: {
            delayForDisplay: 10,
            useHTML: true,
            headerFormat: "",
            pointFormat: "<strong>{point.category}, {point.group}<\/strong><br/>{point.year}: ${point.wages}"
        },
        xAxis: {
            categories: [
            {
                name: "Overall Healthcare",
                categories: ["Professionals", "Social Services", "Medical Technicians", "Health Aides & Assistants", "Food Services", "Cleaning Services"]
            },
            {
                name: "Hospitals",
                categories: ["Professionals", "Social Services", "Medical Technicians", "Health Aides & Assistants", "Food Services", "Cleaning Services"]
            },
            {
                name: "Outpatient Care",
                categories: ["Professionals", "Social Services", "Medical Technicians", "Health Aides & Assistants", "Food Services", "Cleaning Services"]
            }
            ],
            labels: {
            align: "right",
            padding: 0,
            style: { "fontSize": "8.5px" },
            x: -2
            }
        },
        series: [
            {
            group: "group",
            data: [
                {
                category: "Professionals",
                year: 2005,
                wages: 32.55,
                y: 32.55
                },
                {
                category: "Professionals",
                year: 2005,
                wages: 32.62,
                y: 32.62
                },
                {
                category: "Professionals",
                year: 2005,
                wages: 29.73,
                y: 29.73
                },
                {
                category: "Social Services",
                year: 2005,
                wages: 17.25,
                y: 17.25
                },
                {
                category: "Social Services",
                year: 2005,
                wages: 19.03,
                y: 19.03
                },
                {
                category: "Social Services",
                year: 2005,
                wages: 17.84,
                y: 17.84
                },
                {
                category: "Medical Technicians",
                year: 2005,
                wages: 20.81,
                y: 20.81
                },
                {
                category: "Medical Technicians",
                year: 2005,
                wages: 22,
                y: 22
                },
                {
                category: "Medical Technicians",
                year: 2005,
                wages: 17.84,
                y: 17.84
                },
                {
                category: "Health Aides & Assistants",
                year: 2005,
                wages: 13.59,
                y: 13.59
                },
                {
                category: "Health Aides & Assistants",
                year: 2005,
                wages: 14.87,
                y: 14.87
                },
                {
                category: "Health Aides & Assistants",
                year: 2005,
                wages: 14.27,
                y: 14.27
                },
                {
                category: "Food Services",
                year: 2005,
                wages: 11.66,
                y: 11.66
                },
                {
                category: "Food Services",
                year: 2005,
                wages: 12.02,
                y: 12.02
                },
                {
                category: "Food Services",
                year: 2005,
                wages: 11,
                y: 11
                },
                {
                category: "Cleaning Services",
                year: 2005,
                wages: 11.89,
                y: 11.89
                },
                {
                category: "Cleaning Services",
                year: 2005,
                wages: 11.89,
                y: 11.89
                },
                {
                category: "Cleaning Services",
                year: 2005,
                wages: 11.21,
                y: 11.21
                }
            ],
            type: "bar",
            name: "2005"
            },
            {
            group: "group",
            data: [
                {
                category: "Professionals",
                year: 2015,
                wages: 32.72,
                y: 32.72
                },
                {
                category: "Professionals",
                year: 2015,
                wages: 33.22,
                y: 33.22
                },
                {
                category: "Professionals",
                year: 2015,
                wages: 29.99,
                y: 29.99
                },
                {
                category: "Social Services",
                year: 2015,
                wages: 18.16,
                y: 18.16
                },
                {
                category: "Social Services",
                year: 2015,
                wages: 20.12,
                y: 20.12
                },
                {
                category: "Social Services",
                year: 2015,
                wages: 18.16,
                y: 18.16
                },
                {
                category: "Medical Technicians",
                year: 2015,
                wages: 19.63,
                y: 19.63
                },
                {
                category: "Medical Technicians",
                year: 2015,
                wages: 21.6,
                y: 21.6
                },
                {
                category: "Medical Technicians",
                year: 2015,
                wages: 17.67,
                y: 17.67
                },
                {
                category: "Health Aides & Assistants",
                year: 2015,
                wages: 13.25,
                y: 13.25
                },
                {
                category: "Health Aides & Assistants",
                year: 2015,
                wages: 14.72,
                y: 14.72
                },
                {
                category: "Health Aides & Assistants",
                year: 2015,
                wages: 14.28,
                y: 14.28
                },
                {
                category: "Food Services",
                year: 2015,
                wages: 11.14,
                y: 11.14
                },
                {
                category: "Food Services",
                year: 2015,
                wages: 12.27,
                y: 12.27
                },
                {
                category: "Food Services",
                year: 2015,
                wages: 12.27,
                y: 12.27
                },
                {
                category: "Cleaning Services",
                year: 2015,
                wages: 11.78,
                y: 11.78
                },
                {
                category: "Cleaning Services",
                year: 2015,
                wages: 12.27,
                y: 12.27
                },
                {
                category: "Cleaning Services",
                year: 2015,
                wages: 11.78,
                y: 11.78
                }
            ],
            type: "bar",
            name: "2015"
            }
        ],
        colors: ["#1F497D", "#538DD5", "#C4A797"]
        }
    );
 
 /* OCCUPATIONS WITHIN OVERALL HEALTH CARE INDUSTRY */ 


Highcharts.chart('occupations-all-industries',{
    
    chart: {
        marginBottom: 24
    },

    title:{
        text:'Employment by Segments as a Share of Overall Healthcare Jobs'
    },
    legend:{
        enabled:false
    },
    tooltip: {
        formatter: function() {
            if(this.x == 2005) { return this.x + ': ' + this.point.name + ', ' + this.y + '%' } 
            else {
            return this.x + ': ' + this.series.name + ', ' + this.y + '%'
            }
        }
    },
    xAxis: {
        opposite:true,
        lineColor:'#999',
        categories:['2005','2015'],
        title:{
            text:''
        },
        labels:{
            style:{
                fontWeight:'bold'
            }
        }
    },
    yAxis: {
        gridLineWidth:1,
        labels:{
            enabled:true,
            format: '{value}%'
        },
        title:{
            text:'',
       }
    },
    credits: {
        enabled: true,
        text: "Source: CEPR analysis of OES.",
        position: { 
            y: 0
        },
        style: { 
            fontSize: "11px", 
        }
    },
    plotOptions: {
        line:{
            lineWidth:2,
            shadow:false,
            color:'#1F497D',
            marker:{
                radius:3,
                symbol: 'circle'
            },
            dataLabels:{
                enabled:true,
                align:'left',
                x:12,
                y:10,
                formatter:function(){
                    if(this.x == 2015){
                        return this.series.name;
                    }
                }
            }
        },
        scatter:{
            shadow:false,
            color:'#666',
            marker:{
                radius:3
            },
            dataLabels:{
                enabled:true,
                align:'right',
                x:-12,
                y:10,
                formatter:function(){
                    return this.point.name;
                }
            }
        }
    },
    series: [{
        name:'Hospitals',
        data: [39.89,36.35]
    },{
        name:'Outpatient Care Centers',
        data: [3.54,4.6]
    },{
         name:'Offices of Physicians',
         data: [15.81,15.85]
     },{
         name:'Home Health Care Services',
         data: [6.13,8.2]
     },{
         name:'Nursing Care Facilities',
         data: [11.19,10.44]
     },{
         type:'scatter',
         data: [{'x':0,'y':39.89,'name':'Hospitals'},
             {'x':0,'y':3.54,'name':'Outpatient Care Centers'},
             {'x':0,'y':15.81,'name':'Offices of Physicians'},
             {'x':0,'y':6.13,'name':'Home Health Care Services'},
             {'x':0,'y':11.19,'name':'Nursing Care Facilities'}]
      }]
  });
