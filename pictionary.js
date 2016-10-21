window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var puzzlename;
  var thepuzzle;
  var word ;
  var guess ;
  var guesses = [ ];
  var lives ;
  var counter ;
  var space;



  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

var showCatagory = document.getElementById("scatagory");
var image1 = document.getElementById("puzzimage1")
var image2 = document.getElementById("puzzimage2")
var image3 = document.getElementById("puzzimage3")
var image4 = document.getElementById("puzzimage4")

  var selectCat = function () {
    if (thepuzzle === puzzlename[0]) {
      image1.src = "at1.png"
      image2.src = "at.jpg"
      image3.src = "at3.jpg"
      image4.src = "at2.jpg"

      catagoryName.innerHTML = "Puzzle 1";
    } else if (thepuzzle === puzzlename[1]) {
      image1.src = "batman.png"
      image2.src = "batman1.png"
      image3.src = "batman2.jpg"
      image4.src = "white.png"
      catagoryName.innerHTML = "Puzzle 2";
    } else if (thepuzzle === puzzlename[2]) {
      image1.src = "courage.jpg"
      image2.src = "courage1.jpg"
      image3.src = "courage2.jpg"
      image4.src = "courage3.jpg"

      catagoryName.innerHTML = "Puzzle 3";
    }
    else if (thepuzzle === puzzlename[3]) {
      image1.src = "criminal.jpg"
      image2.src = "criminal1.png"
      image3.src = "criminal4.jpg"
      image4.src = "criminal2.jpg"

      catagoryName.innerHTML = "Puzzle 4";
    }
    else if (thepuzzle === puzzlename[4]) {
      image1.src = "gameofthrones.jpg"
      image2.src = "gameofthrones1.jpg"
      image3.src = "gamesofthrones2.jpg"
      image4.src = "gamesofthrones3.jpg"


      catagoryName.innerHTML = "Puzzle 5";
    }
    else if (thepuzzle === puzzlename[5]) {
      image1.src = "horror.jpg"
      image2.src = "horror2.jpg"
      image3.src = "horror3.jpg"
      image4.src = "horror1.jpg"
      catagoryName.innerHTML = "Puzzle 6";
    }
    else if (thepuzzle === puzzlename[6]) {
      image1.src = "orange.png"
      image2.src = "orange2.png"
      image3.src = "orange1.png"
      image4.src = "white.png"
      catagoryName.innerHTML = "Puzzle 7";
    }
    else if (thepuzzle === puzzlename[7]) {
      image1.src = "prettyliars.jpg"
      image2.src = "prettyliars2.jpg"
      image3.src = "prettyliar3.jpg"
      image4.src = "white.png"
      catagoryName.innerHTML = "Puzzle 8";
    }
    else if (thepuzzle === puzzlename[8]) {
      image1.src = "south.png"
      image2.src = "south1.gif"
      image3.src = "south2.jpg"
      image4.src = "south3.gif"
      catagoryName.innerHTML = "Puzzle 9";
    }
    else if (thepuzzle === puzzlename[9]) {
      image1.src = "sponge.jpg"
      image2.src = "sponge1.jpg"
      image3.src = "sponge3.jpg"
      image4.src = "sponge2.jpg"
      catagoryName.innerHTML = "Puzzle 10";
    }
    else if (thepuzzle === puzzlename[10]) {
      image1.src = "walkingdead.jpg"
      image2.src = "walkingdead1.jpg"
      image3.src = "walkingdead2.jpg"
      image4.src = "white.png"
      catagoryName.innerHTML = "Puzzle 11";
    }
    else if (thepuzzle === puzzlename[11]) {
      image1.src = "tj1.png"
      image2.src = "tj.jpg"
      image3.src = "tj.png"
      image4.src = "white.png"
      catagoryName.innerHTML = "Puzzle 12";
    }
  }


   result = function () {
    words = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      words.appendChild(correct);
      correct.appendChild(guess);
    }
  }

var showLives = document.getElementById("mylives");
   comments = function () {
    showLives.innerHTML = "You have " + lives + " more tries.";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

   check = function () {
    list.onclick = function () {
      var guessone = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guessone) {
          guesses[i].innerHTML = guessone;
          counter += 1;
        }
      }
      var j = (word.indexOf(guessone));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }

  play = function () {
    puzzlename = [
        ["adventure time" ], ["batman"],["courage the cowardly dog"], ["criminal minds"], ["game of thrones"], ["american horror story"], ["orange is the new black"],
        ["pretty little liars"], ["south park"], ["spongebob squarepants"], ["the walking dead"], ["tom and jerry"]
    ];
    thepuzzle = puzzlename[Math.floor(Math.random() * puzzlename.length)];
    word = thepuzzle[Math.floor(Math.random() * thepuzzle.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
  }
  play();

 }
