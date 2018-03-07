// JavaScript Document
$(document).ready(function loaded(){
	var NumberofClouds = 3;
	var CA=new Array;
	var fixeddiv=$('#BGfixedstuff');
	var fixedmiddiv=$('#BGfixedmindstuff');
	var newTop = 0;
	var newTopmid = 0;
	var previousScroll = 0;
	var fixeddivpos = fixeddiv.position();
	var fixedmiddivpos = fixedmiddiv.position();
	var defultscroll = $(window).scrollTop();
	var waiting = 0;
	var waitecounter = -1;








	function Play(cloud, waiting, speed, offset, Cloudheight){
		
		var cobj=$(cloud);
		var cspeed=speed;
		var coffset=offset;
		var crandheight = Math.round((Math.random() * Cloudheight)); 
		
		var browserwidth = $( window ).width();
		
		var divwidth = cobj.width();
		var leftposN = 0 - divwidth;
		var leftposS = 0 - divwidth + "px";
		var startpos = leftposN + coffset + "px";
		var endpos = browserwidth + divwidth + waiting + "px";
	
		cobj.css("left",startpos);
		cobj.css("top",crandheight);
	
		function marquee(){
			cobj.animate({
				left:endpos
			},cspeed,'linear',function repeat(){ 
				cobj.css("left",leftposS);
				crandheight = Math.round((Math.random() * Cloudheight));
				cobj.css("top",crandheight);
				
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
	
	
	
	
	
	
	$(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
	   fixeddivpos = fixeddiv.position();
	   fixedmiddivpos = fixedmiddiv.position();
	//Check if scrolling up or down
       if (currentScroll > previousScroll){
    //Scroll Down
          newTop = fixeddivpos.top + (currentScroll-previousScroll)*0.9;
		  newTopmid = fixedmiddivpos.top + (currentScroll-previousScroll)*0.37;
       } else {
    //Scroll Up
          newTop = fixeddivpos.top - (previousScroll-currentScroll)*0.9;
		  newTopmid = fixedmiddivpos.top - (previousScroll-currentScroll)*0.37;
       }
	   fixeddiv.css('top', newTop );
	   fixedmiddiv.css('top', newTopmid);
	   
	   if (currentScroll == defultscroll){
	   		fixeddiv.css('top', 0);
			fixedmiddiv.css('top', 0);
	   }
	   previousScroll = currentScroll;

	})
	
	
	
	
	
	
	
	function Float(Floteobj, Flotespeed){
		$(Floteobj).animate({
			left: '+=55',
			top: '+=45'
		}, Flotespeed).animate({
			left: '-=55',
			top: '-=45'
		}, Flotespeed);
		Float(Floteobj, Flotespeed)
	}
	
	
	
	
	
	Play("#clouda", 0, 200000, 500, 50);
	Play("#cloudb", 0, 150000,1000, 100);
	Play("#cloudc", 0, 90000, 0, 200);
	
	Play("#lighta", 10000, 9000, 0, 300);
	Play("#lightb", 15000, 14000, 500, 300);
	Play("#lightc", 18000, 17000, 1200, 300);
	
	Float("#plta", 5000);
	Float("#pltb", 5000);
	
});