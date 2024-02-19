let captcha = '';

function generateCaptcha() {
    document.getElementById('captchaImage').innerHTML = "ghtbry";
    let character = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    //let captcha='';
    for(let i=0;i<6;i++){
    let store = character.charAt(Math.floor(Math.random()*character.length));
    captcha = captcha+store;
    }
    document.getElementById('captchaImage').innerHTML = captcha;
}

//  Refresh the CAPTCHA image
function Refresh(){
    captcha ='';
    document.getElementById('captchaImage').innerHTML = captcha;
    generateCaptcha();

}
function sendData() {
  let nameElement  = document.getElementById('fullname')
  let emailElement = document.getElementById('email')
  let phoneElement = document.getElementById('phone')
  let subjectElement = document.getElementById('subject')

  removeHighlightInput([nameElement, emailElement, phoneElement, subjectElement])

  if (nameElement.value.length === 0 || typeof nameElement.value.length === 'undefined') {
    highlightInput(nameElement)

    return
  }

  if (emailElement.value.length === 0 || !validateEmail(emailElement.value) || typeof emailElement.value.length === 'undefined') {
    highlightInput(emailElement)

    return
  }

  if (phoneElement.value.length === 0 || typeof phoneElement.value.length === 'undefined') {
    highlightInput(phoneElement)

    return
  }

  if (subjectElement.value.length === 0 || typeof subjectElement.value.length === 'undefined') {
    highlightInput(subjectElement)

    return
  }
  let icaptchacode = document.getElementById('cap').value;
  
  if(icaptchacode === captcha){
    alert("Captcha Verified");
  }
  else{
    alert("No Captcha Not Verified");
  }
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	return re.test(email)
}

function highlightInput(element) {
  element.classList.remove('border-gray-200')
  element.classList.add('highlight')
}

function removeHighlightInput(arrayOfElements) {
  for (let i = 0; i < arrayOfElements.length; i++) {
    arrayOfElements[i].classList.remove('highlight')
  }
}

