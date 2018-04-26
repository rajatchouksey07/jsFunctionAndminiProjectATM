// JavaScript Document

function callMethod()
{
	document.getElementById("name").style.backgroundColor = "gold";

	document.getElementById("value").innerHTML = "Your name is <b>" + document.getElementById("name").value + "</b>.";

	document.getElementById("toUpperCase").innerHTML = "Name in upper case is <b>" + document.getElementById("name").value.toUpperCase() + "</b>.";

	document.getElementById("toLowerCase").innerHTML = "Name in lower case is <b>" + document.getElementById("name").value.toLowerCase() + "</b>.";

	document.getElementById("length").innerHTML = "Your name has <b>" + document.getElementById("name").value.length + "</b>" + " characters.";

	var split_name = "";
	var i;
	for (i = 0; i < document.getElementById("name").value.split("").length; i++) 
	{
		split_name += document.getElementById("name").value.split("")[i] + "<br>"
	}
	document.getElementById("split").innerHTML = "Split: <br><br><b>" + split_name + "</b>";
}

function changeTaskColorR()
{
	document.getElementById("task").style.color = "red";
}

function changeTaskColorY()
{
	document.getElementById("task").style.color = "white";
}

function lightOnOff()
{
	document.getElementById("lightOn").src = 'img/pic_bulbon.gif';
}

function lightOffOn()
{
	document.getElementById("lightOn").src = 'img/pic_bulboff.gif';
}

function showDate()
{
	document.getElementById('rjt').innerHTML = Date();
}

function changeHTML()
{
	document.getElementById("rjt").innerHTML = "Hello RJT!";
}

function fontSizeInc()
{
	document.getElementById("rjt").style.fontSize = "45px";
}

function fontSizeDec()
{
	document.getElementById("rjt").style.fontSize = "35px";
}

function hide()
{
	document.getElementById("rjt").style.display = "none";
}

function show()
{
	document.getElementById("rjt").style.display = "block";
}