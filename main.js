// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const articleHearts = document.querySelectorAll(".like-glyph")

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(() => {
      heart.classList.toggle("activated-heart")
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
      } else {
        heart.innerText = EMPTY_HEART;
      }
    })
    .catch((serverErrorMessage) => {
      const modal = document.querySelector("#modal")
      modal.classList.remove("hidden")
      setTimeout(() => modal.classList.add("hidden"), 3000)
      const modalMessage = document.querySelector("#modal-message")
      modalMessage.innerText = serverErrorMessage
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
