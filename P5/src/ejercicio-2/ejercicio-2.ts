class board {
  constructor(private boardMatrix: string[]) {
    let auxiliaryArray: string = ``;
    const rows: number = 6;
    const columns: number = 7;
    let i: number = 0;
    let j: number = 0;
    for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {
        auxiliaryArray = auxiliaryArray + `0`;
      }
      this.boardMatrix.push(auxiliaryArray);
      auxiliaryArray = ``;
    }
    // console.log(this.boardMatrix); // To Comprobe
  }
  // To get the value of the introduced position
  getValue(i: number) {
    return this.boardMatrix[i];
  }
  // To set the value of the introduced position
  setValue(i: number, j: number, value: string) {
    let k: number = 0;
    let l: number = 0;
    let flag: boolean = false;
    let repeat: boolean = false;
    let auxiliaryResult: string = ``;
    let auxiliary: string = ``;
    let counter: number = 0;
    for (k = 0; k < 6; k++) {
      auxiliary = this.boardMatrix[k];
      for (l = 0; l < 7; l++) {
        if ((k === i) && (l === j)) {
          if (auxiliary[l] === `0`) {
            flag = true;
            auxiliaryResult = auxiliaryResult + value;
            counter++;
          } else {
            flag = false;
            i--;
            repeat = true;
          }
        } else {
          if (counter < 7) {
            auxiliaryResult = auxiliaryResult + auxiliary[l];
            counter++;
          }
        }
      }
      if (flag === false) {
        auxiliaryResult = ``;
        counter = 0;
      }
    }

    if (flag !== false) {
      this.boardMatrix[i] = auxiliaryResult;
    }
    if (repeat === true) {
      this.setValue(i, j, value);
    }
  }
  // To print the matrix result
  printsMatrix() {
    let i: number = 0;
    for (i = 0; i < 6; i++) {
      console.log(this.boardMatrix[i]);
    }
  }
  // To comprobe if a player wins the game
  comprobation(value: string): boolean {
    let counter: number = 0;
    let i: number = 0;
    let j: number = 0;
    let auxiliaryString: string = ``;
    // To comprobe the rows
    for (i = 0; i < 6; i++) {
      auxiliaryString = this.boardMatrix[i];
      for (j = 0; j < 7; j++) {
        if (auxiliaryString[j] === value) {
          counter++;
        } else {
          counter = 0;
        }
      }
      if (counter === 4) {
        return true;
      } else {
        counter = 0;
      }
    }
    // To comprobe the columns
    counter = 0;
    let k: number = 0;
    while (k < 7) {
      for (i = 0; i < 6; i++) {
        auxiliaryString = this.boardMatrix[i];
        if (auxiliaryString[k] === value) {
          counter++;
        } else {
          counter = 0;
        }
      }
      if (counter === 4) {
        return true;
      } // else {
      //   counter = 0;
      // }
      k++;
    }
    // To comprobe the diagonal
    counter = 0;
    k = 0;
    let l: number = 0;
    while (l < 6) {
      for (i = l; i < 6; i++) {
        auxiliaryString = this.boardMatrix[i];
        while (k < 6) {
          if (auxiliaryString[k] === value) {
            counter++;
            console.log(counter);
          }
          k++;
          auxiliaryString = this.boardMatrix[k];
        }
        if (counter === 4) {
          return true;
        } else {
          counter = 0;
        }
      }
      l++;
    }
    return false;
  }
}

interface player {
  name: string;
  chips: number;
}

class connectsFour extends board implements player {
  // eslint-disable-next-line max-len
  constructor(boardMatrix: string[], public name: string, public chips: number) {
    super(boardMatrix); // Because this is an heritage class
    const playerOne: player = {
      name: `player 1`,
      chips: 21,
    };
    const playerTwo: player = {
      name: `player 2`,
      chips: 21,
    };
    this.start(playerOne, playerTwo);
  }
  // The start of the game
  start(playerOne: player, playerTwo: player): string {
    let i: number = 5;
    let j: number = 0;
    while ((playerOne.chips >= 0) && (playerTwo.chips >= 0)) {
      // player 1 game
      const entry = require('prompt-sync')({sigit: true});
      let optionColumns: number = 0;

      // eslint-disable-next-line max-len
      optionColumns = entry(`Introduzca la columna donde quiere introducir la ficha: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns - 1;

      this.setValue(i, j, `X`);
      console.log();
      // eslint-disable-next-line max-len
      console.log(`EL jugador uno, tras introducir la ficha en la columna ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      this.printsMatrix();
      playerOne.chips = playerOne.chips - 1;

      if (this.comprobation(`X`) === true) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 1`);
        return 'WIN PLAYER ONE';
      }

      // player 2 game
      // eslint-disable-next-line max-len
      optionColumns = entry(`Introduzca la columna donde quiere introducir la columns: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns - 1;
    
      this.setValue(i, j, `Y`);
      console.log();
      console.log(`EL jugador dos, tras introducir la ficha en la fila ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      this.printsMatrix();
      playerTwo.chips = playerTwo.chips - 1;

      if (this.comprobation(`Y`) === true) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 2`);
        return `WIN PLAYER TWO`;
      }
    }
    return `EMPATE`;
  }
}

const boardExample: string[] = [];
const example = new connectsFour(boardExample, ``, 0);

// https://www.youtube.com/watch?v=1TzCYVTC9tc