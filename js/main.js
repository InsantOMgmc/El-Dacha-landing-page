const burger = document.querySelector('.burger');
const links = document.querySelectorAll('a[href*="#"]');
const body = document.body;
const nav = document.querySelector('.header__nav');

// smooth scrolling
links.forEach(function (link) {
  link.addEventListener('click', event => {
    event.preventDefault();

    const blockId = link.getAttribute('href').substring(1);
    if (blockId) {

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      body.classList.remove('lock');
    }
  });

});

  // feedback modal
  const fdbModal = document.querySelector(".feedback-modal");
  function closeFeedbackModal() {
    fdbModal.style.display = 'none';
    body.classList.remove('lock');
  }

  function showFeedbackModal() {
    fdbModal.style.display = 'flex';
    body.classList.add('lock');
  }

// create home calculator
const floorItems = document.querySelectorAll('.calculator-floors__item');
const squareInput = document.querySelector('.slider-swiper');
const squareOutput = document.getElementById('square-output');
const totalPriceElement = document.querySelector('.final-price__price');
let pricePerSquare = 27083;
let floors = 1;

function calculateTotalPrice() {
  const square = squareInput.value;
  const totalPrice = pricePerSquare * square * floors;
  totalPriceElement.textContent = totalPrice.toLocaleString('ru-RU') + " р";
}

function showValue(value) {
  squareOutput.textContent = value;
}

function updateFloorCount(floorCount) {
  floors = floorCount;
  calculateTotalPrice();
}

squareInput.addEventListener('input', calculateTotalPrice);

floorItems.forEach(floorItem => {
  floorItem.addEventListener('click', function() {
    const floorCount = parseInt(floorItem.textContent);
    updateFloorCount(floorCount);
    floorItems.forEach(item => item.classList.remove('calculator-floors__item-active'));
    floorItem.classList.add('calculator-floors__item-active');
  });
});


const repairItems = document.querySelectorAll('.calculator-repair__item');
repairItems.forEach(element =>{
    element.addEventListener('click', function() {
      repairItems.forEach(item => item.classList.remove('calculator-repair__item-active'))
      element.classList.add('calculator-repair__item-active');
    })
})

// show about home
const homesModal = document.querySelector('.about-home-modal')

const homes = document.querySelectorAll('.homes-item');
homes.forEach(element => {
  element.addEventListener('click', () => {
    homesModal.style.display = 'flex'
    body.classList.add('lock');
  })
})

function closeAboutHomeModal() {
  homesModal.style.display = 'none'
  body.classList.remove('lock');
}

tippy('#third-tl', {
})
tippy('#second-tl', {
})
tippy('#first-tl', {
})