function runEightBall(){

var userQuestion = document.querySelector('#questionForm').value;
console.log(userQuestion);
if (userQuestion === '') {
    alert('Please ask a question.');
} else {
    alert(`You asked: ${userQuestion}`);
};

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy, try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

alert(`The eight ball answered: ${eightBall}`);

};

// Now to select the button
var btn = document.getElementById('start');
btn.addEventListener('click', runEightBall);
