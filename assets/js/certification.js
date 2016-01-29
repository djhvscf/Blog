var sprintf = $.fn.bootstrapTable.utils.sprintf,

	data = [
		{
			certification: 'CCNA - Switching & Routing - Módulo 1',
			status: 'Certified',
			certifiedBy: 'Cisco Academy',
			certifiedByUrl: 'http://www.cisco.com/',
			certifiedOn: 'August 2015',
			moreInfo: 'Course information',
			moreInfoUrl: 'https://www.netacad.com/courses/ccna/',
			certificate: 'Certificate',
			certificateUrl: ''
		},
		{
			certification: 'Scrum Master Certified',
			status: 'In Progress',
			certifiedBy: 'ScrumStudy',
			certifiedByUrl: 'http://www.scrumstudy.com/',
			certifiedOn: '',
			moreInfo: 'Course information',
			moreInfoUrl: 'http://www.scrumstudy.com/scrum-master-certification.asp',
			certificate: 'Certificate',
			certificateUrl: ''
		},
		{
			certification: 'Full stack web development certification',
			status: 'In Progress',
			certifiedBy: 'Coursera',
			certifiedByUrl: 'https://www.coursera.org/',
			certifiedOn: '',
			moreInfo: 'Course information',
			moreInfoUrl: 'https://www.coursera.org/specializations/full-stack',
			certificate: 'Certificate',
			certificateUrl: ''
		},
		{
			certification: 'Basic Android',
			status: 'Certified',
			certifiedBy: 'Universidad Cenfotec',
			certifiedByUrl: 'https://www.ucenfotec.ac.cr/',
			certifiedOn: 'October 2013',
			moreInfo: 'Course information (Spanish)',
			moreInfoUrl: 'https://drive.google.com/file/d/0B0VokOTJJG_lVGFad1JFbGhZWW8/view?usp=sharing',
			certificate: 'Certificate',
			certificateUrl: ''
		},
		{
			certification: 'Scrum Fundamentals Certified',
			status: 'Certified',
			certifiedBy: 'ScrumStudy',
			certifiedByUrl: 'http://www.scrumstudy.com/',
			certifiedOn: 'January 2016',
			moreInfo: 'Course information',
			moreInfoUrl: 'http://www.scrumstudy.com/Scrum-Fundamentals-Certified.asp',
			certificate: 'Certificate',
			certificateUrl: 'https://drive.google.com/file/d/0B0VokOTJJG_lMnZ4Wll5cjBhYWM/view?usp=sharing'
		},
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
};

var getInfo = function (value, row, i) {
	return '<a href="'+ row.moreInfoUrl + '" target=_"blank">'+ value + '</a>';
};

var getCertificate = function (value, row, i) {
	if (row.certificateUrl !== '') {
		return '<a href="'+ row.certificateUrl + '" target=_"blank">'+ value + '</a>';
	} else {
		return '';
	}
};