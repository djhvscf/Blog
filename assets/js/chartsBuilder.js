function createChart(idDiv, chartType, title, subtitle, categories, xaxisTitle, yaxisTitle, series){
	$(idDiv).highcharts({
		chart: {
			type: chartType
		},
		title: {
			text: title
		},
		subtitle: {
			text: subtitle
		},
		xAxis: {
			categories: categories,
			title: {
				text: xaxisTitle
			}
		},
		yAxis: {
			title: {
				text: yaxisTitle,
				align: 'high'
			},
			labels: {
				overflow: 'justify'
			}, max: 100
		},
		tooltip: {
			valueSuffix: ' %'
		},
		plotOptions: getPlotOption(chartType),

		legend: getLegend(chartType),
		
		credits: {
			enabled: false
		},
		series: series
	});
};


function getPlotOption(chartType)
{
	var options;
	switch(chartType)
	{
		case 'bar':
		options = 
		{
			plotOptions: {
				bar: {
					dataLabels: {
						enabled: true
					}
				}
			}
		};
		return options;
		break;
		
		case 'column':
		options = 
		{
			plotOptions: {
				column: {
					dataLabels: {
						enabled: true
					}
				}
			}
		};
		return options;
		break;
		
		case 'pie':
		options =
		{
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			}
		}
		
		return options;
		break;
		
	};
};

function getLegend(chartType)
{
	var legend = {};
	if(chartType !== 'column')
	{
		var legend = {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -590,
			y: -10,
			floating: true,
			borderWidth: 1,
			backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			shadow: true
		};
	}
	return legend
};