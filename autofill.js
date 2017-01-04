var element = document.getElementById('txtCaptcha');
if (typeof(element) != 'undefined' && element != null)
{
	var captcha = element.value.split(' ').join('');
	document.getElementById('txtInput').value = captcha;
}

var element = document.getElementById('ContentPlaceHolder1_UserLogin1_txtCaptcha');
if (typeof(element) != 'undefined' && element != null)
{	
	var captcha = element.value.split(' ').join('');
 	document.getElementById('ContentPlaceHolder1_UserLogin1_txtInput').value = captcha;
}