// Variables for simple numbers
var money = 100;
var bet = 0;
var hitsLeft = 3;
var oppHitsLeft = 3;

// Variables for moving items in animations
var chipsY = 1000; //0 //330 //440
var buttonsY = 1000; //0 //325 //445
var textY = 1000; //0 //70 //34

// Variables for all the gui stuff
var menu = true;
var cardSkinScreen = false;
var betting = false;
var endScreen = false;
var animation1 = false;
var animation2 = false;
var animation3 = false;
var cardAnimations = false;
var reset = true;
var playerCardsX = 140;
var oppCardsX = 140;
var win = false;
var lose = false;

// Variables for all the cards
var playerCard1 = Math.floor(Math.random() * 11) + 1; // First given card
var playerCard2 = Math.floor(Math.random() * 11) + 1; // Second given card
var playerCard3 = Math.floor(Math.random() * 11) + 1; // First hit card
var playerCard4 = Math.floor(Math.random() * 11) + 1; // Second hit card
var playerCard5 = Math.floor(Math.random() * 11) + 1; // Third hit card
var playerScore = playerCard1 + playerCard2;
var playerCards = [playerCard1, playerCard2, playerCard3, playerCard4, playerCard5];
var oppCard1 = Math.floor(Math.random() * 11) + 1; // First given card
var oppCard2 = Math.floor(Math.random() * 11) + 1; // Second given card
var oppCard3 = Math.floor(Math.random() * 11) + 1; // First hit card
var oppCard4 = Math.floor(Math.random() * 11) + 1; // Second hit card
var oppCard5 = Math.floor(Math.random() * 11) + 1; // Third hit card
var oppScore = oppCard1 + oppCard2;
var oppCards = [oppCard1, oppCard2, oppCard3, oppCard4, oppCard5];

var saveCode = "";

// Holds card colors that will be changed with skin equipped and which skin is equipped
var cardColor = "white";
var cardTextColor = "black";
var equipped = "classic";

// vars to keep track of what card skins are owned
var halloweenOwned = false;
var richOwned = false;

// Do not show controls for mobile because I do not use them
showMobileControls(false, false, false, false);

function draw() {
  //clear display
  background(255);
  
  //money display
  fill("black");
  textSize(35);
  text("Money: " + money, 10, textY);
  
  //bet display
  fill("black");
  textSize(35);
  text("Bet: " + bet, 225, textY);
  
  //bar for under value/num displays
  rect(10, textY + 10, 380, 2);
  
  //button for stand
  fill(rgb(200, 20, 50));
  rect(50, buttonsY, 120, 60);
  
  //button for hit
  fill(rgb(50, 200, 75));
  rect(225, buttonsY, 120, 60);
  
  //text for stand
  fill("white");
  textSize(40);
  text("Stand", 58, buttonsY + 45);
  
  //text for hit
  fill("white");
  textSize(40);
  text("Hit", 260, buttonsY + 45);
  
  //chips
  fill("white");
  ellipse(50, chipsY, 60, 60);
  
  fill("red");
  ellipse(125, chipsY, 60, 60);
  
  fill("green");
  ellipse(200, chipsY, 60, 60);
  
  fill("blue");
  ellipse(275, chipsY, 60, 60);
  
  fill("black");
  ellipse(350, chipsY, 60, 60);
  
  //text for on chips to display their num value
  fill("black");
  textSize(30);
  text("5", 42, chipsY + 10);
  fill("white");
  text("10", 108, chipsY + 10);
  text("20", 184, chipsY + 10);
  text("50", 259, chipsY + 10);
  text("100", 325, chipsY + 10);
  
  if (animation1 || animation2 || animation3) {
    animations();
  }
  
  // Controls which screens are being shown
  if (menu) {
    menuPhase();
  } else if (cardSkinScreen) {
    cardSkinPhase();
  } else if (betting) {
    bettingPhase();
  } else {
    playingPhase();
  }
  
  if (endScreen) {
    endScreenPhase();
  }
  
  // Changes variables for the animations
  if (cardAnimations) {
    if (playerCardsX < 176) {
      playerCardsX += 3;
      if (playerCardsX >= 176) {
        cardAnimations = false;
      }
    }
    if (playerCardsX < 212 && playerCardsX >= 176) {
      playerCardsX += 3;
      if (playerCardsX >= 212) {
        cardAnimations = false;
      }
    }
  }
}

function menuPhase() {
  // Buttons and text for menu
  fill("gray");
  rect(120, 165, 150, 50);
  rect(80, 235, 235, 50);
  rect(107, 305, 180, 50);
  textSize(50);
  fill("black");
  text("BlackJack", 85, 100);
  textSize(30);
  text("Play", 165, 200);
  text("Save/Load Data", 90, 270);
  text("Card Skins", 125, 340);
  
  // Checks for what button is clicked in menu
  if (World.mouseX > 120 && World.mouseX < 270 && World.mouseY > 165 && World.mouseY < 220) {
    if (mouseWentDown()) {
      chipsY = 330; //0 //330 //440
      buttonsY = 445; //0 //325 //445
      textY = 70; //0 //70 //34
      betting = true;
      menu = false;
    }
  }
  if (World.mouseX > 110 && World.mouseX < 290 && World.mouseY > 310 && World.mouseY < 360) {
    if (mouseWentDown()) {
      cardSkinScreen = true;
      menu = false;
    }
  }
}

function cardSkinPhase() {
  // Prints money to top of screen
  textSize(30);
  fill("black");
  text("Money: " + money, 120, 40);
  
  // Physical cards to show what the skins look like
  fill("white");
  rect(55, 70, 50, 75);
  fill("orange");
  rect(175, 70, 50, 75);
  fill("gold");
  rect(295, 70, 50, 75);
  
  // Text for on the display cards
  textSize(30);
  fill("black");
  text("7", 72, 120);
  fill("purple");
  text("7", 192, 120);
  fill("white");
  text("7", 312, 120);
  
  // Text for names of card skins
  textSize(20);
  fill("black");
  text("Classic", 50, 170);
  text("Halloween", 155, 170);
  text("Rich", 300, 170);
  
  // Buttons to buy or equip
  fill("gray");
  rect(30, 180, 100, 40);
  rect(150, 180, 100, 40);
  fill("white");
  if (equipped == "classic") {
    text("Equipped", 40, 207);
    cardColor = "white";
    cardTextColor = "black";
  } else {
    text("Equip", 55, 207);
  }
  if (!halloweenOwned) {
    text("$50", 182, 207);
  } else if (equipped == "halloween") {
    text("Equipped", 160, 207);
    cardColor = "orange";
    cardTextColor = "purple";
  } else {
    text("Equip", 175, 207);
  }
  
  // Checks for when buttons are pressed to buy or equip card skins
  if (World.mouseX > 30 && World.mouseX < 130 && World.mouseY > 180 && World.mouseY < 220 && mouseDown()) {
    equipped = "classic";
  }
  if (World.mouseX > 150 && World.mouseX < 250 && World.mouseY > 180 && World.mouseY < 220 && mouseDown()) {
    if (halloweenOwned) {
      equipped = "halloween";
    } else {
      if (money >= 50) {
        money -= 50;
        halloweenOwned = true;
        equipped = "halloween";
      }
    }
  }
  
  // Hitbox for back button
  // fill("gray");
  // rect(10, 10, 50, 50);
  fill("black");
  textSize(50);
  text("<", 20, 50);
  if (World.mouseX > 10 && World.mouseX < 60 && World.mouseY > 10 && World.mouseY < 60 && mouseDown()) {
    menu = true;
    cardSkinScreen = false;
  }
}

// Places button to stop betting and start playing after a delay so that you dont accidentily pr
function placeButton() {
  if (World.mouseX > 107 && World.mouseX < 292 && World.mouseY > 150 && World.mouseY < 210 && mouseDown()) {
    animation2 = false;
    animation1 = true;
  }
}

function bettingPhase() {
  //done betting button
  fill("gray");
  rect(107, 140, 185, 60);
  
  fill("white");
  text("Done Betting", 112, 180);
  
  fill("black");
  text("Place your bet:", 100, 275);
  
  setTimeout(placeButton, 500);
  
  //checks for when user clicks one of the chips to enter a bet
  if (World.mouseX > 20 && World.mouseX < 80 && World.mouseY > chipsY - 30 && World.mouseY < chipsY + 30) {
    if (mouseWentDown() && money >= 5) {
      money -= 5;
      bet += 5;
    }
  }
  if (World.mouseX > 95 && World.mouseX < 155 && World.mouseY > chipsY - 30 && World.mouseY < chipsY + 30) {
    if (mouseWentDown() && money >= 10) {
      money -= 10;
      bet += 10;
    }
  }
  if (World.mouseX > 170 && World.mouseX < 230 && World.mouseY > chipsY - 30 && World.mouseY < chipsY + 30) {
    if (mouseWentDown() && money >= 20) {
      money -= 20;
      bet += 20;
    }
  }
  if (World.mouseX > 245 && World.mouseX < 305 && World.mouseY > chipsY - 30 && World.mouseY < chipsY + 30) {
    if (mouseWentDown() && money >= 50) {
      money -= 50;
      bet += 50;
    }
  }
  if (World.mouseX > 320 && World.mouseX < 380 && World.mouseY > chipsY - 30 && World.mouseY < chipsY + 30) {
    if (mouseWentDown() && money >= 100) {
      money -= 100;
      bet += 100;
    }
  }
}

function dealerHits() {
  // check if need to continue
  if (oppHitsLeft > 0 && oppScore < 17) {
    var Y = 5 - oppHitsLeft;
    var oppCardsX = oppCards[Y];
    oppScore += oppCardsX;
    oppHitsLeft -= 1;

    // wait 1 sec before hitting next card
    setTimeout(dealerHits, 1000);
  } else {
    // when hit all needed then go to end screen
    animation1 = false;
    animation3 = true;
  }
}

function playingPhase() {
  // Reset all variables needed for round so that it is dif every round
  if (reset == false) {
    hitsLeft = 3;
    oppHitsLeft = 3;
    playerScore = 0;
    oppScore = 0;
    win = false;
    lose = false;
    
    // PHYSICAL CARDS (VISIBLE)
    playerCardsX = 140;
    oppCardsX = 140;
    
    // Changes card values to be random each round
    playerCard1 = Math.floor(Math.random() * 11) + 1; // First given card
    playerCard2 = Math.floor(Math.random() * 11) + 1; // Second given card
    playerCard3 = Math.floor(Math.random() * 11) + 1; // First hit card
    playerCard4 = Math.floor(Math.random() * 11) + 1; // Second hit card
    playerCard5 = Math.floor(Math.random() * 11) + 1; // Third hit card
    playerScore = playerCard1 + playerCard2;
    playerCards = [playerCard1, playerCard2, playerCard3, playerCard4, playerCard5];
    
    oppCard1 = Math.floor(Math.random() * 11) + 1; // First given card
    oppCard2 = Math.floor(Math.random() * 11) + 1; // Second given card
    oppCard3 = Math.floor(Math.random() * 11) + 1; // First hit card
    oppCard4 = Math.floor(Math.random() * 11) + 1; // Second hit card
    oppCard5 = Math.floor(Math.random() * 11) + 1; // Third hit card
    oppScore = oppCard1 + oppCard2;
    oppCards = [oppCard1, oppCard2, oppCard3, oppCard4, oppCard5];
    reset = true;
  }
  
  // DEALER AND PLAYER SCORE IN NUMBER
  fill("black");
  textSize(25);
  text("Opponents Score:" + oppScore, 85, 80);
  text("Your Score:" + playerScore, 120, 305);
  
  textSize(15);
  text("Hits left: " + hitsLeft, 255, buttonsY + 75);
  text(oppHitsLeft, 200, 60);
  
  // Draws player and opp cards
  fill(cardColor);
  rect(playerCardsX, 200, 50, 75); // player card 1
  rect(playerCardsX + 75, 200, 50, 75); // player card 2
  if (hitsLeft <= 2) {
    rect(playerCardsX - 75, 200, 50, 75); // player card 3 - after 1 hit
  }
  if (hitsLeft <= 1) {
    rect(playerCardsX - 150, 200, 50, 75); // player card 4 - after 1 hit
  }
  
  rect(oppCardsX, 95, 50, 75); // dealer card 1
  rect(oppCardsX + 75, 95, 50, 75); // dealer card 2
  
  // Draws the text for the numbers that goes on the cards
  fill(cardTextColor);
  textSize(30);
  if (playerCard1 < 10) {
    text(playerCard1, playerCardsX + 18, 250);
  } else {
    text(playerCard1, playerCardsX + 10, 250);
  }
  if (playerCard2 < 10) {
    text(playerCard2, playerCardsX + 93, 250);
  } else {
    text(playerCard2, playerCardsX + 85, 250);
  }
  if (hitsLeft <= 2) {
    if (playerCard1 < 10) {
      text(playerCard3, playerCardsX - 57, 250);
    } else {
      text(playerCard3, playerCardsX - 65, 250);
    }
  }
  if (hitsLeft <= 1) {
    if (playerCard1 < 10) {
      text(playerCard4, playerCardsX - 132, 250);
    } else {
      text(playerCard4, playerCardsX - 140, 250);
    }
  }
  
  if (oppCard1 < 10) {
    text(oppCard1, oppCardsX + 18, 145);
  } else {
    text(oppCard1, oppCardsX + 10, 145);
  }
  if (oppCard2 < 10) {
    text(oppCard2, oppCardsX + 93, 145);
  } else {
    text(oppCard2, oppCardsX + 85, 145);
  }
  
  // Stand Button
  if (World.mouseX > 50 && World.mouseX < 170 && World.mouseY > 320 && World.mouseY < 380) {
    if (mouseWentDown()) {
      //Opponent Hits
      dealerHits();
    }
  }
  // Hit Button
  if (World.mouseX > 225 && World.mouseX < 345 && World.mouseY > 320 && World.mouseY < 380) {
    if (mouseWentDown()) {
      if (hitsLeft > 0) {
        var X = 5 - hitsLeft;
        var playerCardX = playerCards[X];
        playerScore += playerCardX;
        hitsLeft -= 1;
        cardAnimations = true;
      }
    }
  }
}

function endScreenPhase() {
  fill("gray");
  rect(190, 325, 185, 60);
  
  textSize(30);
  fill("white");
  text("Continue", 220, 365);
  
  fill("black");
  if ((playerScore > oppScore && playerScore <= 21) || (oppScore > 21 && playerScore <= 21)) {
    text("You Win!", 20, 365);
    win = true;
  } else if ((oppScore > playerScore && oppScore <= 21) || (playerScore > 21 && oppScore <= 21)) {
    text("You Lose!", 20, 365);
    lose = true;
  } else {
    text("Draw!", 20, 365);
  }
  
  fill("black");
  textSize(20);
  text(win, 10, 100);
  text(lose, 10, 125);
  
  if (World.mouseX > 190 && World.mouseX < 375 && World.mouseY > 325 && World.mouseY < 385 && mouseWentDown()) {
    if (win) {
      money += bet * 2;
      bet = 0;
    } else if (lose) {
      //notin happen because money subtracted when betting
      bet = 0;
    } else {
      money += bet;
      bet = 0;
    }
    animation3 = false;
    animation2 = true;
    endScreen = false;
  }
}

function animations() {
  //chips go away and hit or stand buttons come in
  if (animation1) {
    if (chipsY < 440) {
      chipsY += 5;
    }
    if (textY > 34) {
      textY -= 2;
    }
    if (chipsY == 440) {
      if (buttonsY >= 325) {
        buttonsY -= 5;
        if (buttonsY == 325) {
          betting = false;
          reset = false;
        }
      }
    }
  }
  
  //takes away hit and stand buttons and gives ending screen
  if (animation3) {
    if (buttonsY < 445) {
      buttonsY += 5;
    } else {
      endScreen = true;
    }
  }
  
  //brings in chips and bet screen
  if (animation2) {
    betting = true;
    if (chipsY >= 330) {
      chipsY -= 5;
    }
    if (textY <= 70) {
      textY += 2;
    }
  }
}

///
    //WHAT NEEDS TO BE ADDED:
    //
    //  - Fix still not getting money when winning or winning money when losing
    //  - Card animations when hit - in progress
    //  - Need to add in aces | Can do something like if playerScore + 11 > 21
    //    then ace will = 1 but if not then ace = 11 | will need to change RNG
    //    to be 1-10 and if it is 1 then make it be ace and then check to see if
    //    it should be 1 or 11 | currently RNG is 1-11 so not good
    //  - Make it so money and bet numbers will compress into 1K instead of 1,000
    //  - Make a save code so people can save and load progress
///

//                                    ##
//                                    ##
//                                    ##     ##       
//  ##### ##   ##   ##  ###    #####  #####      ####  ### 
// ##  ## ##   ##   ## ##  ##  ##  ## ##  ## ## ##    ##   
// ##  ##  ## #### ##  ##  ##  ##  ## ##  ## ## ##      ## 
//  #####   ###  ###    ### ## #####  ##  ## ##  #### ###   
//     ##                      ##                          
// ##  ##                      ##                        
//  ####                       ##
// Blackjack - Made by gwaphics (Jake Petty) - RHS - APCSP - 10th Grade - 8/30/24-?????
