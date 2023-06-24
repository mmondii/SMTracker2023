//Returns whether or not an array contains a value/item
function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }    }    return false; }

  function getUrlVar(name) {
   return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

//  Return all unique values of a particular property in a json array
//  (useful for collecting unique worlds across all items)
  function unique_parameters(json_arr, status){
  	var uniq_status = [];
  	for(var i = 0; i< json_arr.length; i++){
  		x = json_arr[i][status];
  		if (!contains(uniq_status, x)){if (x !== undefined){uniq_status.push(x);}}
  	}
  	return(uniq_status);
  }

//  Return all items in an array with a particular property matching a particular value
//  (useful for getting all levels in a particular world)
  function filter_array(json_arr, propertyx, statusx, inverse = 0){
    var filtered_array = [];
    
    for(var i = 0; i< json_arr.length; i++){
      x = json_arr[i][propertyx];
      if (x == statusx & inverse == 0){filtered_array.push(json_arr[i])}
      if (x != statusx & inverse == 1){filtered_array.push(json_arr[i])}
    }
    return(filtered_array);
  }

// Returns an array with only specific properties (useful for reducing array size for synchronization)
  function reduce_array(json_arr, property_arr){
    var reduced_array = []
    for(var i =0;i<json_arr.length;i++){
      var xitem = {};
      for(j = 0;j<property_arr.length;j++){
        xitem[property_arr[j]] = json_arr[i][property_arr[j]];
      }
    reduced_array.push(xitem);
    }
    return(reduced_array);
  }

function reverseChildren(parent) {
        for (var i = 1; i < parent.childNodes.length; i++){
            parent.insertBefore(parent.childNodes[i], parent.firstChild);
        }
    }

  function pressed(e){
  // console.log(e);
  //116 = T = TOGGLE TOOLTIP
  if (e.keyCode == 116){
    tooltip_toggle();
  }

  //105 = I = toggle images
  if (e.keyCode == 105){toggle_images();}

    //105 = V = toggle videos
  if (e.keyCode == 118){toggle_videos();}

    //114 = F = FLIP
  if (e.keyCode == 102){flip_orientation();}

  //114 = R = REFRESH
  if (e.keyCode == 114){disable_all();}
  
  //45 = - = SUBTRACK INCREMENT
  if (e.keyCode == 45){   decrement();  }


  if (e.keyCode == 109){   multi_diag(); close_menu(); }
  // console.log(e.keyCode);
}