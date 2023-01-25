const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.style.border = '2px solid gold';


const bgImg = new Image()
bgImg.src = 'images/backgrounddetailed1.png'

//moonshiner
const moonshiner = new Image()
moonshiner.src = 'images/temp-moonshiner.jpg'

const moonshinerWidth = 50
const moonshinerHeit = 60

// game over
let gameOver = false
let animatedID = 0

//moonshiner movement
let moonshinerY = canvas.height - moonshinerHeit - 100
let moonshinerX = canvas.width / 2 - moonshinerWidth / 2

let isMovingLeft = false
let isMovingRight = false
let isMovingUp = false
let isMovingDown = false


//bad guys
const policeImg = new Image()
policeImg.src = 'images/police.png'

const policeImgWidth = 50
const policeImgHeit = 60

//bad guys movement:

let badGuys = [{
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
]


// Collision:
// bad guys positions
function checkCollision (){
badGuys.forEach( element => {
   if (moonshinerX < element.x + policeImgWidth &&
    moonshinerX + moonshinerWidth > element.x &&
    moonshinerY < element.y + policeImgHeit &&
    moonshinerHeit + moonshinerY > element.y){
        gameOver = true
    }
  })
  return gameOver
}
    


// animation
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  //backgrouns pic
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
 // moonshiner pic 
  ctx.drawImage(moonshiner, moonshinerX, moonshinerY, moonshinerWidth, moonshinerHeit)
  
  // game over
  if (gameOver){
    cancelAnimationFrame(animatedID)
  } else {
    animatedID = requestAnimationFrame(animate)
  }

  //bad guy 1
  ctx.drawImage(policeImg, badGuys[0].x, badGuys[0].y, policeImgWidth, policeImgHeit)
  
  badGuys[0].x += badGuys[0].speed 
  if (badGuys[0].x <= 0) {
      badGuys[0].speed = badGuys[0].speed*-1
    }
  if (badGuys[0].x + policeImgWidth> canvas.width){
      badGuys[0].speed = badGuys[0].speed*-1
    }
  
  //bad guy 2
  ctx.drawImage(policeImg, badGuys[1].x, badGuys[1].y, policeImgWidth, policeImgHeit)
  
  badGuys[1].x += badGuys[1].speed 
  if (badGuys[1].x <= 0) {
      badGuys[1].speed = badGuys[1].speed*-1
    }
  if (badGuys[1].x + policeImgWidth> canvas.width){
      badGuys[1].speed = badGuys[1].speed*-1
    }
  
    //bad guy 3
  ctx.drawImage(policeImg, badGuys[2].x, badGuys[2].y, policeImgWidth, policeImgHeit)
  
   badGuys[2].x += badGuys[2].speed 
  if (badGuys[2].x <= 0) {
      badGuys[2].speed = badGuys[2].speed*-1
    }
  if (badGuys[2].x + policeImgWidth> canvas.width){
      badGuys[2].speed = badGuys[2].speed*-1    
    }
  
    //bad guy 4
  ctx.drawImage(policeImg, badGuys[3].x, badGuys[3].y, policeImgWidth, policeImgHeit)
  
  badGuys[3].x += badGuys[3].speed 
  if (badGuys[3].x <= 0) {
      badGuys[3].speed = badGuys[3].speed*-1
    }
  if (badGuys[3].x + policeImgWidth> canvas.width){
      badGuys[3].speed = badGuys[3].speed*-1
    }

    //bad guy 5
  ctx.drawImage(policeImg, badGuys[4].x, badGuys[4].y, policeImgWidth, policeImgHeit)
  
  badGuys[4].x += badGuys[4].speed 
  if (badGuys[4].x <= 0) {
      badGuys[4].speed = badGuys[4].speed*-1
    }
  if (badGuys[4].x + policeImgWidth> canvas.width){
      badGuys[4].speed = badGuys[4].speed*-1
    }

  //moonshiner movement & restriction
  if (isMovingLeft && moonshinerX > 25) {
    moonshinerX -= 5
  }
  if (isMovingRight && moonshinerX < canvas.width - 50) {
    moonshinerX += 5
  }
  if (isMovingUp && moonshinerY > 25) {
    moonshinerY -= 5
  }
  if (isMovingDown && moonshinerY < canvas.height - 150) {
    moonshinerY += 5
  }

  checkCollision()
}


const startGame = () => {
    document.querySelector('.game-intro').style.display = 'none'
    canvas.style.display = 'block';
    animate()
}

  // Events:
  // game start
window.addEventListener('load', () => {
   canvas.style.display = 'none';
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

})