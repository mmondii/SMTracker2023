function display_init(){
	var g = document.getElementById('menu_toggle');
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = 1}, 0);
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = .2},200);
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = 1}, 400);
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = .2},600);
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = 1},800);
	window.setTimeout(function(){document.getElementById('menu_toggle').style.opacity = ""},1000);

}

function open_menu(){
	var d = document.getElementById('menu_dialog');
	d.style.display = "block";
}

function close_menu(){
	var d = document.getElementById('menu_dialog');
	d.style.display = "none";
}

display_init();