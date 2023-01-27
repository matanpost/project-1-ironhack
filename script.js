const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.style.border = '2px solid gold';

let currentLevel = 0
const levelView = document.getElementById("level")
levelView.innerText = currentLevel + 1


let Lives = 3
const livesViews = document.getElementById("lives")
if (Lives === 3){
    livesViews.innerHTML = `<div><img src="images/botleScore.jpg" class= "botleScore1"/><img src="images/botleScore.jpg" class= "botleScore1"/><img src="images/botleScore.jpg" class= "botleScore1"/></div>`
} else if (Lives === 2){
    livesViews.innerHTML = `<div><img src="images/botleScore.jpg" class= "botleScore1"/><img src="images/botleScore.jpg" class= "botleScore1"/></div>`
} else if (Lives === 1){
    livesViews.innerHTML = `<div><img src="images/botleScore.jpg" class= "botleScore1"/></div>`
}

//audio
const audio = new Audio('audio/moonshiner.wav');
audio.preload

// backgrounds
const level1Img = new Image()
level1Img.src = 'images/backgrounddetailed1.png'

const level2Img = new Image()
level2Img.src = 'images/background2.jpg'

const level3Img = new Image()
level3Img.src = 'images/background3.jpg'

const level4Img = new Image()
level4Img.src = 'images/background4.jpg'

const level5Img = new Image()
level5Img.src = 'images/background5.jpg'

const level6Img = new Image()
level6Img.src = 'images/background6.jpg'

const level7Img = new Image()
level7Img.src = 'images/background7.jpg'

//let background = bgArr[]

//moonshiner
const moonshiner = new Image()
moonshiner.src = 'images/temp-moonshiner.jpg'

const moonshinerWidth = 50
const moonshinerHeit = 60


// game over
let gameOver = false
let animatedID = 0

// the level 
let myLevel;

//moonshiner movement
let moonshinerY = canvas.height - moonshinerHeit - 100
let moonshinerX = canvas.width / 2 - moonshinerWidth / 2

let isMovingLeft = false
let isMovingRight = false
let isMovingUp = false
let isMovingDown = false


//bad guys
const policeImg = new Image()
policeImg.src = 'images/police.jpg'

const policeImgWidth = 50
const policeImgHeit = 60

//different levels with the backgrounds and the badguys movement

const levels = [
    {background: level1Img, name: "1", badGuys: [{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 3
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -3
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 3
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -3
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 3
        },
    ]},
    {background: level2Img, name: "2", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 6
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -6
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 6
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -6
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 6
        },
    ]},
    {background: level3Img, name: "3", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 8
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -8
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 8
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -8
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 8
        },
    ]},
    {background: level4Img, name: "4", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 10
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -10
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 10
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -10
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 10
        },
    ]},
    {background: level5Img, name: "5", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 11
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -11
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 11
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -11
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 11
        },
    ]},
    {background: level6Img, name: "6", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 13
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -13
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 13
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -13
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 13
        },
    ]},
    {background: level7Img, name: "7", badGuys:[{
        'name': 'badGuy1',
        'x': 200,
        'y': 750,
        'speed': 15
        },
        {'name': 'badGuy2',
        'x': 200,
        'y': 626,
        'speed': -15
        },
        {'name': 'badGuy3',
        'x': 560,
        'y': 500,
        'speed': 15
        },
        {'name': 'badGuy4',
        'x': 500,
        'y': 350,
        'speed': -15
        },
        {'name': 'badGuy5',
        'x': 350,
        'y': 210,
        'speed': 15
        },
    ]}
    ]




// Collision:
// bad guys positions
function checkCollision (){
levels[currentLevel].badGuys.forEach( element => {
   if (moonshinerX < element.x + policeImgWidth &&
    moonshinerX + moonshinerWidth > element.x &&
    moonshinerY < element.y + policeImgHeit &&
    moonshinerHeit + moonshinerY > element.y){
        Lives -= 1
        moonshinerY = canvas.height - moonshinerHeit - 100
        moonshinerX = canvas.width / 2 - moonshinerWidth / 2
    }
  })
  
}

function busted (){
    if (Lives < 1){
        gameOver = true
        canvas.style.display = 'none';
        document.querySelector('.game-over-screen').style.display = 'block'
    }
    
}
 




// animation
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  //backgrouns pic
  ctx.drawImage(levels[currentLevel].background, 0, 0, canvas.width, canvas.height)
 // moonshiner pic 
  ctx.drawImage(moonshiner, moonshinerX, moonshinerY, moonshinerWidth, moonshinerHeit)
  
  // game over
  if (gameOver){
    cancelAnimationFrame(animatedID)
  } else {
    animatedID = requestAnimationFrame(animate)
  }

  // How to access bad guys depending on the current level
  levels[currentLevel].badGuys = levels[currentLevel].badGuys.map( badGuy => {
    const copy = structuredClone(badGuy)
    ctx.drawImage(policeImg, copy.x, copy.y, policeImgWidth, policeImgHeit) 
    copy.x += copy.speed 
    if (copy.x <= 0) {
        copy.speed = copy.speed*-1
      }
    if (copy.x + policeImgWidth> canvas.width){
        copy.speed = copy.speed*-1
      }
    return copy
  })

  // If your character reaches the top of the screen
  if (moonshinerY < 200){
      currentLevel += 1
      levelView.innerText = currentLevel + 1
      moonshinerY = canvas.height - moonshinerHeit - 100
      moonshinerX = canvas.width / 2 - moonshinerWidth / 2
    }  

 /*  //bad guy 1 movement & restriction
  ctx.drawImage(policeImg, badGuys[0].x, badGuys[0].y, policeImgWidth, policeImgHeit)
  
  badGuys[0].x += badGuys[0].speed 
  if (badGuys[0].x <= 0) {
      badGuys[0].speed = badGuys[0].speed*-1
    }
  if (badGuys[0].x + policeImgWidth> canvas.width){
      badGuys[0].speed = badGuys[0].speed*-1
    }
  
  //bad guy 2 movement & restriction
  ctx.drawImage(policeImg, badGuys[1].x, badGuys[1].y, policeImgWidth, policeImgHeit)
  
  badGuys[1].x += badGuys[1].speed 
  if (badGuys[1].x <= 0) {
      badGuys[1].speed = badGuys[1].speed*-1
    }
  if (badGuys[1].x + policeImgWidth> canvas.width){
      badGuys[1].speed = badGuys[1].speed*-1
    }
  
    //bad guy 3 movement & restriction
  ctx.drawImage(policeImg, badGuys[2].x, badGuys[2].y, policeImgWidth, policeImgHeit)
  
   badGuys[2].x += badGuys[2].speed 
  if (badGuys[2].x <= 0) {
      badGuys[2].speed = badGuys[2].speed*-1
    }
  if (badGuys[2].x + policeImgWidth> canvas.width){
      badGuys[2].speed = badGuys[2].speed*-1    
    }
  
    //bad guy 4 movement & restriction
  ctx.drawImage(policeImg, badGuys[3].x, badGuys[3].y, policeImgWidth, policeImgHeit)
  
  badGuys[3].x += badGuys[3].speed 
  if (badGuys[3].x <= 0) {
      badGuys[3].speed = badGuys[3].speed*-1
    }
  if (badGuys[3].x + policeImgWidth> canvas.width){
      badGuys[3].speed = badGuys[3].speed*-1
    }

    //bad guy 5 movement & restriction
  ctx.drawImage(policeImg, badGuys[4].x, badGuys[4].y, policeImgWidth, policeImgHeit)
  
  badGuys[4].x += badGuys[4].speed 
  if (badGuys[4].x <= 0) {
      badGuys[4].speed = badGuys[4].speed*-1
    }
  if (badGuys[4].x + policeImgWidth> canvas.width){
      badGuys[4].speed = badGuys[4].speed*-1
    } */

  //moonshiner movement & restriction
  if (isMovingLeft && moonshinerX > 25) {
    moonshinerX -= 6
  }
  if (isMovingRight && moonshinerX < canvas.width - 50) {
    moonshinerX += 6
  }
  if (isMovingUp && moonshinerY > 25) {
    moonshinerY -= 6
  }
  if (isMovingDown && moonshinerY < canvas.height - 150) {
    moonshinerY += 6
  }

  // collision fuction
  checkCollision()
  
  // switch to game over
  busted ()
}

 //game start function
const startGame = () => {
    document.querySelector('.game-intro').style.display = 'none'
    document.querySelector('.game-over-screen').style.display = 'none'
    canvas.style.display = 'block';
    levelView.style.display = 'block'
    document.querySelector('.game-board').style.display = 'block'
    audio.play()
    animate()
    
}

  // Events:
  // game start
window.addEventListener('load', () => {
     /* canvas.style.display = 'none';
     levelView.style.display = 'none' */
     document.querySelector('.game-board').style.display = 'none'
     document.querySelector('.game-over-screen').style.display = 'none'
     document.getElementById('start-button').onclick = () => {
      startGame()
      
    }
 
 //moonshiner movement
 document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      isMovingLeft = true
    }
    if (event.key === 'ArrowRight') {
      isMovingRight = true
    }
    if (event.key === 'ArrowUp') {
        isMovingUp = true
    }
    if (event.key === 'ArrowDown') {
        isMovingDown = true
    }
  })

  document.addEventListener('keyup', event => {
    if (event.key === 'ArrowLeft') {
        isMovingLeft = false
      }
      if (event.key === 'ArrowRight') {
        isMovingRight = false
      }
      if (event.key === 'ArrowUp') {
        isMovingUp = false
      }
      if (event.key === 'ArrowDown') {
        isMovingDown = false
      }  
  })

  document.getElementById('restart-button').addEventListener('click', () => {
    gameOver = false
    moonshinerY = canvas.height - moonshinerHeit - 100
    moonshinerX = canvas.width / 2 - moonshinerWidth / 2
    currentLevel = 0
    levelView.innerText = currentLevel + 1
    Lives = 3
    /* canvas.style.display = 'none';
    levelView.style.display = 'none' */
    
    levelView.style.display = 'none'
    document.querySelector('.game-board').style.display = 'none'
    document.querySelector('.game-over-screen').style.display = 'none'
    document.querySelector('.game-intro').style.display = 'block'
  })
})