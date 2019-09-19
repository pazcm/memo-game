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

I tried to give to the game a retro look and feel and make it simple and easy for playing although cool for the user to play a quick round.

## LOGIC

The game consists in create a table and a board by using javascript which will show some content, in this case 8 pair of numbers and where also some comments will be displayed.

The numbers to play (16 in total) are calculated multiplying the columns(4) by the rows(4) and divide by 2 which will be stored in an array. After this the numbers will be duplicated by using js 'concat' method, to get 8 pairs of numbers to be matched.

Then the numbers will be inserted in the table by using the innerHTML property which add the numbers duplicated in each 'span' element.
 
On the other hand, the user have to get a random order of the numbers each time the game starts, which is achieved through a sort method and Math.random fucntion.

How does the game start? An event listener will trigger when a user clicks the start button.

The logic when the user clicks a box, lies in giving an empty array; each time that a square is picked, its value(the number) is stored and a css class ('select') is added. Then it compares the two selected values, if they are the same, other css class ('match') is added.
To allow only two clicks, the length of the array is equal to 2.

How does the game finish? A game over function was created which consits in a for loop that iterates through the numbers to check if they have the same class. Also a count down function with a time interval will terminate the game when the time ends.


## Features

- Clickable button (Play)
- Timer
- Messages / Feedback
- Mix numbers


### Features Left to Implement
- Reset button
- Score
- Estadistics 2/3
- Sound

## Technologies Used

- [IDE Cloud9](console.aws.amazon.com/cloud9/ide)
    - The project uses an online IDE for development.

- [Git/GitHub](https://github.com)
    - The project uses **Git** version control to manage and track the changes in the code and host this project.

- [HTML5](https://html.spec.whatwg.org/multipage/)
    - The project uses semantic **HTML5** elements to structure and present the content.

- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
    - The project uses **JavaScript** as a main programming language to initialize and run the app.

- [CSS3](https://www.w3.org/Style/CSS/)
    - The project uses **CSS3** to create the look and feel with a custom style.

- [Google Fonts](https://fonts.google.com/)
    - The projects uses **Google fonts** for the typography.

## Testing

Manual testing for compatibility issues and responsive design. All pages of the website were tested continuously during the development. Chrome and Chrome Developer Tools were the main browser and tool used for testing. Moreover, the site was tested using Firefox and Safari browsers.

>> HTML was validated using the Markup Validation Service provided by The World Wide Web Consortium: https://validator.w3.org/
>> CSS was validated using the CSS Validation Service provided by The World Wide Web Consortium: https://jigsaw.w3.org/css-validator/

>> test case:
[]. Play a round:
    0. Push 'Play' button.
    1. Check that the button is removed and a board with a table filled with numbers is showed. 
    2. Check the game starts after 5 seconds.
    3. Check that a count down time is showing when the game started.
    4. Click two squares and check that they disappear if no match or they remain visible if they match.
    5. Check that the game is over when the count down is 0.
    6. Check that the game is over when all squares are matched and a winner messaged is displayed in the board.
    

## Deployment

I used [GitHub](https://github.com) to host the project, I created a repo for it to live in and it was developed in one branch (master)

I set the Source/master branch and published, under my project settings/GitHub Pages. [See](https://pazcm.github.io/memo-game/)

## Credits

https://www.w3schools.com/howto/howto_js_countdown.asp

https://css-tricks.com/snippets/javascript/shuffle-array/ 

Style Fancy Buttons: https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ 

