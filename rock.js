function rpsgame(yourchoice){
    const userchoice = yourchoice.id;

    const botchoice = botNumber(randno());
    console.log(botchoice);
    results = decideWinner(userchoice,botchoice);
    console.log(results);
    message = finalJudge(results);
    console.log(message);
    frontDisp(userchoice, botchoice, message);
   // alert(results);
    function randno(){
        return Math.floor(Math.random()*3);
    }
    function botNumber(number){
        return ['rock' , 'paper' , 'scissor'][number];
    }
    function decideWinner(choice1,choice2){
        var data = {
            'rock' : {'rock' :0.5, 'paper' :0,'scissor':1 },
            'paper' : {'rock' :1, 'paper' :0.5,'scissor':0 },
            'scissor' : {'rock' :0, 'paper' :1,'scissor':0.5 },
        }
        humanchoice1 = data[choice1][choice2];
        botchoice2 =data[choice2][choice1];
        return [humanchoice1,botchoice2];        
    
    }
    function finalJudge([yourScore, compScore]){
        if(yourScore === 0){
            return {'message': 'Tony Won, You Lost', 'color': 'red' }
        }
        else if(yourScore === 0.5){
            return {'message': 'We Tied','color': 'orange'}
        }
        else {
            return {'message': 'You Won, Tony Lost','color': 'green'}
        }
    }
    function frontDisp(userChoice,compChoice,finalJudge){
        var imgData = {
            'rock' : document.getElementById('rock').src, 
            'paper' : document.getElementById('paper').src, 
            'scissor' : document.getElementById('paper').src
        }
        //remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();
                
        var userdiv = document.createElement('div');
        var messagediv = document.createElement('div');
        var compdiv = document.createElement('div');
        
        userdiv.innerHTML = "<img src = '" + imgData[userChoice] + "' width = 200 height = 200 style ='box-shadow: 10px 10px 50px  blue;' >"
        messagediv.innerHTML = "<h1 style = 'color: " + finalJudge['color'] + "; padding: 60px; font-size : 35px;'>" + finalJudge['message'] + "</h1>"
        compdiv.innerHTML = "<img src = '" + imgData[compChoice] + "' width = 200 height = 200 style ='box-shadow: 10px 10px 50px  red;' >"

        document.getElementById('flex-box-rps-div').appendChild(userdiv);
        document.getElementById('flex-box-rps-div').appendChild(messagediv);
        document.getElementById('flex-box-rps-div').appendChild(compdiv);
        
    }    
}
function Refresh(){
    window.location.reload();
}