const nameInput = document.getElementById('visitor');
const messageTextArea = document.getElementById('email');

const focusHandler = event => {
  event.target.className = 'highlight';
}

const blurHandler = event => {
  event.target.className = '';
}

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);                          
                
emailInput.addEventListener('focus', focusHandler);
emailInput.addEventListener('blur', blurHandler);
