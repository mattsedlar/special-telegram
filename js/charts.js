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