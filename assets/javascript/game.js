var startGame = false;
    var films = ['All About Eve','On the Waterfront','The Bridge on the River Kwai','Lawrence of Arabia','The Sound of Music','Patton',
                            'The Godfather','Amadeus','Platoon','The Silence of the Lambs','Unforgiven','Braveheart','American Beauty','The Return of the King',
                            'No Country for Old Men','Slumdog Millionaire','Birdman','Moonlight','Gone with the Wind'];

                var answer = films[Math.floor(Math.random() * films.length)].toUpperCase();
                var answer_length = answer.length; 
                var num_letters_left = answer.replace(/\s/g, "").length;
                var chances = 10;
                var start_prompt = document.getElementById("start-container");
                var game_container = document.getElementById("game-container");
    document.onkeypress=function(e){
        if (!startGame) {                
            game_container.style.display = "block";
            start_prompt.style.display = "none";
            for (i =0; i<=answer_length; i++) {                    
                var node = document.createElement("span");                 // Create a <span> node
                if(answer.charAt(i).trim() === '') {
                    var textnode = document.createTextNode(" ");         // Create a text node
                }
                else {
                    var textnode = document.createTextNode("_");         // Create a text node
                }
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("answer-container").appendChild(node);
            }
            startGame = true;
        }        
    
        else {
            var letter_choice = String.fromCharCode(e.keyCode).toUpperCase();
            console.log(answer);                
                if (answer.indexOf(letter_choice) <= -1 || e.keyCode == 32) {
                    //answer_bank[answer.indexOf(letter_choice)].innerHTML() = answer.charAt(i);
                    chances = chances - 1;
                    document.getElementById("num-chances").innerHTML = chances;                        
                }
                else {
                    for(var i=0; i<answer.length;i++) {
                        if (answer[i] === letter_choice) {
                            if(document.getElementById("answer-container").getElementsByTagName('span')[i].innerHTML === "_") {
                                document.getElementById("answer-container").getElementsByTagName('span')[i].innerHTML = letter_choice;
                                num_letters_left = num_letters_left-1;
                                console.log("numbers left:" +num_letters_left);
                            }                                
                        }
                    }
                }
                
                if (chances === 0) {
                        gameOver();                            
                    }
                else if (num_letters_left < 1) {
                        youWon();
                    }
            }      
    }

    function gameOver() {
        startGame = false;
        game_container.style.display = "none";
        document.getElementById("start-game").innerHTML = "Game Over. Press any key to try again";
        start_prompt.style.display = "block";
        chances = 10;
        document.getElementById("num-chances").innerHTML = chances;
        films = ['All About Eve','On the Waterfront','The Bridge on the River Kwai','Lawrence of Arabia','The Sound of Music','Patton',
        'The Godfather','Amadeus','Platoon','The Silence of the Lambs','Unforgiven','Braveheart','American Beauty','The Return of the King',
        'No Country for Old Men','Slumdog Millionaire','Birdman','Moonlight','Gone with the Wind'];
        document.getElementById("answer-container").innerHTML = '';
        answer = films[Math.floor(Math.random() * films.length)].toUpperCase();
        answer_length = answer.length; 
        num_letters_left = answer.replace(/\s/g, "").length;
    }

    function youWon() {
        startGame = false;
        var applause = document.getElementById("applause"); 
        applause.play();
        game_container.style.display = "none";
        document.getElementById("start-game").innerHTML = "YOU WON. Press any key to play again";
        start_prompt.style.display = "block";
        chances = 10;
        document.getElementById("num-chances").innerHTML = chances;
        films = ['All About Eve','On the Waterfront','The Bridge on the River Kwai','Lawrence of Arabia','The Sound of Music','Patton',
        'The Godfather','Amadeus','Platoon','The Silence of the Lambs','Unforgiven','Braveheart','American Beauty','The Return of the King',
        'No Country for Old Men','Slumdog Millionaire','Birdman','Moonlight','Gone with the Wind'];
        document.getElementById("answer-container").innerHTML = '';
        answer = films[Math.floor(Math.random() * films.length)].toUpperCase();
        answer_length = answer.length; 
        num_letters_left = answer.replace(/\s/g, "").length;
    }