# Memory Game

This project was built as a simple, dynamic and interactive memory game example to practice how to apply Javascript. In first place, a start button is showed. When the user push it, a table is displayed with some unordered numbers along as a count down time to give some time to the user memorize. Then, the game will start and some fix time is given to complete the game.
If the user matches all numbers and finishes in time, wins the game! If not, ... loses :/

## UX

User Stories:
- As a user, I want to see a 'Play button' so I know how to start the game.
- As a user, I want to see messages so I know what's going on.
- As a user, I want to see a timer to glance how long I'm playing.
- As a user, I want to see the game satisfactory in my mobile and tablet so I can play in any device.

[wireframes, mockups, diagrams ...]

The aim is to make easier to the user how to get an appointment and provide them with relevant information about the clinic through a minimalist angle/style following UX Design principles, prioritising the usability and accessibility of the site.

I tried to give to the game a retro look and feel and make it as simple as possible for a user to play a quick round.

## LOGIC

    The game consists in create a table and a board by using javascript which will show some content, in this case 8 pair of numbers and where some comments will be displayed.
The numbers to play (16 in total) are calculated multiplying the columns(4) by the rows(4) and divide by 2 which will be stored in an array. After this the numbers will be duplicated to get 8 pairs of numbers to be matched.
On the other hand, the user have to get a random order of the numbers each time the game starts, which is achieved through a sort method and Math.random fucntion.
How does the game start? An event listener will trigger when a user clicks the start button.
The logic when the user clicks a box, lies in giving an empty array, each time that a square with a number is picked its value is stored and a class is added, then it compares the two selected values, if they are the same, other css class is added.
To allow only two clicks, the length of the array is equal to 2.
How does the game finish? A game over function was created which consits in a for loop that iterate through the numbers to check if they have the same class. Also a count down function with a time interval will end the game.

## Features

- Clickable buttons (Start/Reset)
- Timer
- Messages
- Mix number/ shuttle    