// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('click', identifyHeart)

function heartLiker(clickedHeart){
  mimicServerCall()
  .then(response => {
    if(clickedHeart.textContent === EMPTY_HEART){
      clickedHeart.textContent = FULL_HEART;
      clickedHeart.className = 'activated-heart'
    }
    else if(clickedHeart.textContent === FULL_HEART){
      clickedHeart.textContent = EMPTY_HEART;
      clickedHeart.className = ''
    }
  })
  .catch(error => {
    const errorHeading = document.querySelector('#modal')
    errorHeading.className = ''
    setTimeout(() => errorHeading.className = 'hidden', 3000);
  })

}

function identifyHeart(event){
  if(event.target.className === 'like-glyph' || event.target.className === 'activated-heart'){
    heartLiker(event.target)
  }
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
