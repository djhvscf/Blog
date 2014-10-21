function getKeyCode(e) {
    var t = getObject("charkey"),
		n = e.which ? e.which : event.keyCode;
    t.value = String.fromCharCode(n);
    if (n == 8) t.value = "backspace";
    if (n == 9) t.value = "tab";
    if (n == 13) t.value = "enter";
    if (n == 16) t.value = "shift";
    if (n == 17) t.value = "ctrl";
    if (n == 18) t.value = "alt";
    if (n == 19) t.value = "pause/break";
    if (n == 20) t.value = "caps lock";
    if (n == 27) t.value = "escape";
    if (n == 33) t.value = "page up";
    if (n == 34) t.value = "page down";
    if (n == 35) t.value = "end";
    if (n == 36) t.value = "home";
    if (n == 37) t.value = "left arrow";
    if (n == 38) t.value = "up arrow";
    if (n == 39) t.value = "right arrow";
    if (n == 40) t.value = "down arrow";
    if (n == 45) t.value = "insert";
    if (n == 46) t.value = "delete";
    if (n == 91) t.value = "left window";
    if (n == 92) t.value = "right window";
    if (n == 93) t.value = "select key";
    if (n == 96) t.value = "numpad 0";
    if (n == 97) t.value = "numpad 1";
    if (n == 98) t.value = "numpad 2";
    if (n == 99) t.value = "numpad 3";
    if (n == 100) t.value = "numpad 4";
    if (n == 101) t.value = "numpad 5";
    if (n == 102) t.value = "numpad 6";
    if (n == 103) t.value = "numpad 7";
    if (n == 104) t.value = "numpad 8";
    if (n == 105) t.value = "numpad 9";
    if (n == 106) t.value = "multiply";
    if (n == 107) t.value = "add";
    if (n == 109) t.value = "subtract";
    if (n == 110) t.value = "decimal point";
    if (n == 111) t.value = "divide";
    if (n == 112) t.value = "F1";
    if (n == 113) t.value = "F2";
    if (n == 114) t.value = "F3";
    if (n == 115) t.value = "F4";
    if (n == 116) t.value = "F5";
    if (n == 117) t.value = "F6";
    if (n == 118) t.value = "F7";
    if (n == 119) t.value = "F8";
    if (n == 120) t.value = "F9";
    if (n == 121) t.value = "F10";
    if (n == 122) t.value = "F11";
    if (n == 123) t.value = "F12";
    if (n == 144) t.value = "num lock";
    if (n == 145) t.value = "scroll lock";
    if (n == 186) t.value = ";";
    if (n == 187) t.value = "=";
    if (n == 188) t.value = ",";
    if (n == 189) t.value = "-";
    if (n == 190) t.value = ".";
    if (n == 191) t.value = "/";
    if (n == 192) t.value = "`";
    if (n == 219) t.value = "[";
    if (n == 220) t.value = "\\";
    if (n == 221) t.value = "]";
    if (n == 222) t.value = "'";
    var r = getObject("spnCharCode");
    r.innerHTML = "KeyCode:  " + n;
	$( "*" ).removeClass("trselected");
	$('#'+t.value.toLowerCase().replace(" ", "").replace("/","") +'').parent().addClass("trselected");
	
    return false
}

function getObject(e) {
    var t;
    if (document.all) {
        if (typeof e == "string") {
            return document.all(e)
        } else {
            return e.style
        }
    }
    if (document.getElementById) {
        if (typeof e == "string") {
            return document.getElementById(e)
        } else {
            return e.style
        }
    }
    return null
}