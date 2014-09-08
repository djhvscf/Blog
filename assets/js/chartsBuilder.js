function(idDiv, type, title, subtitle, categories, xaxisTitle, yaxisTitle, series){
	$(idDiv).highcharts({
		chart: {
			type: type
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
			}
		},
		tooltip: {
			valueSuffix: ' percentage'
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -40,
			y: 100,
			floating: true,
			borderWidth: 1,
			backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: series
	});
};