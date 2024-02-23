const homesModal = document.querySelector('.about-home-modal')
const body = document.body;

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

// back to past page
function goBack() {
    window.history.back();
}