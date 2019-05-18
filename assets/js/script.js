// when click button 'play' call function that create the game and pass the configuration
document.querySelector('#start').addEventListener('click', function(){
  memo({
    id: '#play',
    columns: 4,
    rows: 4
  });

  this.remove();
});

// make function that create the game
function memo(conf){
    
    var d = document, // document
        t = d.createElement('table'), // table
        b = d.querySelector(conf.id), // board
        g = { // game data
            started: false,
            gameOver: false
            // time = 0;
        },
        n = 0;
        
    // numbers that going to play
    var nums = [];
    for(var i = 1; i <= (conf.columns*conf.rows) / 2; i++){
        nums.push(i);
        console.log(nums);
    }
    
    // duplicate numbers
    var numbers = nums.concat(nums);
    console.log(numbers);
    
    // shuffle numbers
    numbers.sort(function() { return 0.5 - Math.random() });
    
    // create table
    for(var i = 0; i < conf.rows; i++){
        var tr = d.createElement('tr');

        for(var j = 0; j < conf.columns; j++){
            var td = d.createElement('td'),
                span = d.createElement('span');
                
            //insert numbers
            span.innerHTML = numbers[n];

            // append to table
            tr.appendChild(td);
            td.appendChild(span);
            
            n++;
        }

        t.appendChild(tr);
        console.log(t);
    }
    
    // create board where numbers will be displayed and append table to it
    t.className = 'game-board';
    b.appendChild(t);
    console.log(b);
    
    
}