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
            enabled: true
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

     title: {
        text: "Rate of Employment Growth in Healthcare Segments, 2005-2015",
        margin: 20,
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      yAxis: {
        title: {
          text: ""
        },
        type: "linear"
      },
      credits: {
        enabled: true,
        text: "Source: CEPR analysis of OES.",
        style: {
          fontSize: 12
        }
      },
      exporting: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          showInLegend: true,
          marker: {
            enabled: false
          }
        },
        treemap: {
          layoutAlgorithm: "squarified"
        },
        bubble: {
          minSize: 5,
          maxSize: 25
        },
        scatter: {
          marker: {
            symbol: "circle"
          }
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        useHTML: true,
        headerFormat: "",
        pointFormat: "<strong>{point.name}<\/strong><br/>{series.name}: {point.y:.0f}"
      },
      series: [
        {
          name: "Overall Home Health Care Services",
          data: [
            {
              variable: "2005",
              value: 806460,
              wt: 100,
              y: 100,
              name: "2005"
            },
            {
              variable: "2006",
              value: 853480,
              wt: 105.8304,
              y: 105.8304,
              name: "2006"
            },
            {
              variable: "2007",
              value: 906360,
              wt: 112.3875,
              y: 112.3875,
              name: "2007"
            },
            {
              variable: "2008",
              value: 946930,
              wt: 117.4181,
              y: 117.4181,
              name: "2008"
            },
            {
              variable: "2009",
              value: 1007670,
              wt: 124.9498,
              y: 124.9498,
              name: "2009"
            },
            {
              variable: "2010",
              value: 1071960,
              wt: 132.9217,
              y: 132.9217,
              name: "2010"
            },
            {
              variable: "2011",
              value: 1125670,
              wt: 139.5816,
              y: 139.5816,
              name: "2011"
            },
            {
              variable: "2012",
              value: 1178150,
              wt: 146.0891,
              y: 146.0891,
              name: "2012"
            },
            {
              variable: "2013",
              value: 1212360,
              wt: 150.3311,
              y: 150.3311,
              name: "2013"
            },
            {
              variable: "2014",
              value: 1255410,
              wt: 155.6692,
              y: 155.6692,
              name: "2014"
            },
            {
              variable: "2015",
              value: 1298940,
              wt: 161.0669,
              y: 161.0669,
              name: "2015"
            }
          ],
          type: "line"
        },
        {
          name: "Overall Hospitals",
          data: [
            {
              variable: "2005",
              value: 5246630,
              wt: 100,
              y: 100,
              name: "2005"
            },
            {
              variable: "2006",
              value: 5316000,
              wt: 101.3222,
              y: 101.3222,
              name: "2006"
            },
            {
              variable: "2007",
              value: 5410040,
              wt: 103.1146,
              y: 103.1146,
              name: "2007"
            },
            {
              variable: "2008",
              value: 5536100,
              wt: 105.5173,
              y: 105.5173,
              name: "2008"
            },
            {
              variable: "2009",
              value: 5622110,
              wt: 107.1566,
              y: 107.1566,
              name: "2009"
            },
            {
              variable: "2010",
              value: 5616070,
              wt: 107.0415,
              y: 107.0415,
              name: "2010"
            },
            {
              variable: "2011",
              value: 5648820,
              wt: 107.6657,
              y: 107.6657,
              name: "2011"
            },
            {
              variable: "2012",
              value: 5700220,
              wt: 108.6454,
              y: 108.6454,
              name: "2012"
            },
            {
              variable: "2013",
              value: 5739780,
              wt: 109.3994,
              y: 109.3994,
              name: "2013"
            },
            {
              variable: "2014",
              value: 5721480,
              wt: 109.0506,
              y: 109.0506,
              name: "2014"
            },
            {
              variable: "2015",
              value: 5755150,
              wt: 109.6923,
              y: 109.6923,
              name: "2015"
            }
          ],
          type: "line"
        },
        {
          name: "Overall Nursing Care Facilities",
          data: [
            {
              variable: "2005",
              value: 1576680,
              wt: 100,
              y: 100,
              name: "2005"
            },
            {
              variable: "2006",
              value: 1576160,
              wt: 99.967,
              y: 99.967,
              name: "2006"
            },
            {
              variable: "2007",
              value: 1594500,
              wt: 101.1302,
              y: 101.1302,
              name: "2007"
            },
            {
              variable: "2008",
              value: 1612660,
              wt: 102.282,
              y: 102.282,
              name: "2008"
            },
            {
              variable: "2009",
              value: 1637750,
              wt: 103.8733,
              y: 103.8733,
              name: "2009"
            },
            {
              variable: "2010",
              value: 1656810,
              wt: 105.0822,
              y: 105.0822,
              name: "2010"
            },
            {
              variable: "2011",
              value: 1669140,
              wt: 105.8642,
              y: 105.8642,
              name: "2011"
            },
            {
              variable: "2012",
              value: 1662910,
              wt: 105.4691,
              y: 105.4691,
              name: "2012"
            },
            {
              variable: "2013",
              value: 1656760,
              wt: 105.079,
              y: 105.079,
              name: "2013"
            },
            {
              variable: "2014",
              value: 1656890,
              wt: 105.0873,
              y: 105.0873,
              name: "2014"
            },
            {
              variable: "2015",
              value: 1653320,
              wt: 104.8608,
              y: 104.8608,
              name: "2015"
            }
          ],
          type: "line"
        },
        {
          name: "Overall Offices of Physicians",
          data: [
            {
              variable: "2005",
              value: 2079650,
              wt: 100,
              y: 100,
              name: "2005"
            },
            {
              variable: "2006",
              value: 2128760,
              wt: 102.3615,
              y: 102.3615,
              name: "2006"
            },
            {
              variable: "2007",
              value: 2178920,
              wt: 104.7734,
              y: 104.7734,
              name: "2007"
            },
            {
              variable: "2008",
              value: 2237800,
              wt: 107.6046,
              y: 107.6046,
              name: "2008"
            },
            {
              variable: "2009",
              value: 2272040,
              wt: 109.2511,
              y: 109.2511,
              name: "2009"
            },
            {
              variable: "2010",
              value: 2310860,
              wt: 111.1177,
              y: 111.1177,
              name: "2010"
            },
            {
              variable: "2011",
              value: 2344170,
              wt: 112.7194,
              y: 112.7194,
              name: "2011"
            },
            {
              variable: "2012",
              value: 2375780,
              wt: 114.2394,
              y: 114.2394,
              name: "2012"
            },
            {
              variable: "2013",
              value: 2420040,
              wt: 116.3677,
              y: 116.3677,
              name: "2013"
            },
            {
              variable: "2014",
              value: 2456610,
              wt: 118.1261,
              y: 118.1261,
              name: "2014"
            },
            {
              variable: "2015",
              value: 2509450,
              wt: 120.6669,
              y: 120.6669,
              name: "2015"
            }
          ],
          type: "line"
        },
        {
          name: "Overall Outpatient Care Centers",
          data: [
            {
              variable: "2005",
              value: 465560,
              wt: 100,
              y: 100,
              name: "2005"
            },
            {
              variable: "2006",
              value: 485110,
              wt: 104.1992,
              y: 104.1992,
              name: "2006"
            },
            {
              variable: "2007",
              value: 505520,
              wt: 108.5832,
              y: 108.5832,
              name: "2007"
            },
            {
              variable: "2008",
              value: 528540,
              wt: 113.5278,
              y: 113.5278,
              name: "2008"
            },
            {
              variable: "2009",
              value: 545230,
              wt: 117.1127,
              y: 117.1127,
              name: "2009"
            },
            {
              variable: "2010",
              value: 592570,
              wt: 127.2811,
              y: 127.2811,
              name: "2010"
            },
            {
              variable: "2011",
              value: 611550,
              wt: 131.3579,
              y: 131.3579,
              name: "2011"
            },
            {
              variable: "2012",
              value: 640360,
              wt: 137.5462,
              y: 137.5462,
              name: "2012"
            },
            {
              variable: "2013",
              value: 671820,
              wt: 144.3036,
              y: 144.3036,
              name: "2013"
            },
            {
              variable: "2014",
              value: 699840,
              wt: 150.3222,
              y: 150.3222,
              name: "2014"
            },
            {
              variable: "2015",
              value: 737410,
              wt: 158.392,
              y: 158.392,
              name: "2015"
            }
          ],
          type: "line"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      colors: ["#1F497D", "#C5D9F1", "#538DD5", "#C4BD97", "#948A54"]
    
});
