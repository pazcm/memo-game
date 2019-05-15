// when click button 'play' call function that create the game and pass the configuration
document.querySelector('#start').addEventListener('click', function(){
  memo({
    id: '#play',
    columns: 4,
    rows: 4
  });

  this.remove();
})

// make function that create the game
function memo(conf){

    // Numbers that going to play
    numbers = [];
    for(var i = 1; i <= (conf.columns*conf.rows) / 2; i++){
        numbers.push(i);
        console.log(numbers);
    }

}