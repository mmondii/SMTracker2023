/*
	GIFFI'S MOD XDDDD

*/


var last_increment = false;
var tooltip_timeout;
var tooltip_timeoutt;
var tooltip_timeout_checks;
var tooltip_locked = false;
var images_enabled = true;
var videos_enabled = true;
var orientation = 'left';

var ban_on_toggle = false;
// signal from a html button
function toggle_ban(element) {
	close_menu();
	ban_on_toggle = !ban_on_toggle;

	element.setAttribute("class", ban_on_toggle ? "ban_toggled" : "ban_toggle");
}

function toggle(xdiv){
	var level_id = xdiv.getAttribute('l_id');
	//Determine whether to activate or deactivate
	itemx = filter_array(items,'l_id',level_id);
	
	if (ban_on_toggle === false)
	{
		if (itemx[0]['status'] == 'banned')
			return;

		if (itemx[0]['status'] == 'inactive')
		{
			itemx[0]['status'] = 'active';
		}
		else
		{
			itemx[0]['status'] = 'inactive';
		}
		update_score();
	}
	else
	{
		if (itemx[0]['status'] == 'banned')
		{
			// ! hack lmao
			itemx[0]['status'] = itemx[0]['status_before_ban'];
		}
		else
		{
			itemx[0]['status_before_ban'] = itemx[0]['status'];
			itemx[0]['status'] = 'banned';
		}
	}

	multi_send();
	apply_item_status(itemx);
	
}

function toggle_images(){if (images_enabled == true){images_enabled = false;}else{images_enabled = true;} reapply_all_items()}
function toggle_videos(){if (videos_enabled == true){videos_enabled = false;}else{videos_enabled = true;} reapply_all_items()}


function flip_orientation(){
	if (orientation == 'left'){orientation = 'right'}
		else{orientation = 'left';		}
		set_orientation();
}

function reapply_all_items(){
	for (var i = items.length - 1; i >= 0; i--) {
		apply_item_status([items[i]]);
	}
}

function set_orientation(){
	if (orientation == 'left'){
		var x = document.getElementsByClassName('item');
		for (var i = x.length - 1; i >= 0; i--) {
			x[i].style.float = "left";
		}

		var x = document.getElementsByClassName('world_indicator');
		for (var i = x.length - 1; i >= 0; i--) {
			x[i].style.float = "left";
		}

		ss = document.getElementById('score');
		ss.style.float = 'left';
		ss.style.textAlign = 'left';

		sl = document.getElementById('score_label');
		sl.style.float = 'left';
		sl.style.textAlign = 'left';

		sr = document.getElementById('score_row');
		sr.style.float = 'left';
		sr.style.textAlign= 'left';



		reverseChildren(sr);
	}

	if (orientation == 'right')
	{
		var x = document.getElementsByClassName('item');
		for (var i = x.length - 1; i >= 0; i--) {
			x[i].style.float = "right";
		}

		var x = document.getElementsByClassName('world_indicator');
		for (var i = x.length - 1; i >= 0; i--) {
			x[i].style.float = "right";
		}

		ss = document.getElementById('score');
		ss.style.float = 'right';
		ss.style.textAlign = 'right';

		sl = document.getElementById('score_label');
		sl.style.float = 'right';
		sl.style.textAlign = 'right';

		sr = document.getElementById('score_row');
		sr.style.float = 'right';
		sr.style.textAlign= 'right';

		reverseChildren(sr);
	}
	
}

function disable_all(){
	for (var i=0;i<items.length;i++){
		if (items[i]['mode'] 	== 'array'){

			items[i]['status'] 	= 'active';			
			items[i]['i'] 		= 0;			
			items[i]['text']	= items[i]['textx'][0];			
			items[i]['points']  = items[i]['pointsx'][0];			
		}else
		{
		items[i]['status'] = 'inactive';
		}
		apply_item_status([items[i]]);
	}
	multi_send();
	update_score();
}

function apply_item_status(xitem){
	// console.log(xitem);
	status_class = xitem[0]['status'];


	if (xitem[0]['extra_class'] === undefined)
	{
		xxclass = ''
	}
	else
	{
		xxclass = ' ' + xitem[0]['extra_class']
	}

	xdiv = document.getElementById('item' + xitem[0]['l_id']);

	// console.log(xitem);
	if (xitem[0]['mode'] == 'increment')
	{ 
		if (xitem[0]['status'] == 'inactive')
		{
			document.querySelector("#item" + xitem[0]['l_id'] + " > div > div.level_text").innerHTML = xitem[0]['text'];
		}
		else
		{
			document.querySelector("#item" + xitem[0]['l_id'] + " > div > div.level_text").innerHTML = xitem[0]['text'] + ' x' + xitem[0]['status'];
			// document.getElementById('item' + xitem[0]['l_id'] + 'count').innerHTML = ' x' + xitem[0]['status'];}
		}
	}

	if (images_enabled == true){
		xdiv.getElementsByClassName('level_indicator')[0].style.backgroundImage = 'url("images/' + xitem[0]['image'] + '")'; 
	}
	else
	{
		xdiv.getElementsByClassName('level_indicator')[0].style.backgroundImage = ''; 
	}

	if (xitem[0]['mode'] == 'array'){
		i = xitem[0]['i'];

		if (xitem[0]['statusx'] === undefined){
		status_class = xitem[0]['status'];
	}
	else{
		status_class = xitem[0]['statusx'][i];
	}


	pointsx = xitem[0]['pointsx'];
	xdiv.getElementsByClassName('level_text')[0].innerHTML = xitem[0]['textx'][i];
	xdiv.getElementsByClassName('score_indicator')[0].innerHTML = pointsx[i]
	if (xitem[0]['videox'] != null) { 
		if (videos_enabled == true) {
			xdiv.getElementsByClassName('level_indicator')[0].setAttribute('onmouseover',"this.style.backgroundImage = 'url(\"videos/" + xitem[0]['videox'][i] + "\")';");		
			xdiv.getElementsByClassName('level_indicator')[0].setAttribute('onmouseout',"this.style.backgroundImage = 'url(\"images/" + xitem[0]['imagex'][i] + "\")';");			
				
			}
		}
		if (images_enabled == true){
			xdiv.getElementsByClassName('level_indicator')[0].style.backgroundImage = 'url("images/' + xitem[0]['imagex'][i] + '")'; 
		}
		else
		{
			xdiv.getElementsByClassName('level_indicator')[0].style.backgroundImage = ''; 
		}
	}
	if (xitem[0]['extra_class'] !== undefined){
	
		// alert(xxclass);
		xdiv.setAttribute('class','item ' + status_class + xxclass);
	}
	else
	{
		xdiv.setAttribute('class','item ' + status_class);
	}
}

function update_score(){
	var new_score = 0;
	for(var i= 0; i<items.length;i++){
		xitem = items[i];
		if(xitem['status'] == 'active'){new_score = new_score + parseFloat(xitem['points'])}
		if(parseFloat(xitem['status']) + '' == xitem['status']){new_score = new_score + parseFloat(xitem['status']) * parseFloat(xitem['points'])} 
	}
	//Update score
		score_div = document.getElementById('score');
		score_div.innerHTML = new_score + '';
}

function score_array(xdiv, decrement = 0){
	var level_id = xdiv.getAttribute('l_id');
	itemx = filter_array(items,'l_id',level_id);
	textx = itemx[0]['text'];
	textxx = itemx[0]['textx'];
	pointsxx = itemx[0]['pointsx'];

	var i = textxx.length;
	while (textx != textxx[i] & i>=0){
		i--;
	}

	if (decrement == -1){
		if (i == 0){
			if (itemx[0]['array_end'] == 'reset'){
				i = textxx.length - 1;
			}
			if (itemx[0]['array_end'] == 'countup'){
				i = 0;
			}
		}else{
		i--;
		}
	}
	else
	{
		if (i == textxx.length-1){
			if (itemx[0]['array_end'] == 'reset'){
				i = 0;
			}
			if (itemx[0]['array_end'] == 'countup'){
				i = textxx.length;
				itemx[0]['pointsx'].push(pointsxx[i-1]+pointsxx[i-1]-pointsxx[i-2]);
				itemx[0]['textx'].push(i + ' ' + itemx[0]['textx'][i-1].split(/ (.*)/)[1]);
				itemx[0]['imagex'].push(itemx[0]['imagex'][i-1]);
				
				// itemx[0]['videox'].push( itemx[0]['videox'][i-1]);
			}
		}else{
		i++;
		}
	}


	itemx[0]['text'] = textxx[i];
	itemx[0]['points'] = pointsxx[i];
	itemx[0]['i'] = i;

	multi_send();
	apply_item_status(itemx);
	update_score();


}


function increment(xdiv, decrement = 0){


	last_increment = xdiv;
	var level_id = xdiv.getAttribute('l_id');
	//Determine whether to activate or deactivate
		itemx = filter_array(items,'l_id',level_id);
		if (decrement == -1){
			if (itemx[0]['status'] != 'inactive'){
				itemx[0]['status'] = (parseFloat(itemx[0]['status'])-1) + '';	
			}
		}else{
		if (itemx[0]['status'] == 'inactive'){
			itemx[0]['status'] = '1';

		}else{
			itemx[0]['status'] = (parseFloat(itemx[0]['status'])+1) + '';
		}}

		if (itemx[0]['status'] == '0' || itemx[0]['status'] == 'inactive'){
			itemx[0]['status'] = 'inactive';
		}

		multi_send();

		apply_item_status(itemx);
		update_score();
}



function mover(x){
	// tooltip_locked = false;
	tooltip_write(items[x]['tooltip']);
	tooltip_timeout_checks = 5;
	
}

function mout(x){
	// tooltip_locked = false;
	// tooltip_timeout_checks = 2;
	//console.log(items[x]);
}

function decrement(){
	if (last_increment != false){
		var level_id = last_increment.getAttribute('l_id');
		//Determine whether to activate or deactivate
		itemx = filter_array(items,'l_id',level_id);
		if (itemx[0]['status'] == '1' || itemx[0]['status'] == 'inactive'){
			itemx[0]['status'] = 'inactive';

		}else{
			itemx[0]['status'] = (parseFloat(itemx[0]['status'])-1) + '';

		}
		multi_send();
		apply_item_status(itemx);
		update_score();
	}
}


function tooltip_write(text){
	tooltip_timeout_checks = 2;
	var x = document.getElementById('tooltip');
	if(x.innerHTML == 'Tooltip disabled'){
		if (text == 'Tooltip enabled'){
			x.innerHTML = text;
		}
	}
	else{
		x.innerHTML = text;
	}
	tooltip_timeout();
}

function tooltip_timeout(){
	if(tooltip_locked == false){
	var x = document.getElementById('tooltip');
	if (tooltip_timeout_checks<= 0)
	{
		x.innerHTML = '';
	}
	else
	{
		tooltip_timeout_checks--;
	}

	if (x.innerHTML == ''){
		x.style.backgroundColor = '#000';
	}
	else{
		x.style.backgroundColor = '#222';
	}}

}


function tooltip_collapse(){
	tooltip_write('');
}

function tooltip_hide_notify(){
	var x = document.getElementById('tooltip');
	var y = x.innerHTML;
	if (y == 'Tooltip enabled' || y == 'Tooltip enabled'){
		tooltip_collapse();
	}
}

function tooltip_toggle(){
	var x = document.getElementById('tooltip');
	// console.log(x);
	if (x.style.display == 'none' || x.innerHTML == 'Tooltip disabled')
	{
		x.style.display = 'block';
		tooltip_write('Tooltip enabled');
		clearTimeout(tooltip_timeoutt);
	}
	else
	{
		tooltip_write('Tooltip disabled');
		tooltip_timeoutt = window.setTimeout(function(){document.getElementById('tooltip').style.display = 'none';},5000);
	}
}



window.setInterval(function(){tooltip_timeout();},1000);