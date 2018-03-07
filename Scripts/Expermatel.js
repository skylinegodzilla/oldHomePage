// JavaScript Document
$(document).ready(function loaded(){
	var NumberofClouds = 3;
	var CA=new Array;

	function Play(cloud, speed, offset){
		
		var cobj=$(cloud);
		var cspeed=speed;
		var coffset=offset;
		
		var browserwidth = $( window ).width();
		
		var divwidth = cobj.width();
		var leftposN = 0 - divwidth;
		var leftposS = 0 - divwidth + "px";
		var startpos = leftposN + coffset + "px";
		var endpos = browserwidth + divwidth + "px";
	
		cobj.css("left",startpos); 
	
		function marquee(){
			cobj.animate({
				left:endpos
			},cspeed,'linear',function cb(){ 
				cobj.css("left",leftposS);
				marquee();
			});
		}
		marquee();
	
		$(window).resize(function rs(){
			cobj.stop();
			browserwidth = $( window ).width();
			endpos = browserwidth + divwidth + "px";
			marquee();
		});
	}
	
	function Float(){
		$("#cloud1").animate({
			left: '+=55',
			top: '+=45'
		}, 1000).animate({
			left: '-=55',
			top: '-=45'
		}, 1000, Float);
	}

	Float();
	Play("#clouda", 50000, 500);
	Play("#cloudb", 60000, 1000);
	Play("#cloudc", 55000, 0);
	
});