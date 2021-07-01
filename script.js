function displayMessage() {

}

const html = document.querySelector('html');

const panel = document.createElement('div');
panel.setAttribute('class', 'msgBox');
html.appendChild(panel);

const msg = document.createElement('p');
msg.textContent = 'This is a message box';
panel.appendChild(msg);

const closeBtn = document.createElement('button');
closeBtn.textContent = 'x';
panel.appendChild(closeBtn);

closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }


const btn = document.querySelector('button');
btn.onclick = displayMessage;

function displayMessage(msgText, msgType) {
    ...

    msg.textContent = msgText;


    btn.onclick = function() {
        displayMessage('Woo, this is a different message!');
      };


      if (msgType === 'warning') {
        msg.style.backgroundImage = 'url(images/warning.png)';
        panel.style.backgroundColor = 'red';
      } else if (msgType === 'chat') {
        msg.style.backgroundImage = 'url(images/chat.png)';
        panel.style.backgroundColor = 'aqua';
      } else {
        msg.style.paddingLeft = '20px';
      }
      
      displayMessage('Your inbox is almost full — delete some mails', 'warning');



      //displayMessage();
 
