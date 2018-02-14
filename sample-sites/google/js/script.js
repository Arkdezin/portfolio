// JavaScript Document

var a = 0;
function fun()
	{
		if(a==0)
			{
				document.getElementById("ico").style.display="block";
				a=1;
			}
		else
			{
			document.getElementById("ico").style.display="none";
				a=0;	
			}
	}
function fun1()
	{
		var b = input.value;
			window.open ("https://" + b, "_blank");
	}
function speed(event)
	{
		var c = event.keyCode;
		if(c===13)
		fun1();
	}