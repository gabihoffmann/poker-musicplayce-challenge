var poker = require('poker-hands');

const handString = (objectArray) =>
    objectArray.reduce((acc,object) => {
      return  acc += ` ${object.code}`
    }, '');

export function getWinner(handplayOne, handplayTwo){

    const playerOne = handString(handplayOne);
    const playerTwo = handString(handplayTwo);

    const winner = poker.judgeWinner([playerOne,playerTwo]) + 1;

    return  playerOne.length !== 0 ? winner : null;
} 