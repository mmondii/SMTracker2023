var session = false;

function g(theUrl, callback) //https://stackoverflow.com/questions/247483/http-get-request-in-javascript
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function start_offline(){
	document.getElementById('initialize_multi').style.display = 'none';
	document.getElementById('offline_multi').style.display = 'block';
}

function go_online(){
	window.location = "https://xeroplanes.com/smb3/s3?start_multi=true&items=" + JSON.stringify(compress_status_json(reduce_array(items,['l_id','status'])));
}

function new_session(){
	g('server/new_session.php', function(data){
		session = data;
		multi_send();
		document.getElementById('disconnect').style.display = 'block';
		document.getElementById('session_label').innerHTML = 'Connected. Key:';
		document.getElementById('session_key').innerHTML = data + "</br></br>Share the above key or this link:</br><a href = 'https://xeroplanes.com/smb3/s3/?key=" + data + "'>xeroplanes.com/smb3/s3/?key=" +  data + "</a>";
	});
}

function compress_status_json(full_array){
	var compressed_array = [];
	for (var i=0;i<full_array.length;i++){
		compressed_array.push({"i":full_array[i]['l_id'],"s":full_array[i]['status']})
	}
	for (var i=0;i<compressed_array.length;i++){
		if (compressed_array[i]['s'] == 'active'){compressed_array[i]['s'] = 'a'}
		if (compressed_array[i]['s'] == 'inactive'){compressed_array[i]['s'] = 'i'}
	}
	return(compressed_array);
}

function expand_status_json(compressed_array){
	var full_array = [];
	for (var i=0;i<compressed_array.length;i++){
		full_array.push({"l_id":compressed_array[i]['i'],"status":compressed_array[i]['s']})
	}
	for (var i=0;i<full_array.length;i++){
		if (full_array[i]['status'] == 'a'){full_array[i]['status'] = 'active'}
		if (full_array[i]['status'] == 'i'){full_array[i]['status'] = 'inactive'}
	}
	return(full_array);
}

function multi_send(){
	if (session != false)
	{
		g('server/send.php?key='+session+'&items='+JSON.stringify(compress_status_json(reduce_array(items,['l_id','status']))), function(data){});
	}
}

function multi_sync(){
	g('server/sync.php?key='+session, function(data){multi_apply(expand_status_json(JSON.parse(data)));});
}

function multi_apply(tr_items){
	for(var i=0;i<tr_items.length;i++)
	{
		tr_id   = tr_items[i]['l_id'];
		eq_item = filter_array(items,'l_id',tr_id);
		if (tr_items[i]['status'] != eq_item[0]['status'])
		{
			eq_item[0]['status'] = tr_items[i]['status'];
			apply_item_status(eq_item);
		}
	}
	update_score();
}

function multi_repeater(){
	if (session != false){
		multi_sync();	
	}
}

function disconnect(){
	session = false;
	document.getElementById('disconnect').style.display = 'none';
	cancelmulti();
	multi_diag();
}

window.setInterval(function(){multi_repeater()},3000);

function pre_connect(){
	session = getUrlVar('key');
	multi_sync();
	document.getElementById('disconnect').style.display = 'block';
	document.getElementById('session_label').innerHTML = 'Connected. Key:';
	document.getElementById('session_key').innerHTML = session + "</br></br>Share the above key or this link:</br><a href = 'https://xeroplanes.com/smb3/s3/?key=" + session + "'>xeroplanes.com/smb3/s3/?key=" +  session + "</a>";
	document.getElementById('initialize_multi').style.display = 'none';
	document.getElementById('parameters').style.display = 'block';
}


function newmulti(){
	document.getElementById('initialize_multi').style.display = 'none';
	document.getElementById('parameters').style.display = 'block';
	new_session();
}

function join_session(){
	test_key = document.getElementById('key_entry').value;
	document.getElementById('connect_status').innerHTML = "Connecting...";
	document.getElementById('join_multi').style.display = 'none';
	document.getElementById('test_connect').style.display = 'block';
	g('server/sync.php?key='+test_key, function(data)
	{
		if (data == '')
		{
			document.getElementById('connect_status').innerHTML = "Connection failed.";
		}
		else
		{	
			session = test_key;
			document.getElementById('session_label').innerHTML = 'Connected. Key:';
			document.getElementById('session_key').innerHTML = session;
			document.getElementById('test_connect').style.display = 'none';
			document.getElementById('parameters').style.display = 'block';
			multi_apply(JSON.parse(data));
		}
		
	});
}

function joinmulti(){
	document.getElementById('initialize_multi').style.display = 'none';
	document.getElementById('join_multi').style.display = 'block';
}

function hidemulti(){
	document.getElementById('multi_dialog').style.display = "none";
}

function cancelmulti(){
	document.getElementById('parameters').style.display = "none";
	document.getElementById('join_multi').style.display = "none";
	document.getElementById('test_connect').style.display = "none";
	document.getElementById('initialize_multi').style.display = "block";
}

function multi_diag(){
	document.getElementById('multi_dialog').style.display = "block";
}