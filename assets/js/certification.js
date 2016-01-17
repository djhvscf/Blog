var sprintf = $.fn.bootstrapTable.utils.sprintf,

	data = [
		{
			certification: 'CCNA - Switching & Routing - Módulo 1',
			status: 'Certified',
			certifiedBy: 'Cisco Academy',
			certifiedByUrl: 'http://www.cisco.com/',
			certifiedOn: 'August 2015',
			info: ''
		},
		{
			certification: 'Scrum Master Certified',
			status: 'In Progress',
			certifiedBy: 'ScrumStudy',
			certifiedByUrl: 'http://www.scrumstudy.com/',
			certifiedOn: '-',
			info: ''
		}
	];

$(function () {
	loadCertifications();
});

var loadCertifications = function () {
	
	$('#bstable').bootstrapTable({
		data: data,
		height: 400,
		width: 400,
		striped: true,
		pagination: false,
		search: true
	});
};

var getAnchor = function(value, row, i) {
	return '<a href="'+ row.certifiedByUrl + '" target=_"blank">'+ value + '</a>';
};

var getStatus = function (value, row, i) {
	var color = "#99ff99";
	if (row.status === "In Progress") {
		color = "#ffffb2";
	}
	
	return sprintf('<div style="background-color: %s">%s</div>', color, value);
}