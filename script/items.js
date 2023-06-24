/* Supported item parameters
	world 						grouping (row) and row indicator text
	level						level indicator to show over image
	text  						text description to show in tracker
	image 						image file in images folder to show
	video 						.gif file in video folder to show when mouseover
	points 						number of points for an item
	tooltip						description of item
	imagepos					center or right (left is default)
	disabled					1 or 0
	suppress_world_indicator	true or false
	suppress_score_indicator	1 or 0 
	highlight					html border color 
	banned                      
	mode
		toggle
		increment
		array
			text changes to textx
			image changes to imagex
			points changes to pointsx
			array_end			countup or repeat



*/

var items = 
[

// WORLD 1 ---------------------------


{
	"world"		: "1"				,
	"level"		: "2"				,
	"text"		: "1-2 xxx"			,
	"image"		: "1-2.png"			,
	// "video"		: "1-5.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: " "				,
	"disabled"	: "0"				,
	"banned"    : "1"               ,
},

{
	"world"		: "1"				,
	"level"		: "F"				,
	"text"		: "fort clip"			,
	"image"		: "1-f.png"			,
	// "video"		: "1-5.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: " "				,
	"disabled"	: "0"				,
	"banned"    : "1"               ,
},

{
	"world"		: "1"				,
	"level"		: "5"				,
	"text"		: "mfp"			,
	"image"		: "mfptunnel.png"			,
	// "video"		: "1-5.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: "World 1: 1-5 Tunnel P speed (One attempt) = 1 point"				,
	"disabled"	: "0"				,
},

{
	"world"		: "1"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"		,
	"image"		: "fire1.png"				,
	//"video"		: "1-CD.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "firekill"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
	"imagepos"	: "right"			,
}, 


// WORLD 2 ---------------------------

{
	"world"		: "2"				,
	"level"		: "F"				,
	"text"		: "early p-speed"		,
	"image"		: "2-f.png"			,
	// "video"		: "2-2.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "2"				,
	"level"		: "4"				,
	"text"		: "boomerang snipe"		,
	"image"		: "2-4.png"			,
	// "video"		: "2-2.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "2"				,
	"level"		: "P"				,
	"text"		: "pyramid 284"		,
	"image"		: "pyramid.png"			,
	// "video"		: "2-2.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "2"				,
	"level"		: "C"				,
	"text"		: "Firekill 221"		,
	"image"		: "fire2.png"			,
	//"video"		: "2-sunkill.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "firekill"			,
	"tooltip"	: "",
	"disabled"	: "0"				,
},


// WORLD 3 ---------------------------

{
	"world"		: "3"				,
	"level"		: "2"				,
	"text"		: "xxx"			,
	"image"		: "3-2.png"			,
	// "video"		: "3-1.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "3"				,
	"level"		: "F1"				,
	"text"		: "Door 3"			,
	"image"		: "door3.png"		,
	//"video"		: "3-F1.gif"		,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"cateory"	: "risk"			, 
	"tooltip"	: "World 3: Door 3 = 1 point"				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "3"				,
	"level"		: "9"				,
	"text"		: "h-hyppy"			,
	"image"		: "3-9.png"		,
	//"video"		: "3-BG.gif"		,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"cateory"	: "skill"			, 
	"tooltip"	: "World 3: Avoid getting any water hammer bro battles = 1 point"				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "3"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"			,
	"image"		: "fire3.png"		,
	// "video"		: "3-BG.gif"		,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"cateory"	: "firekill"			, 
	"tooltip"	: "World 3: Get runaway bro = 1 point"				,
	"disabled"	: "0"				,
}, 

// WORLD 4 ---------------------------

{
	"world"		: "4"				,
	"level"		: "3"				,
	"text"		: "288"			,
	"image"		: "4-3.png"				,
	//"video"		: "4-3.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"imagepos"	: "center"			,
	"disabled"	: "0"				,
}, 

{
	"world"		: "4"				,
	"level"		: "F1"				,
	"text"		: "288"			,
	"image"		: "4-f1.png"				,
	//"video"		: "4-3.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"imagepos"	: ""			,
	"disabled"	: "0"				,
},
 
{
	"world"		: "4"				,
	"level"		: "4"				,
	"text"		: "frog xxx"		,
	"image"		: "4-4.png"				,
	// "video"		: ""				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"category"	: "skill"			,
	"disabled"	: "0"				,
}, 

{
	"world"		: "4"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"			,
	"image"		: "fire4.png"				,
	//"video"		: "4-F2P.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 


// WORLD 5 ---------------------------

{
	"world"		: "5"				,
	"level"		: "3"				,
	"text"		: "Shoe xxx"			,
	"image"		: "5-3.png"			,
	// "video"		: "5-2.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "5"				,
	"level"		: "T"				,
	"text"		: "ei kaaleja"			,
	"image"		: "kaali.png"				,
	//"video"		: "7-T.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"imagepos"	: "center"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "5"				,
	"level"		: "F2"				,
	"text"		: "lava clip"			,
	"image"		: "5-f2.png"			,
	// "video"		: ""			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "risk"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "5"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"			,
	"image"		: "fire5.png"			,
	// "video"		: ""			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "risk"			,
	"tooltip"	: " "				,
	"disabled"	: "0"				,
}, 

// WORLD 6 ---------------------------

{
	"world"		: "6"				,
	"level"		: "5"				,
	"text"		: "kurren potku"			,
	"image"		: "6-5.png"				,
	//"video"		: "6-F1.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"imagepos"	: "right"			,
	"tooltip"	: " "				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "6"				,
	"level"		: "9"				,
	"text"		: "1try jump"		,
	"image"		: "69walljump.png"				,
	//"video"		: "6-lowbros.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "6"				,
	"level"		: "10"				,
	"text"		: "xxx"		,
	"image"		: "6-10.png"				,
	// "video"		: "6-lowbros.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "reward"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "6"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"		,
	"image"		: "fire6.png"				,
	//"video"		: "6-Cclip.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"				,
	"imagepos"	: "right", 
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 


// WORLD 7 --------------------------

{
	"world"		: "7"				,
	"level"		: "1"				,
	"text"		: "clip"		,
	"image"		: "7-1.png"			,
	//"video"		: "7-1.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "7"				,
	"level"		: "F1"				,
	"text"		: "tanooki kill"		,
	"image"		: "tanooki.png"			,
	// "video"		: "7-1.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"category"	: "skill"			,		
	"tooltip"	: "World 7: 7-Fort 1 Get 183 or higher WITHOUT using a p-wing = 1 point"				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "7"				,
	"level"		: "9"				,
	"text"		: "No clips xxx"		,
	"image"		: "7-9.png"			,
	// "video"		: "7-6.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "7"				,
	"level"		: "C"				,
	"text"		: "firekill xxx"		,
	"image"		: "fire7.png"				,
	// "video"		: "nobump.gif"				,
	"imagepos"	: "center"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 
// WORLD 8 --------------------------

{
	"world"		: "8"				,
	"level"		: "N"				,
	"text"		: "navy flower"			,
	"image"		: "navy.png"		,
	//"video"		: "8-T1b.gif"		,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "8"				,
	"level"		: "H1&H3"				,
	"text"		: "times"		,
	"image"		: "hands.png"				,
	// "video"		: "8-hande.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 

{
	"world"		: "8"				,
	"level"		: "1"				,
	"text"		: "no star"		,
	"image"		: "8-1.png"				,
	//"video"		: "8-handg.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
},

{
	"world"		: "8"				,
	"level"		: "B"				,
	"text"		: "bowser firekill"	,
	"image"		: "8-B.png"				,
	//"video"		: "8-AP.gif"				,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"imagepos"	: "center"			,
	"tooltip"	: ""				,
	"disabled"	: "0"				,
}, 



// All or Multi Worlds --------------------------





{
	"world"		: "A2"				,
	"level"		: " "				,
	"text"		: "spade $10"	,
	"image"		: "spade10bucks.png"			,
	// "video"		: "A2.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: "Worlds 1-8: Match 10 BUCKS once in the spade matching game = 1 point (DON'T SPEND TOO MUCH TIME) "				,
	"suppress_world_indicator":"true",
	"disabled"	: "1"				,
},

// {
// 	"world"		: "A2"				,
// 	"level"		: " "				,
// 	"text"		: "Coinship"		,
// 	"image"		: "A7.png"			,
// 	// "video"		: "A7.gif"			,
// 	"points"	: "-1"				,
// 	"mode"		: "increment"		,
// 	"tooltip"	: "Worlds 1/3/5/6: Getting a Coinship by simply spawning it. (Lose 1 point for each coinship)  = -1 point"				,
// 	"suppress_world_indicator":"true",
// 	"disabled"	: "0"				,
// },   



{
	"world"		: "A2"								,
	"level"		: "C"									,
	"textx"		: ["No grabs", "1 grab", "2 grabs"]	,
	"imagex"	: ["oswg.png","oswg.png","oswg.png","oswg.png","oswg.png"]				,
	"statusx"	: ["inactive","active","active","active","active","active","active","active","active","active"]				,
	// "videox"	: ["A3.gif","A4.gif","A4.gif"]			,
	"pointsx"	: [0,1,2]	,
	"i"			: 0										,
	"mode"		: "array"								,
	"array_end"	: "countup"								, 
	"tooltip"	: "Worlds 1/3/5/6: Getting a Coinship by simply spawning it. (Lose 1 point for each coinship)  = -1 "				,
	"disabled"	: "0"									,
	"suppress_world_indicator":"true"					,
},  


{
	"world"		: "A2"								,
	"level"		: " "									,
	"textx"		: ["No boomboom kills", "1 boomboom kill", "2 boomboom kills"]	,
	"imagex"	: ["boomboom.png","boomboom.png","boomboom.png","boomboom.png"]				,
	"statusx"	: ["inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","inactive","active","active","active","active","active","active"]				,
	// "videox"	: ["A3.gif","A4.gif","A4.gif"]			,
	"pointsx"	: [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2]	,
	"i"			: 0										,
	"mode"		: "array"								,
	"array_end"	: "countup"								, 
	"tooltip"	: "Worlds 1-8: Any triple card fanfare (Each)  = -1 point"				,
	"disabled"	: "0"									,
	"suppress_world_indicator":"true"					,
},  



{
	"world"		: "A2"				,
	"level"		: " "				,
	"text"		: "nosame touch"		,
	"image"		: "notouch.png"			,
	"video"		: "notouch.gif"			,
	"points"	: "2"				,
	"mode"		: "toggle"			,
	"tooltip"	: "Worlds 1-8: Don’t let 2 of the same items touch each other in your inventory. (Except the leaf rewards in world 8 hand stages) = 2 points  ",
	"disabled"	: "1"				,
},

{
	"world"		: "A2"				,
	"level"		: " "				,
	"text"		: "Death (each)"	,
	"image"		: "A4.png"			,
	"video"		: "A4.gif"			,
	"points"	: "-1"				,
	"mode"		: "increment"		,
	"tooltip"	: "Worlds 1-8: Deaths = -1 point after the first death"				,
	"disabled"	: "1"				,
	"suppress_world_indicator":"true",
},  


{
	"world"		: "A2"				,
	"level"		: " "				,
	"text"		: "No deaths"		,
	"image"		: "A3.png"			,
	"video"		: "A3.gif"			,
	"points"	: "1"				,
	"mode"		: "toggle"			,
	"tooltip"	: "Worlds 1-8: Deathless = 1 point"				,
	"disabled"	: "1"				,
},  

  

{
	"world"		: "A2"				,
	"level"		: " "				,
	"text"		: "Offscn Wands"	,
	"image"		: "A8.png"			,
	"video"		: "A8.gif"			,
	"points"	: "1"				,
	"mode"		: "increment"		,
	"tooltip"	: ""				,
	"disabled"	: "1"				,
},   


{
	"world"		: "Game"				,
	"level"		: " "					,
	"text"		: "Time <51"			,
	"textx"	: 	["Time >60","Time <60","Time <57","Time <56","Time <55",],
	"i"			: 0						,
	"imagex"	: ["pmeter1.png","pmeter2.png","pmeter3.png","pmeter4.png","pmeter5.png"]		,
	// "videox"	: ["fast.gif","fast.gif","fast.gif","fast.gif","fast.gif"]		,
	"points"	: "1",
	"pointsx"	: [0,1,2,3,4]			,
	"mode"		: "array"				,
	"array_end"	: "reset"				, 	
	"highlight"	: "#444"				,
	"tooltip"	: "54:00--59:59 time = 1 point, 52:00--53:59 time = 3 points, 51:00--51:59 time = 4 points, 00:00--50:59 time = 5 points; Run time over 1 hour = -1 point and your run ends at the hour mark"					,
	"suppress_world_indicator":"true"	,
	"disabled"	: "1"					,
},  


{
	"world"		: "Game"				,
	"level"		: "  "					,
	"textx"		: ["2nd","1st"]			,
	"imagex"	: ["2.png","1.png"]	,	
	// "videox"	: ["1st.gif","2nd.gif"]	,
	"i"			: 0						,
	"pointsx"	: [0,1]					,
	"mode"		: "array"				,
	"array_end"	: "reset"				, 
	"tooltip"	: "First place = 2 point; Second place = 1 point"					,
	"highlight"	: "#444"				,
	"imagepos"	: "center"				,
	"suppress_world_indicator":"true"	,
	"disabled"	: "0"					,
},    

{
	"world"		: "Game"				,
	"level"		: "   "					,
	"textx"		: ["<20 Lives", "20 lives",">20 lives"]		,
	"imagex"	: ["MX20.png","MX20.png","MX21.png"]			,
	"pointsx"	: [0,1,-1]				,
	"i"			: 0,
	"mode"		: "array"				,
	"array_end"	: "reset"				, 
	"highlight"	: "#444"				,
	"tooltip"	: "Worlds 1-8: Finish a run with more than 20 lives = -1 point"				,
	"suppress_world_indicator":"true"	,
	"imagepos"	: "center"				,
	"disabled"	: "1"					,
},  	

{
	"world"		: "Game"								,
	"level"		: "    "									,
	"textx"		: ["No Death", "1 Death", "2 Deaths"]	,
	"imagex"	: ["nodeath.png","death.png","death.png","death.png"]			,
	// "videox"	: ["A3.gif","A4.gif","A4.gif"]			,
	"pointsx"	: [0,-1,-2]	,
	"i"			: 0										,
	"mode"		: "array"								,
	"array_end"	: "countup"								, 
	"tooltip"	: "Worlds 1-8: Deathless = 1 point; Worlds 1-8: Deaths = -1 point after the first death"				,
	"disabled"	: "1"									,
	"suppress_world_indicator":"true"					,
},  


{
	"world"		: "A2"								,
	"level"		: "     "									,
	"textx"		: ["throne jumps:0", "throne jumps:1", "throne jumps:2", "throne jumps:3", "throne jumps:4", "throne jumps:5", "throne jumps:6", "throne jumps:7"]	,
	"imagex"	: ["thronejump.png","thronejump.png","thronejump.png","thronejump.png","thronejump.png","thronejump.png","thronejump.png","thronejump.png"]			,
	"statusx"	: ["inactive","inactive","inactive","inactive","active","inactive","inactive","active"]				,
	// "videox"	: ["A3.gif","A4.gif","A4.gif"]			,
	"pointsx"	: [0,0,0,0,1,1,1,2]	,
	"i"			: 0										,
	"mode"		: "array"								,
	"array_end"	: "reset"								, 
	"tooltip"	: "Worlds 1-7: Get all throne jumps once you enter the castle = 2 points  "				,
	"disabled"	: "1"									,
	"suppress_world_indicator":"true"					,
},  
 


];

for (var i = items.length - 1; i >= 0; i--) {
	if (items[i].disabled == 1){items.splice(i, 1);}
}