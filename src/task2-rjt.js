// JavaScript Document

var money = 0;

function bank()
{
	document.getElementById("msg").innerHTML = ("Available balance : " + Number(money) + " RS.");
	document.getElementById("form").style.display = "none";
	document.getElementById("bankData").style.display = "block";
	document.getElementById("bank").innerHTML = "<div id='divjs'>Welcome <b id='js'>" + 
												document.getElementById("name").value + " ( " +
												document.getElementById("email").value + " | +91 - " + 
												document.getElementById("tel").value + " ) " + "</b></div>";
}

function checkNegative()
{
	if(document.getElementById("amount").value < 0)
	{
		document.getElementById("error").innerHTML = ("Digits must be positive.");
		return false;
	}
	return true;
	
}

function changeTaskColorR()
{
	document.getElementById("task").style.color = "red";
}

function changeTaskColorY()
{
	document.getElementById("task").style.color = "white";
}

function withdraw()
{
	if (document.getElementById("amount").value == "null" || document.getElementById("amount").value == "")
	{
		document.getElementById("error").innerHTML = ("Enter Amount.");
		return false;
	}
	
	if (money < document.getElementById("amount").value)
	{
		document.getElementById("error").innerHTML = ("Insufficient balance.");
		return false;
	}
	else
	{
		if(document.getElementById("amount").value < 0)
		{
			document.getElementById("error").innerHTML = ("Digits must be positive.");
			return false;
		}
		else
		{
			money -= document.getElementById("amount").value;
			document.getElementById("error").innerHTML = "";
			document.getElementById("msg").innerHTML = ("Available balance : " + Number(money) + " RS.");
			document.getElementById("amount").value = "";
			return true;
		}
		return true;
	}
}

function deposit()
{
	checkNegative();
	if (document.getElementById("amount").value == "null" || document.getElementById("amount").value == "")
	{
		document.getElementById("error").innerHTML = ("Enter Amount.");
		return false;
	}
	else
	{
		if(document.getElementById("amount").value < 0)
		{
			document.getElementById("error").innerHTML = ("Digits must be positive.");
			return false;
		}
		else
		{
			document.getElementById("error").innerHTML = "";
			money += Number(document.getElementById("amount").value);
			document.getElementById("msg").innerHTML = ("Available balance : " + Number(money) + " RS.");
			document.getElementById("amount").value = "";
		}
		return true;
	}
}

function validate()
{
	if(document.getElementById("name").value == "" || document.getElementById("name").value == "null")
	{
		document.getElementById("error_v").innerHTML = ("Please! Write your name.");
		return false;
	}
	
	if(document.getElementById("email").value == "" || document.getElementById("email").value == "null")
	{
		document.getElementById("error_v").innerHTML = ("Please! Write your email address.");
		return false;
	}

	if(document.getElementById("PIN").value == "" || document.getElementById("PIN").value == null)
	{
		document.getElementById("error_v").innerHTML = ("Please! Write your PIN.");
		return false;
	}

	if(document.getElementById("re-PIN").value == "" || document.getElementById("re-PIN").value == null)
	{
		document.getElementById("error_v").innerHTML = ("Please! Write again your PIN.");
		return false;
	}

	if (document.getElementById("PIN").value != document.getElementById("re-PIN").value)
	{
		document.getElementById("error_v").innerHTML = ("PIN do not match.");
		return false;
	}

	if(document.getElementById("tel").value == "" || document.getElementById("tel").value == null)
	{
		document.getElementById("error_v").innerHTML = ("Write your Mobile Number.");
		return false;
	}
	
	chcekTelNo(document.form.tel);
	
	function chcekTelNo(telNo)
	{
		if(telNo.value.match(/^\d{10}$/))
		{
			return true;
		}
		else
		{
			document.getElementById("error_v").innerHTML = ("check your mobile number.");
			return false;
		}
	}
//	return bank();
}

function checkName()
{
	if(document.getElementById("name").value == "" || document.getElementById("name").value == "null")
	{
		document.getElementById("checkName_v").innerHTML = ("Please! Write your name.");
		return false;
	}
	else
	{
		document.getElementById("checkName_v").innerHTML = ("");
		return true;
	}
}

function checkEmail()
{
	if(document.getElementById("email").value == "" || document.getElementById("email").value == "null")
	{
		document.getElementById("checkEmail_v").innerHTML = ("Please! Write your email address.");
		return false;
	}
	else
	{
		document.getElementById("checkEmail_v").innerHTML = ("");
		var x = document.forms["laraATM"]["email"].value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
		{
			document.getElementById("checkEmail_v").innerHTML = ("Not a valid e-mail address");
			return false;
		}
		document.getElementById("checkEmail_v").innerHTML = ("");
		return true;
	}
}

function checkMobile()
{
	if(document.getElementById("tel").value == "" || document.getElementById("tel").value == null)
	{
		document.getElementById("checkMobile_v").innerHTML = ("Write your Mobile Number.");
		return false;
	}
	else	
	{
		document.getElementById("checkMobile_v").innerHTML = ("");
		if((document.getElementById("tel").value.length > 10) || (document.getElementById("tel").value.length < 10))
		{
			document.getElementById("checkMobile_v").innerHTML = ("Mobile Number must contain 10 digits.");
			return false;	
		}
		else
		{
			document.getElementById("checkMobile_v").innerHTML = ("");
			return chcekTelNo(document.form.tel);
		}
					
		function chcekTelNo(telNo)
		{
			if(telNo.value.match(/^\d{10}$/))
			{
				return true;
			}
			else
			{
				document.getElementById("error_v").innerHTML = ("check your mobile number.");
				return false;
			}
		}
		return true;
	}
}

function checkPin()
{
	if(document.getElementById("PIN").value == "" || document.getElementById("PIN").value == null)
	{
		document.getElementById("checkPin_v").innerHTML = ("Please! Write your PIN.");
		return false;
	}
	else	
	{
		document.getElementById("checkPin_v").innerHTML = ("");
		if(document.getElementById("PIN").value.length < 4)
		{
			document.getElementById("checkPin_v").innerHTML = ("PIN must have 4 digit.");
			return false;
		}
		else	
		{
			document.getElementById("checkPin_v").innerHTML = ("");
			if (document.getElementById("PIN").value != document.getElementById("re-PIN").value)
			{
				if(document.getElementById("re-PIN").value == "" || document.getElementById("re-PIN").value == null)
				{	
					document.getElementById("checkRePinMatch_v").innerHTML = ("");
					return true;
				}
				else	
				{
					document.getElementById("checkRePinMatch_v").innerHTML = ("PIN do not match.");
					return false;	
				}
				return true;
			}
		}
		return true;
	}
}

function checkRePin()
{
	if(document.getElementById("re-PIN").value == "" || document.getElementById("re-PIN").value == null)
	{
		document.getElementById("checkRePin_v").innerHTML = ("Please! Write again your PIN.");
		return false;
	}
	else	
	{
		document.getElementById("checkRePin_v").innerHTML = ("");
		if(document.getElementById("re-PIN").value.length < 4)
		{
			document.getElementById("checkRePin_v").innerHTML = ("PIN must have 4 digit.");
			return false;
		}
		else	
		{
			document.getElementById("checkRePin_v").innerHTML = ("");
			if(document.getElementById("PIN").value != "" || document.getElementById("PIN").value != null)
			{
				if (document.getElementById("PIN").value != document.getElementById("re-PIN").value)
				{
					if(document.getElementById("PIN").value == "" || document.getElementById("PIN").value == null)
					{
						document.getElementById("checkPin_v").innerHTML = ("Please! Write your PIN.");
						return false;
					}
					document.getElementById("checkRePinMatch_v").innerHTML = ("PIN do not match.");
					return false;
				}
				else	
				{
					document.getElementById("checkRePinMatch_v").innerHTML = ("");
					return true;
				}
				return true;
			}
		}
	}
}

function atmKey(id)
{
	document.getElementById("amount").value = Number(document.getElementById("amount").value + "" + document.getElementById(id).value);
}

function atmKeyErr(id)
{
	if (id == 10)
	{
		document.getElementById("error").innerHTML = ("* not allowed. Only digit allowed.");
	}
	else
	{
		document.getElementById("error").innerHTML = ("# not allowed. Only digit allowed.");
	}
}

function clear_reset()
{
	document.getElementById("amount").value = "";
}