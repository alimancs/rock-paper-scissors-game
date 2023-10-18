"use strict";
const pickBox = document.querySelector("#userChoice");
const judge = document.querySelector("#judge");
const uc = document.querySelector("#uc");
const hc = document.querySelector("#hc");
const resultBox = document.querySelector("#resultbx");
const result = document.querySelector("#result");
const score = document.querySelector("#score");
const rules = document.querySelector("#rulesbx");
let userScore = 0;
const choice = {
    rock:['rgb(235, 2, 2)', 'rgb(193, 4, 4)','icon-rock.svg',3],
    paper:['rgb(2, 122, 235)','rgb(6, 92, 173)','icon-paper.svg', 4],
    scissors:['rgb(235, 196, 2)', 'rgb(194, 146, 3)','icon-scissors.svg', 5],
    lizard:['rgb(136, 75, 207)', 'rgb(95, 49, 147)', 'icon-lizard.svg', 2],
    spock:['rgb(2, 235, 208)','rgb(5, 188, 167)', 'icon-spock.svg', 1],
}
const choiceNum = {
    3:['rock',3],
    4:['paper', 4],
    5:['scissors', 5],
    2:['lizard', 2],
    1:['spock', 1],
}

function decideResult(userchoice) {
   let houseChoice = Math.trunc(Math.random()*5)+1;
   pickBox.style.display = 'none';
   judge.style.display = 'flex';
   uc.style.borderColor = userchoice[0];
   uc.style.boxShadow =`0px 7px ${userchoice[1]}`;
   uc.style.backgroundImage = `url(${userchoice[2]})`;
   hc.style.borderColor = choice[choiceNum[houseChoice][0]][0];
   hc.style.boxShadow =`0px 7px ${choice[choiceNum[houseChoice][0]][1]}`;
   hc.style.backgroundImage = `url(${choice[choiceNum[houseChoice][0]][2]})`;
   resultBox.style.display = "flex";
   if (userchoice[3]===houseChoice) {
    result.innerHTML = "DRAW";
   } else if (userchoice[3]!==houseChoice) {
        if (userchoice[3]>houseChoice) {
            if (userchoice[3]-houseChoice === 1) {
                result.innerHTML = "YOU WIN";
            } else if (userchoice[3]-houseChoice === 2) {
                result.innerHTML = "YOU LOSE";   
            }
            else if (userchoice[3]-houseChoice === 3) {
                result.innerHTML = "YOU WIN";   
            }
            else if (userchoice[3]-houseChoice === 4) {
                result.innerHTML = "YOU LOSE";   
            }
        } else if (userchoice[3]<houseChoice) {
            if (houseChoice-userchoice[3] === 1) {
                result.innerHTML = "YOU LOSE";
            } else if (houseChoice-userchoice[3] === 2) {
                result.innerHTML = "YOU WIN";   
            }
            else if (houseChoice-userchoice[3] === 3) {
                result.innerHTML = "YOU LOSE";   
            }
            else if (houseChoice-userchoice[3] === 4) {
                result.innerHTML = "YOU WIN";   
            }
        }
        userScore = result.textContent === "YOU WIN"?userScore+2:userScore!==0?userScore-2:0;
        score.innerHTML = userScore;
  }
}

function restart() {
    pickBox.style.display = 'block';
    judge.style.display = 'none'; 
    resultBox.style.display = "none";
}

function rulesState(condition) {
   rules.style.display = condition;
}