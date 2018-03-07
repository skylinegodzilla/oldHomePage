// JavaScript Document
$(document).ready(function loaded(){
	var NumberofClouds = 3;
	var CA=new Array;
	
	var speed1 =20000;
	var offset1 = 0;
		
	var obj1=$("#clouda");
	var obj2=$("#cloudc");

	function Play1(){
		
		var browserwidth = $( window ).width();
		
		var divwidth1 = obj1.width();
		var leftposN1 = 0 - divwidth1;
		var leftposS1 = 0 - divwidth1 + "px";
		var startpos1 = leftposN1 + offset1 + "px";
		var endpos1 = browserwidth + divwidth1 + "px";
	
		obj1.css("left",startpos1); 
	
		function marquee1(){
			obj1.animate({
				left:endpos1
			},speed1,'linear',function cb1(){ 
				obj1.css("left",leftposS1);
				marquee1();
			});
		}
		marquee1();
	
		$(window).resize(function rs1(){
			obj1.stop();
			browserwidth = $( window ).width();
			endpos1 = browserwidth + divwidth1 + "px";
			marquee1();
		});
	}
	
	function Float(){
		$("#cloudb").animate({
			left: '+=55',
			top: '+=45'
		}, 3000).animate({
			left: '-=55',
			top: '-=45'
		}, 3000, Float);
	}
	
	Float();
	Play1();
	
});