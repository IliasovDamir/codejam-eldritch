//---------------------Выбор карт-----------------------------//
function shuffle() {
    document.querySelector('.wrapper').classList.toggle('example_block')
    document.querySelector('.h2').classList.toggle('example_block')
    document.querySelector('.container-level').classList.toggle('example_block')
    document.querySelector('.shuffle-cards').classList.toggle('example_block')
    document.querySelector('.play-zone').classList.toggle('top')
}
document.querySelector('.shuffle-cards').addEventListener('click', shuffle)
document.querySelector('.back-button').addEventListener('click', shuffle)

const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')

let cardNum = 1;
card1.addEventListener('click', () => {
    card1.classList.add('card-active')
    card2.classList.remove('card-active')
    card3.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 1
    document.querySelector('.card-text').innerHTML = 'Azathoth'   
})
card2.addEventListener('click', () => {
    card2.classList.add('card-active')
    card1.classList.remove('card-active')
    card3.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 2
    document.querySelector('.card-text').innerHTML = 'Cthulhu'
})
card3.addEventListener('click', () => {
    card3.classList.add('card-active')
    card2.classList.remove('card-active')
    card1.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 3
    document.querySelector('.card-text').innerHTML = 'Yog-Sothoth'
})
card4.addEventListener('click', () => {
    card4.classList.add('card-active')
    card1.classList.remove('card-active')
    card3.classList.remove('card-active')
    card2.classList.remove('card-active')
    cardNum = 4
    document.querySelector('.card-text').innerHTML = 'Shub-Niggurath'
})

const levelButton = document.querySelectorAll('.level-button')
let levelNum = 1;
for (let i = 0; i < levelButton.length; i++) {
    levelButton[i].onclick = function () {
        levelNum = i 
        level()       
    }
}

function level() {
    if (levelNum === 0) {document.querySelector('.level-text').innerHTML = 'Level "Very easy"'}
    if (levelNum === 1) {document.querySelector('.level-text').innerHTML = 'Level "Easy"'}
    if (levelNum === 2) {document.querySelector('.level-text').innerHTML = 'Level "Normal"'}
    if (levelNum === 3) {document.querySelector('.level-text').innerHTML = 'Level "Hard"'}
    if (levelNum === 4) {document.querySelector('.level-text').innerHTML = 'Level "Very hard"'}
}

//-----------------------Раскладка карт--------------------------------//



