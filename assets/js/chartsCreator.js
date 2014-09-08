function createLanguageChart()
{
	var categories =  ['Knowledge Language'];
	var series =  
			[
				{
					name: 'C#',
					data: [95],
					color: '#1abc9c',
				},
				{
					name: 'Java', 
					data: [90],
					//color: '#FF0000'
				},
				{
					name: 'VB',
					data: [80],
					//color:
				},
				{
					name: 'ASPX',
					data: [95],
					//color:
				},
				{
					name: 'AS3',
					data: [50],
					//color:
				},
				{
					name: 'C++',
					data: [10],
					//color:
				},
				{
					name: 'HTML, XML, CSS',
					data: [99],
					//color:
				},
				{
					name: 'Javascript, jQuery, Ajax',
					data: [99],
					//color:
				},
				{
					name: 'PHP',
					data: [85],
					//color:
				},
				{
					name: 'Android',
					data: [90]
					//color:
				}
			];
			createChart('#language', 'column', '', '', categories, '', '', series);
};

function createDatabaseChart()
{
	var series =  
		[
			{
				name: 'Database',
				data: [
					['MySQL',   90],
					['SQL Server 2008 R2', 95],
					['Oracle',    80],
				]
			}
		]
	createChart('#database', 'pie', '', '', null, '', '', series);
};