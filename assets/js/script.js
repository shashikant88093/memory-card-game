const cards = document.querySelectorAll(".memory-card");
var count = 0;
let hasFlippedCard = false;
let lockCard = false;
let firstCard, secondCard;
function flipCard() {
  if (lockCard) return
  this.classList.toggle('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    hasFlippedCard = false;
    secondCard = this;
    if (firstCard.dataset.image === secondCard.dataset.image) {

      removeFlip();
      count += 1;
      showpopup()


    } else {
      timeOut();
    }
  }
  function showpopup(counts) {
    let mathCount = counts;
    if (count == 10) {
      $('#myModal').modal("show");
      reset();
      count = 0;
    }
  }


  function removeFlip() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }
  function timeOut() {
    lockCard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      lockCard = false;
    }, 1500);
  }
}
(function shiftingImg() {
  cards.forEach(card => {
    let shift = Math.floor(Math.random() * 20);
    card.style.order = shift;
  });
})();


cards.forEach(card => card.addEventListener('click', flipCard));