var levels = [];
var worlds = [];

function initialize()
{
	if (items === null)
	{
		//Items not loaded yet, wait 100ms and try again
		window.setTimeout(function(){initialize},100);
	}
	else
	{
		//Items have been loaded
		var itemsdiv = document.getElementById('items');
		var l_id = 1;
		if( getUrlVar('key') != null) {pre_connect();}
		if( getUrlVar('offline') != null) {if (getUrlVar('offline') == 'true'){start_offline();}}
		if( getUrlVar('start_multi') != null) {if (getUrlVar('start_multi') == 'true'){multi_diag();}}

		load_images();
		//Scan for unique worlds
		items = filter_array(items,'disabled','1',1);
		worlds = unique_parameters(items,'world');
		//for each world...
		for(var i = 0;i<worlds.length;i++)
		{
			//Create row for the world
			var suppress_world_indicator = false;
			var new_world = document.createElement("div");
			    new_world.setAttribute('class','world item_row');
			var new_world_indicator = document.createElement("div");
				new_world_indicator.setAttribute('class','world_indicator');
				new_world.appendChild(new_world_indicator);
			//Get levels for the current world
			var wlevels = filter_array(items, 'world',worlds[i]);
			for(var j = 0; j<wlevels.length;j++)
			{
				if (wlevels[j]['suppress_world_indicator'] == 'true'){suppress_world_indicator = true;}
				wlevels[j]['l_id'] = l_id + ''; 
				var new_level = document.createElement("div");
					new_level.setAttribute('id', 'item' + l_id);
					new_level.setAttribute('l_id', l_id);
					new_level.setAttribute('class','item inactive');

					wlevels[j]['status'] = 'inactive';
				//Add level items 
				//Each level item needs:
					if (wlevels[j]['disabled'] != '1'){
										//level indicator,
						var new_level_indicator = document.createElement("div");
							switch(wlevels[j]['imagepos']){
								case 'right':
									 new_level_indicator.setAttribute('style','background-position:right;');
								break;
								case 'center':
									new_level_indicator.setAttribute('style','background-position:center;');
								break;
							}
							if (wlevels[j]['highlight'] != null){
								new_level_indicator.style.borderColor = wlevels[j]['highlight'];
							}
						    new_level_indicator.setAttribute('class','level_indicator');
						    
						    new_level_indicator.innerHTML = wlevels[j]['level'];

						//picture
						if (wlevels[j]['video'] != null){ 
							new_level_indicator.setAttribute('onmouseover',"mover(" + (l_id-1) + ");this.style.backgroundImage = 'url(\"videos/" + wlevels[j]['video'] + "\")';");
							new_level_indicator.setAttribute('onmouseout',"mover(" + (l_id-1) + ");this.style.backgroundImage = 'url(\"images/" + wlevels[j]['image'] + "\")';");
							
						}
						else{
							new_level_indicator.setAttribute('onmouseover',"mover(" + (l_id-1) + ");");
							new_level_indicator.setAttribute('onmouseout',"mover(" + (l_id-1) + ");");
							
						}

						  new_level_indicator.style.backgroundImage = 'url("images/' + wlevels[j]['image'] + '")'; 
						  
					//score indicator,
						var new_score_indicator = document.createElement("div");
						    new_score_indicator.setAttribute('class','score_indicator');
						    if (wlevels[j]['suppress_score_indicator'] == "1"){
						    	new_score_indicator.innerHTML = '&nbsp;';
						    }
							// if the score is "undefined" then don't render it
							else if (wlevels[j]['points'] !== undefined) {
							    new_score_indicator.innerHTML = wlevels[j]['points'];
						    }
						  
					//text,
						var new_level_text = document.createElement("div");
						    new_level_text.setAttribute('class','level_text');
						    new_level_text.innerHTML = wlevels[j]['text'];
						  
					
					//click
						switch(wlevels[j]['mode']){
							case 'toggle':
								new_level.onclick = function(){toggle(this)};
								new_level.addEventListener('contextmenu', function(ev) {
									    ev.preventDefault();
									    return false;
									}, false);
							break;
							case 'increment':
								new_level.onclick = function(){increment(this)};
								new_level.addEventListener('contextmenu', function(ev) {
									    ev.preventDefault();
									    increment(this,-1);
									    return false;
									}, false);
							break;
							case 'array':
								new_level.onclick = function(){score_array(this)};
								new_level.addEventListener('contextmenu', function(ev) {
									    ev.preventDefault();
									    score_array(this,-1);
									    return false;
									}, false);
							break;
						}

					if (wlevels[j]['mode'] == 'increment'){
						// new_level_increment_count = document.createElement("span");
						// new_level_increment_count.setAttribute('class','increment_count');
						// new_level_increment_count.setAttribute('id','item' + l_id + 'count');
						// // new_level_increment_count.innerHTML = '&nbsp;';
						// // new_level_indicator.appendChild(new_level_increment_count);
						// new_level_text.appendChild(new_level_increment_count);
					}
					if (wlevels[j]['mode'] == 'array'){
						// xi = wlevels[j]['i'];
						// wlevels[j]['status'] = 'active';
						// wlevels[j]['text'] = wlevels[j]['textx'][xi];
						// wlevels[j]['image'] = wlevels[j]['imagex'][xi];
						// if (wlevels[j]['videox'] != null){ 
						// 	wlevels[j]['video'] = wlevels[j]['videox'][xi];
						// }
						// wlevels[j]['points'] = wlevels[j]['pointsx'][xi];
					}
					
					//tooltip,
					new_level_indicator.appendChild(new_level_text); 
					new_level_indicator.appendChild(new_score_indicator); 
					new_world.appendChild(new_level);
					new_level.appendChild(new_level_indicator); 
					l_id++;
				}
			}
		if (!suppress_world_indicator){new_world_indicator.innerHTML = worlds[i];}
		itemsdiv.appendChild(new_world);
		}
		if( getUrlVar('items') != null) {
			multi_apply(expand_status_json(JSON.parse(getUrlVar('items'))));
		}

		
	}

	disable_all();
if (getUrlVar('orientation') == 'right'){flip_orientation();}
}


window.setTimeout(function(){initialize},1);
