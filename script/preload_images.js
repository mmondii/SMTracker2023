var urlprefix = '';
var k = 0;
var l = 0;
function preloadImage(url)
{
    var img=new Image();
    img.src=url;
    img.onload = function(){iloaded()};
   
}

function iloaded(){
	k++;
}

function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function check_image_load_done(){
	if (l == k){document.getElementById('loading').style.display = 'none';}
	else
	{
		window.setTimeout(function(){check_image_load_done()},300);
	}
}

function load_images(){
	var images = unique_parameters(items,'image');
	var image_arrays = unique_parameters(items,'imagex');

	var videos = unique_parameters(items,'video');
	for (var i = 0;i<images.length;i++){
			preloadImage( urlprefix + 'images/' + images[i]);
	}

	for (var i = 0;i<image_arrays.length;i++){
		for (var j = 0; j<image_arrays[i].length;j++){
			preloadImage( urlprefix + 'images/' + image_arrays[i][j]);
		}
	}
			
	for (var i = 0;i<videos.length; i++){
		preloadImage( urlprefix + '/videos/' + images[i]);
	}

}

function load_image_animate(){
	var ld = document.getElementById('loading');
	var ctxt = ld.innerHTML;
	console.log(ctxt);
	var ntxt = 'Loading...';
	switch(ctxt){
		case 'Loading...':
		ntxt = 'Loading ..';
		break;
		case 'Loading ..':
		ntxt = 'Loading. .';
		break;
		case 'Loading. .':
		ntxt = 'Loading.. ';
		break;
		case 'Loading.. ':
		ntxt = 'Loading ..';
		break;
	}
	ld.innerHTML = ntxt;
	if (ld.style.display != 'none'){
		window.setTimeout(function(){load_image_animate()},500);
	}
}
