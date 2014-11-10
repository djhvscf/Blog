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
					data: [15],
					//color:
				},
				{
					name: 'Assembly',
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
			createChart('#language', 'column', 'Knowledge in Programming Languages', '', categories, '', '', series);
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
	createChart('#database', 'pie', 'Knowledge in Databases', '', null, '', '', series);
};

function createVersionChart()
{
	var categories =  ['Knowledge in Version Control System'];
	var series =  
				[
					{
						name: 'Microsoft SourceSafe',
						data: [100],
						//color: '#1abc9c',
					},
					{
						name: 'Git', 
						data: [95],
						//color: '#FF0000'
					},
					{
						name: 'GitHub (Windows)', 
						data: [100],
						//color: '#FF0000'
					},
					{
						name: 'TortoiseGit',
						data: [100],
						//color:
					},
					{
						name: 'Subversion',
						data: [80],
						//color:
					},
					{
						name: 'TortoiseSVN',
						data: [95],
						//color:
					},
					{
						name: 'VisualSVN',
						data: [40],
						//color:
					}
				];
	createChart('#version', 'column', 'Knowledge in Version Control System', '', categories, '', '', series);
};

function createIDEChart()
{
	var categories =  ['FlashDevelop', 'Eclipse', 'Visual Studio (2010/2012)', 'Netbeans', 'jCreator', 'Android Studio v0.8.6', 'Spring Tool Suite'];
	var series =  
				[
					{
						name: 'Knowledge in IDEs',
						data: [80, 90,100,85,100,95, 100],
						color: '#1abc9c',
					}
				];
	createChart('#ide', 'line', 'Knowledge in IDEs', '', categories, '', '', series);
};

function createTechChart()
{
	var categories =  ['Knowledge in technologies'];
	var series =  
				[
					{
						name: 'Highcharts',
						data: [100],
						//color: '#1abc9c',
					},
					{
						name: 'Hibernate', 
						data: [95],
						//color: '#FF0000'
					},
					{
						name: 'SCRUM', 
						data: [100],
						//color: '#FF0000'
					},
					{
						name: 'Entity Framework',
						data: [90],
						//color:
					},
					{
						name: 'UML',
						data: [100],
						//color:
					},
					{
						name: 'Design Patterns',
						data: [100],
						//color:
					},
					{
						name: 'Database design',
						data: [95],
						//color:
					},
					{
						name: 'NetTiers',
						data: [100],
						//color:
					},
					{
						name: 'DevExpress',
						data: [95],
						//color:
					},
					{
						name: 'AngularJS',
						data: [90],
						//color:
					},
					{
						name: 'Spring',
						data: [95],
						//color:
					},
					{
						name: 'Undescore.js',
						data: [60]
					},
					{
						name: 'Windows Presentation Foundation (WPF)',
						data: [40]
					}
				];
	createChart('#tech', 'column', 'Knowledge in technologies', '', categories, '', '', series);
};

function createPersonalChart()
{
	var categories =  ['Personal Skills'];
	var series =  
				[
					{
						name: 'Responsible',
						data: [100],
						//color: '#1abc9c',
					},
					{
						name: 'Creative', 
						data: [100],
						//color: '#FF0000'
					},
					{
						name: 'Team work', 
						data: [100],
						//color: '#FF0000'
					},
					{
						name: 'Punctual',
						data: [99],
						//color:
					},
					{
						name: 'Speaking English',
						data: [90],
						//color:
					},
					{
						name: 'Organized',
						data: [100],
						//color:
					}
				];
	createChart('#personal', 'column', 'Personal Skills', '', categories, '', '', series);
}