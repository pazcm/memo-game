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
        g = { // game data
            started: false,
            gameOver: false
            // time = 0;
        };
        
    // numbers that going to play
    var numbers = [];
    for(var i = 1; i <= (conf.columns*conf.rows) / 2; i++){
        numbers.push(i);
        console.log(numbers);
    }
    
    // create table
    for(var i = 0; i < conf.rows; i++){
        var tr = d.createElement('tr');

        for(var j = 0; j < conf.columns; j++){
            var td = d.createElement('td'),
                span = d.createElement('span');

            // append to table
            tr.appendChild(td);
            td.appendChild(span);
        }

        t.appendChild(tr);
        console.log(t);
    }

}