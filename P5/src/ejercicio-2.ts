class board {
  constructor(private boardMatrix: string[][]) {
    // eslint-disable-next-line max-len
    // this.boardMatrix = [['0', '0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0', '0'], ['0', '0', '0', '0', '0', '0', '0']];
    const auxiliaryArray: string[] = [];
    const rows: number = 6;
    const columns: number = 7;
    let i: number = 0;
    let j: number = 0;
    for (i = 0; i < rows; i++) {
      for (j = 0; j < columns; j++) {
        auxiliaryArray.push(`0`);
      }
      this.boardMatrix.push(auxiliaryArray);
    }
    // console.log(this.boardMatrix); // To Comprobe
  }
  // To get the value of the introduced position
  getValue(i: number, j: number) {
    return this.boardMatrix[i][j];
  }
  // To set the value of the introduced position
  setValue(i: number, j: number, value: string) {
    let k: number = 0;
    let l: number = 0;
    let flag: boolean = false;
    for (k = 0; k < 6; k++) {
      for (l = 0; l < 7; l++) {
        if ((k === 0) && (l === 0)) {
          if (this.boardMatrix[k][l] === `0`) {
            flag = true;
          } else {
            flag = false;
          }
        }
      }
    }
    if (flag === true) {
      this.boardMatrix[i][j] = value;
    } else {
      i--;
      this.setValue(i, j, value);
    }
    // let i: number = 0;
    // let auxiliaryCopy: string[] = this.boardMatrix[j];
    // while (auxiliaryCopy[j] === `0`) {
    //   if (auxiliaryCopy[j] === `0`) {
    //     auxiliaryCopy[j] = value;
    //   } else {
    //     i++;
    //   }
    // }
    // this.boardMatrix[i] = auxiliaryCopy;
  }
  // To print the matrix result
  printsMatrix() {
    // let i: number;
    // let j: number;
    // for (i = 0; i < 6; i++) {
    //   for (j = 0; j < 7; j++) {
    //     console.log(this.boardMatrix[i][j] + `\t`);
    //   }
    //   console.log(`\n`);
    // }
    console.log(this.boardMatrix[1]);
  }
  // To comprobe if a player wins the game
  comprobation(value: string): boolean {
    let i: number = 0;
    const j: number = 0;
    let counter: number = 0;
    for (i = 0; i < 6; i++) {
      if (this.boardMatrix[i][j] === value) {
        let auxI: number = i;
        let auxJ: number = j;
        counter++;
        while (auxI < 6) {
          auxI++;
          if (this.boardMatrix[auxI][auxJ] === value) {
            counter++;
          }
        }
        if (counter !== 4) {
          counter = 1;
          auxI = i;
          while (auxJ < 7) {
            auxJ++;
            if (this.boardMatrix[auxI][auxJ] === value) {
              counter++;
            }
          }
        }
        if (counter !== 4) {
          counter = 1;
          auxI = i;
          auxJ = j;
          while (auxJ < 7) {
            auxI++;
            auxJ++;
            if (this.boardMatrix[auxI][auxJ] === value) {
              counter++;
            }
          }
        }
        if (counter === 4) {
          return true;
        }
      }
      i++;
    }
    if (counter !== 4) {
      return false;
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
  constructor(boardMatrix: string[][], public name: string, public chips: number) {
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
      j = optionColumns;

      this.setValue(i, j, `X`);
      console.log();
      // eslint-disable-next-line max-len
      console.log(`EL jugador uno, tras introducir la ficha en la columna ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      this.printsMatrix();
      playerOne.chips = playerOne.chips - 1;

      if (this.comprobation(`X`) === true) {
        console.log(`El juego a finalizado.`);
        console.log(`El ganador es el jugador número 1`);
        return 'WIN PLAYER ONE';
      }

      // player 2 game
      // eslint-disable-next-line max-len
      optionColumns = entry(`Introduzca la columna donde quiere introducir la columns: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns;
    
      this.setValue(i, j, `Y`);
      console.log();
      console.log(`EL jugador dos, tras introducir la ficha en la fila ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      this.printsMatrix();
      playerTwo.chips = playerTwo.chips - 1;

      if (this.comprobation(`Y`) === true) {
        console.log(`El juego a finalizado.`);
        console.log(`El ganador es el jugador número 2`);
        return `WIN PLAYER TWO`;
      }
    }
    return `EMPATE`;
  }
}

const boardExample: string[][] = [];
const example = new connectsFour(boardExample, ``, 0);

// https://www.youtube.com/watch?v=1TzCYVTC9tc