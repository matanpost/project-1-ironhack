# project-1-ironhack
creating a simple 80s style game using the materials from the first 2 weeks
First Ironhack project - Game:

based mainly on what we had learned in the first two weeks of the course.

After having the car-race lab and going over DOM manipulation we had to make a simple game based on canvas animation.

I made a game called MOONSHINER which is based on the old game of the frog trying to cross the road.

the game has 3 screens:
- game-intro
- game-board
- game-over-screen

game-intro:
contains the html with the style and the button to start the game. in the JS file there is an event that after clicking the button, will cancle the the displey of game-intro and game-over-screen and displey game-board only.

game-board:
in this screen what we see is mainly the animation created in the JS file with all the functions that recursively go over all the values and the elements to creat an animation effect.
in the animation there are "features" of: 
collision between the player character and the bad guys
bounderies for the player character and the bad guys
bad guys changing direction when reaching the edge
reaching a certain point after crossing successfully that resets the player's location giving the effect of moving to the next level  
bad guys increasing speed in the next level
background picture changing in the next level
after colliding 3 times with the bad guys the game moves the the game-over screen 

game-over screen:
while moving to this screen, the other screens' display is hidden by settings in the JS file. It has the simple design and the button that is targeted as an event to reset all and needed values and display back only the game-intro screen. 
