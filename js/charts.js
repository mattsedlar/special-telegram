 $(function () {
    Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
 });
 
/* WAGES */
 
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
            enabled: true,
            text: "Source: CEPR analysis of OES.",
            style: {
                fontSize: 12
            }
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
});
 
Highcharts.chart('median-full-time-full-year-by-race',{
      title: {
        text: "Change in Real Median Hourly Wages of Full-Time, Full-Year Healthcare Workers",
        margin: 20,
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          format: "{value}%"
        }
      },
      credits: {
        enabled: true,
        text: "Source: CEPR analysis of the ACS.",
        position: {
          align: "right",
          x: 0
        },
        style: {
          fontSize: 12
        }
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
        delayForDisplay: 10
      },
      xAxis: {
        categories: ["Overall Healthcare", "Hospitals", "Outpatient Care Center"]
      },
      series: [
        {
          name: "Asian/Other",
          data: [
            {
              category: "Overall Healthcare",
              year: null,
              value: 4.1,
              y: 4.1
            },
            {
              category: "Hospitals",
              year: null,
              value: 3.3,
              y: 3.3
            },
            {
              category: "Outpatient Care Center",
              year: null,
              value: 3.2,
              y: 3.2
            }
          ],
          type: "column"
        },
        {
          name: "Black",
          data: [
            {
              category: "Overall Healthcare",
              year: null,
              value: -0.7,
              y: -0.7
            },
            {
              category: "Hospitals",
              year: null,
              value: 2.2,
              y: 2.2
            },
            {
              category: "Outpatient Care Center",
              year: null,
              value: -3.7,
              y: -3.7
            }
          ],
          type: "column"
        },
        {
          name: "Hispanic",
          data: [
            {
              category: "Overall Healthcare",
              year: null,
              value: -1,
              y: -1
            },
            {
              category: "Hospitals",
              year: null,
              value: 6.5,
              y: 6.5
            },
            {
              category: "Outpatient Care Center",
              year: null,
              value: -5.6,
              y: -5.6
            }
          ],
          type: "column"
        },
        {
          name: "White",
          data: [
            {
              category: "Overall Healthcare",
              year: null,
              value: 2,
              y: 2
            },
            {
              category: "Hospitals",
              year: null,
              value: 4.8,
              y: 4.8
            },
            {
              category: "Outpatient Care Center",
              year: null,
              value: -0.7,
              y: -0.7
            }
          ],
          type: "column"
        }
      ],
      subtitle: {
        text: "<em>By Race, 2005 to 2015<\/em>",
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      colors: ["#1F497D", "#C5D9F1", "#538DD5", "#C4BD97", "#948A54"],
      legend: {
        margin: 3
      }
});

Highcharts.chart('median-full-time-full-year-by-race-occupation',{
      title: {
        text: "Change in Real Median Hourly Wages of Full-Time, Full-Year Healthcare Workers",
        margin: 10,
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          format: "{value}%"
        }
      },
      credits: {
        enabled: true,
        text: "Source: CEPR analysis of the ACS.",
        position: {
          align: "right",
          x: 0
        },
        style: {
          fontSize: 12
        }
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
        delayForDisplay: 10
      },
      xAxis: {
        categories: [
          {
            name: "Overall Healthcare",
            categories: ["Healthcare Professionals", "Medical Technicians", "Health Aides and Assistants"]
          },
          {
            name: "Hospitals",
            categories: ["Healthcare Professionals", "Medical Technicians", "Health Aides and Assistants"]
          },
          {
            name: "Outpatient Care Centers",
            categories: ["Healthcare Professionals", "Medical Technicians", "Health Aides and Assistants"]
          }
        ],
        labels: {
          align: "center",
          x: -2,
          autoRotation: 0,
          style: {
            fontSize: "9px"
          }
        }
      },
      subtitle: {
        text: "<em>By Race and Occupation, 2005 to 2015<\/em>",
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      series: [
        {
          group: "White",
          data: [
            {
              profession: "Healthcare Professionals",
              category: "Overall Healthcare",
              value: 1.9,
              y: 1.9
            },
            {
              profession: "Medical Technicians",
              category: "Overall Healthcare",
              value: -5.7,
              y: -5.7
            },
            {
              profession: "Health Aides and Assistants",
              category: "Overall Healthcare",
              value: -0.7,
              y: -0.7
            },
            {
              profession: "Healthcare Professionals",
              category: "Hospitals",
              value: 1.9,
              y: 1.9
            },
            {
              profession: "Medical Technicians",
              category: "Hospitals",
              value: -1.2,
              y: -1.2
            },
            {
              profession: "Health Aides and Assistants",
              category: "Hospitals",
              value: -4.6,
              y: -4.6
            },
            {
              profession: "Healthcare Professionals",
              category: "Outpatient Care Center",
              value: 3.2,
              y: 3.2
            },
            {
              profession: "Medical Technicians",
              category: "Outpatient Care Center",
              value: -1,
              y: -1
            },
            {
              profession: "Health Aides and Assistants",
              category: "Outpatient Care Center",
              value: 2.4,
              y: 2.4
            }
          ],
          type: "column",
          name: "White"
        },
        {
          group: "Black",
          data: [
            {
              profession: "Healthcare Professionals",
              category: "Overall Healthcare",
              value: -0.9,
              y: -0.9
            },
            {
              profession: "Medical Technicians",
              category: "Overall Healthcare",
              value: 0.2,
              y: 0.2
            },
            {
              profession: "Health Aides and Assistants",
              category: "Overall Healthcare",
              value: -4,
              y: -4
            },
            {
              profession: "Healthcare Professionals",
              category: "Hospitals",
              value: 6.2,
              y: 6.2
            },
            {
              profession: "Medical Technicians",
              category: "Hospitals",
              value: -3.3,
              y: -3.3
            },
            {
              profession: "Health Aides and Assistants",
              category: "Hospitals",
              value: -1,
              y: -1
            },
            {
              profession: "Healthcare Professionals",
              category: "Outpatient Care Center",
              value: -0.9,
              y: -0.9
            },
            {
              profession: "Medical Technicians",
              category: "Outpatient Care Center",
              value: -2.7,
              y: -2.7
            },
            {
              profession: "Health Aides and Assistants",
              category: "Outpatient Care Center",
              value: 0.4,
              y: 0.4
            }
          ],
          type: "column",
          name: "Black"
        },
        {
          group: "Hispanic",
          data: [
            {
              profession: "Healthcare Professionals",
              category: "Overall Healthcare",
              value: -3,
              y: -3
            },
            {
              profession: "Medical Technicians",
              category: "Overall Healthcare",
              value: -0.8,
              y: -0.8
            },
            {
              profession: "Health Aides and Assistants",
              category: "Overall Healthcare",
              value: -2.4,
              y: -2.4
            },
            {
              profession: "Healthcare Professionals",
              category: "Hospitals",
              value: -0.1,
              y: -0.1
            },
            {
              profession: "Medical Technicians",
              category: "Hospitals",
              value: 5,
              y: 5
            },
            {
              profession: "Health Aides and Assistants",
              category: "Hospitals",
              value: -3,
              y: -3
            },
            {
              profession: "Healthcare Professionals",
              category: "Outpatient Care Center",
              value: -22.4,
              y: -22.4
            },
            {
              profession: "Medical Technicians",
              category: "Outpatient Care Center",
              value: -6.4,
              y: -6.4
            },
            {
              profession: "Health Aides and Assistants",
              category: "Outpatient Care Center",
              value: 1.3,
              y: 1.3
            }
          ],
          type: "column",
          name: "Hispanic"
        },
        {
          group: "Asian/Other",
          data: [
            {
              profession: "Healthcare Professionals",
              category: "Overall Healthcare",
              value: -1,
              y: -1
            },
            {
              profession: "Medical Technicians",
              category: "Overall Healthcare",
              value: -7.1,
              y: -7.1
            },
            {
              profession: "Health Aides and Assistants",
              category: "Overall Healthcare",
              value: -2,
              y: -2
            },
            {
              profession: "Healthcare Professionals",
              category: "Hospitals",
              value: 1.6,
              y: 1.6
            },
            {
              profession: "Medical Technicians",
              category: "Hospitals",
              value: -5.7,
              y: -5.7
            },
            {
              profession: "Health Aides and Assistants",
              category: "Hospitals",
              value: 0.2,
              y: 0.2
            },
            {
              profession: "Healthcare Professionals",
              category: "Outpatient Care Center",
              value: -10.4,
              y: -10.4
            },
            {
              profession: "Medical Technicians",
              category: "Outpatient Care Center",
              value: -12.8,
              y: -12.8
            },
            {
              profession: "Health Aides and Assistants",
              category: "Outpatient Care Center",
              value: 3.9,
              y: 3.9
            }
          ],
          type: "column",
          name: "Asian/Other"
        }
      ],
      colors: ["#1F497D", "#C5D9F1", "#538DD5", "#C4BD97", "#948A54"],
      legend: {
        margin: 0
      }
});

/* EMPLOYMENT */ 

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
        enabled: true
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

Highcharts.chart('women-ethnicity-employment',{
      title: {
        text: "Employment Shares of Full-Time, Full-Year Healthcare Workers",
        margin: 20,
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      yAxis: {
        title: {
          text: null
        }
      },
      credits: {
        enabled: true,
        text: "Source and notes: CEPR analysis of the ACS.",
        position: {
          align: "left",
          x: 10
        },
        style: {
          fontSize: 12
        }
      },
      exporting: {
        enabled: true
      },
      plotOptions: {
        series: {
          turboThreshold: 0,
          stacking: "normal"
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
        pointFormat: "<span style=\"color:{point.color}\">●<\/span> {series.name} Women: <b>{point.y:,.2f}%<\/b>"
      },
      xAxis: {
        categories: [
          {
            name: "Overall Healthcare",
            categories: ["2005", "2015"]
          },
          {
            name: "Hospitals",
            categories: ["2005", "2015"]
          },
          {
            name: "Outpatient Care Centers",
            categories: ["2005", "2015"]
          }
        ],
        labels: {
          align: "center",
          x: -2,
          autoRotation: 0,
          style: {
            fontSize: "9px"
          }
        }
      },
      series: [
        {
          group: "Asian/Other",
          data: [
            {
              sex: "Women",
              variable: "overall.health.care.2005",
              value: 5,
              category: "2005",
              type: "Overall Healthcare",
              y: 5
            },
            {
              sex: "Women",
              variable: "overall.health.care.2015",
              value: 6.1,
              category: "2015",
              type: "Overall Healthcare",
              y: 6.1
            },
            {
              sex: "Women",
              variable: "hospitals.2005",
              value: 5.7,
              category: "2005",
              type: "Hospitals",
              y: 5.7
            },
            {
              sex: "Women",
              variable: "hospitals.2015",
              value: 6.8,
              category: "2015",
              type: "Hospitals",
              y: 6.8
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2005",
              value: 4.6,
              category: "2005",
              type: "Outpatient Care Center",
              y: 4.6
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2015",
              value: 5.8,
              category: "2015",
              type: "Outpatient Care Center",
              y: 5.8
            }
          ],
          type: "column",
          name: "Asian/Other",
          stack: 0
        },
        {
          group: "Black",
          data: [
            {
              sex: "Women",
              variable: "overall.health.care.2005",
              value: 13.2,
              category: "2005",
              type: "Overall Healthcare",
              y: 13.2
            },
            {
              sex: "Women",
              variable: "overall.health.care.2015",
              value: 13.4,
              category: "2015",
              type: "Overall Healthcare",
              y: 13.4
            },
            {
              sex: "Women",
              variable: "hospitals.2005",
              value: 12.3,
              category: "2005",
              type: "Hospitals",
              y: 12.3
            },
            {
              sex: "Women",
              variable: "hospitals.2015",
              value: 11.7,
              category: "2015",
              type: "Hospitals",
              y: 11.7
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2005",
              value: 9.9,
              category: "2005",
              type: "Outpatient Care Center",
              y: 9.9
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2015",
              value: 10.5,
              category: "2015",
              type: "Outpatient Care Center",
              y: 10.5
            }
          ],
          type: "column",
          name: "Black",
          stack: 0
        },
        {
          group: "Hispanic",
          data: [
            {
              sex: "Women",
              variable: "overall.health.care.2005",
              value: 7.1,
              category: "2005",
              type: "Overall Healthcare",
              y: 7.1
            },
            {
              sex: "Women",
              variable: "overall.health.care.2015",
              value: 9.4,
              category: "2015",
              type: "Overall Healthcare",
              y: 9.4
            },
            {
              sex: "Women",
              variable: "hospitals.2005",
              value: 5.8,
              category: "2005",
              type: "Hospitals",
              y: 5.8
            },
            {
              sex: "Women",
              variable: "hospitals.2015",
              value: 7.4,
              category: "2015",
              type: "Hospitals",
              y: 7.4
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2005",
              value: 8.7,
              category: "2005",
              type: "Outpatient Care Center",
              y: 8.7
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2015",
              value: 11.5,
              category: "2015",
              type: "Outpatient Care Center",
              y: 11.5
            }
          ],
          type: "column",
          name: "Hispanic",
          stack: 0
        },
        {
          group: "White",
          data: [
            {
              sex: "Women",
              variable: "overall.health.care.2005",
              value: 53.5,
              category: "2005",
              type: "Overall Healthcare",
              y: 53.5
            },
            {
              sex: "Women",
              variable: "overall.health.care.2015",
              value: 48.9,
              category: "2015",
              type: "Overall Healthcare",
              y: 48.9
            },
            {
              sex: "Women",
              variable: "hospitals.2005",
              value: 53.1,
              category: "2005",
              type: "Hospitals",
              y: 53.1
            },
            {
              sex: "Women",
              variable: "hospitals.2015",
              value: 49.4,
              category: "2015",
              type: "Hospitals",
              y: 49.4
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2005",
              value: 54.1,
              category: "2005",
              type: "Outpatient Care Center",
              y: 54.1
            },
            {
              sex: "Women",
              variable: "outpatient.care.center.2015",
              value: 49.4,
              category: "2015",
              type: "Outpatient Care Center",
              y: 49.4
            }
          ],
          type: "column",
          name: "White",
          stack: 0
        }
      ],
      subtitle: {
        text: "<em>Women By Race/Ethnicity, 2005 and 2015<\/em>",
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      colors: ["#1F497D", "#C5D9F1", "#538DD5", "#C4BD97", "#948A54"],
      legend: {
        margin: 2
      }    
});

/* EDUCATION */

Highcharts.chart('education-shares-all-industries', {
      title: {
        text: "Change in Education Shares of Full-Time, Full-Year Healthcare Workers",
        margin: 20,
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          format: "{value}%"
        }
      },
      credits: {
        enabled: true,
        text: "Source and notes: CEPR analysis of the ACS.",
        position: {
          align: "left",
          x: 10
        },
        style: {
          fontSize: 12
        }
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
        pointFormat: "<span style=\"color:{point.color}\">●<\/span> {series.name}: <b>{point.y:,.2f}% change<\/b><br/>2005: <b>{point.y2005}%<\/b><br/>2015: <b>{point.y2015}%<\/b>"
      },
      xAxis: {
        categories: [
          {
            name: "Overall Healthcare",
            categories: ["Medical Technicians", "Health Aides and Assistants"]
          },
          {
            name: "Hospitals",
            categories: ["Medical Technicians", "Health Aides and Assistants"]
          },
          {
            name: "Outpatient Care Centers",
            categories: ["Medical Technicians", "Health Aides and Assistants"]
          }
        ],
        labels: {
          align: "center",
          x: -2,
          autoRotation: 0,
          style: {
            fontSize: "9px"
          }
        }
      },
      series: [
        {
          group: "High School Degree or Less",
          data: [
            {
              category: "Overall Healthcare",
              profession: "Medical Technicians",
              value: -15.7068,
              y2005: 19.1,
              y2015: 16.1,
              y: -15.7068
            },
            {
              category: "Overall Healthcare",
              profession: "Health Aides and Assistants",
              value: -23.9604,
              y2005: 50.5,
              y2015: 38.4,
              y: -23.9604
            },
            {
              category: "Hospitals",
              profession: "Medical Technicians",
              value: -22.7027,
              y2005: 18.5,
              y2015: 14.3,
              y: -22.7027
            },
            {
              category: "Hospitals",
              profession: "Health Aides and Assistants",
              value: -28.9855,
              y2005: 41.4,
              y2015: 29.4,
              y: -28.9855
            },
            {
              category: "Outpatient Care Center",
              profession: "Medical Technicians",
              value: -6.9519,
              y2005: 18.7,
              y2015: 17.4,
              y: -6.9519
            },
            {
              category: "Outpatient Care Center",
              profession: "Health Aides and Assistants",
              value: -29.5385,
              y2005: 32.5,
              y2015: 22.9,
              y: -29.5385
            }
          ],
          type: "column",
          name: "High School Degree or Less"
        },
        {
          group: "Bachelor's Degree or More",
          data: [
            {
              category: "Overall Healthcare",
              profession: "Medical Technicians",
              value: 5.2632,
              y2005: 20.9,
              y2015: 22,
              y: 5.2632
            },
            {
              category: "Overall Healthcare",
              profession: "Health Aides and Assistants",
              value: 38.1579,
              y2005: 7.6,
              y2015: 10.5,
              y: 38.1579
            },
            {
              category: "Hospitals",
              profession: "Medical Technicians",
              value: 11.7647,
              y2005: 23.8,
              y2015: 26.6,
              y: 11.7647
            },
            {
              category: "Hospitals",
              profession: "Health Aides and Assistants",
              value: 36.8932,
              y2005: 10.3,
              y2015: 14.1,
              y: 36.8932
            },
            {
              category: "Outpatient Care Center",
              profession: "Medical Technicians",
              value: 12.963,
              y2005: 16.2,
              y2015: 18.3,
              y: 12.963
            },
            {
              category: "Outpatient Care Center",
              profession: "Health Aides and Assistants",
              value: 43.9024,
              y2005: 12.3,
              y2015: 17.7,
              y: 43.9024
            }
          ],
          type: "column",
          name: "Bachelor's Degree or More"
        }
      ],
      subtitle: {
        text: "<em>By Occupation, 2005 to 2015<\/em>",
        align: "left",
        style: {
          color: "#000000",
          useHTML: true
        }
      },
      colors: ["#1F497D", "#C5D9F1", "#538DD5", "#C4BD97", "#948A54"],
      legend: {
        margin: 3
      }    
});