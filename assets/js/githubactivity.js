$(function () {
	$.ajax({
		url:'https://api.github.com/users/djhvscf/events?callback=loadBootstrapTable',
		crossDomain:true,
		dataType:"JSONP",
		type: "GET",
		success: function (datas) {loadBootstrapTable(datas);}
	});
});

var loadBootstrapTable = function (data) {
	var flatArray = [];
	$.each(data.data, function(i, element) { 
		flatArray.push(flatten(element));
	});
	
	$('#bstable').bootstrapTable({
		data: flatArray,
		height: 400,
		width: 400,
		striped: true,
		pagination: true,
		pageSize: 15,
		pageList: [10, 15, 20, 25, 30],
		search: true
	});
};

var showTable = function (id, idhidden, divhidden) {
	$('#'+id).toggle();
	$('#'+id+"p").toggle();
	$('#'+idhidden).toggle();
	$('#'+idhidden+"p").toggle();
	$('.'+divhidden).toggle();
	return false;
};

var flatten = function(data) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop ? prop+"."+i : ""+i);
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
};

var unflatten = function(data) {
    "use strict";
    if (Object(data) !== data || Array.isArray(data))
        return data;
    var result = {}, cur, prop, idx, last, temp;
    for(var p in data) {
        cur = result, prop = "", last = 0;
        do {
            idx = p.indexOf(".", last);
            temp = p.substring(last, idx !== -1 ? idx : undefined);
            cur = cur[prop] || (cur[prop] = (!isNaN(parseInt(temp)) ? [] : {}));
            prop = temp;
            last = idx + 1;
        } while(idx >= 0);
        cur[prop] = data[p];
    }
    return result[""];
};	

var getImg = function(value) {
	return '<img src="'+ value + ' width="50px" height="50px">';
};