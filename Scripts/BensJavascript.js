// JavaScript Document
	todaysdate=new Date();

function todaysweekday()
	{
    	var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    	document.write("Today is " + weekday[todaysdate.getDay()]);
	}
function formatdate()
	{
		document.write(todaysdate.getMonth()+1+"/"+todaysdate.getDate()+"/"+todaysdate.getFullYear());
	}
function RandomSaying()
	{
		var randnumb = new Number();
		var sayings=new Array("Cactus","Potatoe","Mat Smells","Toejam","Rember to cheek your ipad reminders list",":3");
		randnumb = Math.round((Math.random() * sayings.length)); 
		document.write(sayings[randnumb]);
	}
