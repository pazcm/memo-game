document.querySelector('#screen').addEventListener('click', function(){
  memo({
    id: '#play',
    columns: 4,
    rows: 4
  });

  this.remove();
})

function memo(conf){
    var d = document, // document
        t = d.createElement('table'), // table
        b = d.querySelector('#play'), // board
        n = 0, // numbers
        m = d.querySelectorAll('span'), // all matched
        // create reset button
        reset = d.createElement('button');
        reset.innerHTML = 'Reset Game';
        reset.className = 'reset';
        // restart the game
        reset.onclick = function () {
            document.querySelector('.game-comments').remove();
            document.querySelector('.game-board').remove();
            document.querySelector('.game-controls').remove();
            memo({
                id: '#play',
                columns: 4,
                rows: 4
            });
        };

        g = { // game data
            picked: [],
            playTime: Math.ceil((conf.columns*conf.rows)*2.5),
            gameOver: false,
            started: false,
        },

        // numbers that going to play
        nums = [];
            for(var i = 1; i <= (conf.columns*conf.rows) / 2; i++){
                nums.push(i);
            }

    // dublicate numbers
    var numbers = nums.concat(nums);
    // shuffle total numbers
    numbers.sort(function() { return 0.5 - Math.random() });

    // create table 4rows x 4cols
    for(var i = 0; i < conf.rows; i++){
        var tr = d.createElement('tr');

        for(var j = 0; j < conf.columns; j++){
            var td = d.createElement('td'),
                span = d.createElement('span');

            // insert numbers
            span.innerHTML = numbers[n];

            // add event
            td.addEventListener('click', clicked);

            // append to table
            tr.appendChild(td);
            td.appendChild(span);

            n++;
        }

        t.appendChild(tr);
    }

    // append game comments to the board
    var comments = d.createElement('div');
    comments.className = 'game-comments';
    b.appendChild(comments);

    // create board where numbers will be displayed and append table to it
    t.className = 'game-board';
    b.appendChild(t);

    // append panel controls to the board
    var controls = d.createElement('div');
    controls.className = 'game-controls';
    b.appendChild(controls);


    // start game after 5 seconds .. clear numbers and start time for playing
    function start(){
        var time = Math.ceil((conf.columns * conf.rows)*0.25);
        
        var interval = setInterval(function(){
            controls.innerHTML = 'The game starts in ... ' + time + ' seconds';

            if(time == 0){
                clearNums();
                countDown();
                g.started = true;

                clearInterval(interval);
            } else time--;
        }, 1000);
    }
    start();
    
    // clear numbers
    function clearNums(){
        var allNums = d.querySelectorAll('span');
        for(var i = 0; i < allNums.length; i++){
            if(allNums[i].className !== ('match')){
                allNums[i].className = 'single'; //set all numbers as single
            }
        }
    }
    
    // get all matched numbers
    function allMatched() {
        var matched = document.querySelectorAll('.match');
            if (matched.length == 16) {
                return true;
            }else return false;
    }

    // set time for playing
    function countDown(){
        var interval = setInterval(function(){
            if(g.playTime == 0  || allMatched() == true){
                gameOver();
            } else {
                controls.innerHTML = 'You have ' + (g.playTime--) + ' seconds left to complete the game ...';
            }
        }, 1000);
    }
    
    // game over
    function gameOver(){
        g.gameOver = true;
        var matched = d.querySelectorAll('.match');

        for(var m = 0; m < matched.length; m++){
            if (matched.length == 16) {
            controls.innerHTML = 'You win!';
            }else {
            controls.innerHTML = 'Game Over';
            }
        }
        // controls.appendChild(reset);
        comments.appendChild(reset);
    }
    
     // logic when click a box
    function clicked(){
       var square = this.childNodes[0]; // get tile
       
        if(square.className == 'match' || square.className == 'select' || !g.started || g.gameOver) return;

        var matched = document.querySelectorAll('.match');
        if (matched.length == 16) {
            gameOver();
        }

        if(g.picked.length == 2) {
            g.picked = [];
        }

        if(g.picked.length == 0) {
            g.picked[0] = square;
            square.className = 'select';
        } else if(g.picked.length == 1){
            g.picked[1] = square;
            square.className = 'select';

            // compare values of selection
            if(g.picked[0].innerHTML == g.picked[1].innerHTML) {
                g.picked[0].className = 'match'; // set as 'match'
                g.picked[1].className = 'match';
                // comments.innerHTML = 'Match!';

            } else{ // no match
                g.started = false;
                setTimeout(function(){
                    g.started = true;
                    clearNums();
                }, 1000);
                // comments.innerHTML = 'Try again!';
            }
        }
    }
}
