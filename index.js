//-----------------------вспомогательные данные--------------------------------//
const ancientsData = [
    {
      id: 'azathoth',
      name: 'azathoth',      
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'cthulhu',
      name: 'cthulhu',      
      firstStage: {
        greenCards: 0,
        blueCards: 2,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 1,
        blueCards: 0,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'iogSothoth',
      name: 'iogSothoth',      
      firstStage: {
        greenCards: 0,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 2,
        blueCards: 1,
        brownCards: 3,
      },
      thirdStage: {
        greenCards: 3,
        blueCards: 0,
        brownCards: 4,
      },
    },
    {
      id: 'shubNiggurath',
      name: 'shubNiggurath',      
      firstStage: {
        greenCards: 1,
        blueCards: 1,
        brownCards: 2,
      },
      secondStage: {
        greenCards: 3,
        blueCards: 1,
        brownCards: 2,
      },
      thirdStage: {
        greenCards: 2,
        blueCards: 0,
        brownCards: 4,
      },
    },
  ];

const cardsDataBlue = [
    {
      id: 'blue1',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue2',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue3',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue4',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue5',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue6',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue7',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue8',
      difficulty: 'hard',
      color:'blue'
    },
    {
      id: 'blue9',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue10',
      difficulty: 'easy',
      color:'blue'
    },
    {
      id: 'blue11',
      difficulty: 'normal',
      color:'blue'
    },
    {
      id: 'blue12',
      difficulty: 'normal',
      color:'blue'
    }
];

const cardsDataBrown = [
    {
      id: 'brown1',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown2',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown3',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown4',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown5',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown6',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown7',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown8',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown9',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown10',
      difficulty: 'hard',
      color:'brown'
    },
    {
      id: 'brown11',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown12',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown13',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown14',
      difficulty: 'easy',
      color:'brown'
    },
    {
      id: 'brown15',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown16',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown17',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown18',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown19',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown20',
      difficulty: 'normal',
      color:'brown'
    },
    {
      id: 'brown21',
      difficulty: 'easy',
      color:'brown'
    }
];

  const cardsDataGreen = [
    {
      id: 'green1',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green2',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green3',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green4',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green5',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green6',
      difficulty: 'hard',
      color:'green'
    },
    {
      id: 'green7',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green8',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green9',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green10',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green11',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green12',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green13',
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green14',      
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green15',      
      difficulty: 'normal',
      color:'green'
    },
    {
      id: 'green16',      
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green17',
      difficulty: 'easy',
      color:'green'
    },
    {
      id: 'green18',
      difficulty: 'easy',
      color:'green'
    }
];

//---------------------Выбор карт-----------------------------//
function shuffle() {
    document.querySelector('.wrapper').classList.toggle('example_block')
    document.querySelector('.h2').classList.toggle('example_block')
    document.querySelector('.container-level').classList.toggle('example_block')
    document.querySelector('.shuffle-cards').classList.toggle('example_block')
    document.querySelector('.play-zone').classList.toggle('top')
    ancientChoise ()
}
document.querySelector('.shuffle-cards').addEventListener('click', shuffle)
document.querySelector('.back-button').addEventListener('click', shuffle)

const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')



let cardNum = 0;
card1.addEventListener('click', () => {
    card1.classList.add('card-active')
    card2.classList.remove('card-active')
    card3.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 0
    accientChoiseArr ()
    document.querySelector('.card-text').innerHTML = ancientsData[cardNum].id.toUpperCase()
})
card2.addEventListener('click', () => {
    card2.classList.add('card-active')
    card1.classList.remove('card-active')
    card3.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 1
    accientChoiseArr ()
    document.querySelector('.card-text').innerHTML = ancientsData[cardNum].id.toUpperCase()
})
card3.addEventListener('click', () => {
    card3.classList.add('card-active')
    card2.classList.remove('card-active')
    card1.classList.remove('card-active')
    card4.classList.remove('card-active')
    cardNum = 2
    accientChoiseArr ()
    document.querySelector('.card-text').innerHTML = ancientsData[cardNum].id.toUpperCase()
})
card4.addEventListener('click', () => {
    card4.classList.add('card-active')
    card1.classList.remove('card-active')
    card3.classList.remove('card-active')
    card2.classList.remove('card-active')
    cardNum = 3
    accientChoiseArr ()
    document.querySelector('.card-text').innerHTML = ancientsData[cardNum].id.toUpperCase()
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

function accientChoiseArr () {
    document.querySelector('.green1').innerHTML = ancientsData[cardNum].firstStage.greenCards
    document.querySelector('.brown1').innerHTML = ancientsData[cardNum].firstStage.brownCards
    document.querySelector('.blue1').innerHTML = ancientsData[cardNum].firstStage.blueCards
    document.querySelector('.green2').innerHTML = ancientsData[cardNum].secondStage.greenCards
    document.querySelector('.brown2').innerHTML = ancientsData[cardNum].secondStage.brownCards
    document.querySelector('.blue2').innerHTML = ancientsData[cardNum].secondStage.blueCards
    document.querySelector('.green3').innerHTML = ancientsData[cardNum].thirdStage.greenCards
    document.querySelector('.brown3').innerHTML = ancientsData[cardNum].thirdStage.brownCards
    document.querySelector('.blue3').innerHTML = ancientsData[cardNum].thirdStage.blueCards
}
accientChoiseArr ()

let ancientChoiseArr = []
let ancientChoiseSubArr = []

function ancientChoise () {
    
    while (ancientChoiseSubArr.length < ancientsData[cardNum].firstStage.greenCards) {
        let r = Math.floor(Math.random() * cardsDataGreen.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataGreen[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataGreen[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataGreen[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].firstStage.brownCards) {
        let r = Math.floor(Math.random() * cardsDataBrown.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBrown[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBrown[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBrown[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].firstStage.blueCards) {
        let r = Math.floor(Math.random() * cardsDataBlue.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBlue[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBlue[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBlue[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].secondStage.greenCards) {
        let r = Math.floor(Math.random() * cardsDataGreen.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataGreen[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataGreen[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataGreen[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].secondStage.brownCards) {
        let r = Math.floor(Math.random() * cardsDataBrown.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBrown[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBrown[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBrown[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].secondStage.blueCards) {
        let r = Math.floor(Math.random() * cardsDataBlue.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBlue[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBlue[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBlue[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].thirdStage.greenCards) {
        let r = Math.floor(Math.random() * cardsDataGreen.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataGreen[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataGreen[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataGreen[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].thirdStage.brownCards) {
        let r = Math.floor(Math.random() * cardsDataBrown.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBrown[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBrown[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBrown[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)

    ancientChoiseSubArr = []
    while (ancientChoiseSubArr.length < ancientsData[cardNum].thirdStage.blueCards) {
        let r = Math.floor(Math.random() * cardsDataBlue.length)
        let l = r
        if (ancientChoiseSubArr.includes(cardsDataBlue[l].id) !== true && 
        ancientChoiseArr.flat().includes(cardsDataBlue[l].id) !== true) {
        ancientChoiseSubArr.push(cardsDataBlue[l].id)
        }
    }
    ancientChoiseArr.push(ancientChoiseSubArr)
    console.log(ancientChoiseArr)
}




const shirt = document.querySelector('.card-shirt')
const deck = document.querySelector('.deck')
let count = 0
const p = (/[^a-z]+/g)

shirt.addEventListener('click', () => {
    console.log(ancientChoiseArr[count])
    // let color = ancientChoiseArr[count].replace(p, '')
    //     deck.style.backgroundImage = `url('./assets/MythicCards/${color}/${ancientChoiseArr[count]}.jpg')` 
    
    
    
    count++

})





// function setBg() {
//     const img = new Image();
//     img.src = `https://raw.githubusercontent.com/IliasovDamir/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`
//     img.onload = () => {
//         document.querySelector('.deck').style.backgroundImage = `url('https://raw.githubusercontent.com/IliasovDamir/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
//     };
//   }
//   setBg()















