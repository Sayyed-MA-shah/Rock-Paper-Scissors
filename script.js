function getComputerChoice(){
    let cChoice = Math.floor(Math.random() *3);

    let value;
    if (cChoice == 0){
        value = 'rock';
    }else if(cChoice == 1){
        value = 'paper';
    }else if(cChoice == 2){
        value = 'seaser';
    }else{
        alert('Undefined Number')
    }

    return value;
}


function playRound(playerSelection, computerSelection) {
    const userI =  prompt("Enter Your value from three of 'rock, seaser, papper' ");
    alert(getComputerChoice());
    const bot = getComputerChoice();

    console.log(bot);


    let result;
     
    if (userI == 'rock' && bot == 'seaser'){

      result = alert('player won, Computer lose 1');
      return result;
       
    }else if(userI == 'paper' && bot == 'rock'){

        result = alert('player won, Computer lose 2');
        return result;
        
    }else if(userI == 'seaser' && bot == 'paper'){

        result = alert('player won, Computer lose 3');
        return result;
        
        
    }else if ( bot == 'rock' && userI == 'seaser'){

        result = alert("Computer Won, You Lose 1");
        return result;
        
        
    }else if(bot == 'seaser' &&  userI == 'paper'){

        result = alert("Computer Won, You Lose 2");
        return result;
                
        
    }else if(bot == 'paper' && userI == 'rock'){

        result = alert("Computer Won, You Lose 3");
        return result;
        
        
    }else{
        alert("match Tie");
    }
  }
  

  playRound();
//   alert(getComputerChoice());



// Rock wins against Scissors.
// Scissors wins against Paper.
// Paper wins against Rock.
