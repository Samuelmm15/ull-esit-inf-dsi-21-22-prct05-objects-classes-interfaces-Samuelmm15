/**
 * Class necessar to operate with the board of the game.
 */
class board {
  /**
   * This is the constructor of the class.
   * @param boardMatrix Consists in the board of the game Connects-4.
   */
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
  /**
   * Function necessary to get the value of the introduced position.
   * @param i Consists in the position of the board.
   * @returns The line of the board that the user needs.
   */
  getValue(i: number) {
    return this.boardMatrix[i];
  }
  /**
   * Function to set a value in a specific position.
   * @param i Consists in the first coordinate.
   * @param j Consists in the second coordinate.
   * @param value Consists in the value to introduce in the board.
   */
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
  /**
   * Function neccesary to print the board of the game.
   */
  printsMatrix() {
    // let i: number = 0;
    // for (i = 0; i < 6; i++) {
    //   console.log(this.boardMatrix[i]);
    // }
  }
  /**
   * Function necessary to comprobe if a player wins the game.
   * @param value Consists in the value to comprobe.
   * @returns True if a player wins the game.
   */
  comprobationRows(value: string): boolean {
    let counter: number = 0;
    let i: number = 0;
    let j: number = 0;
    let auxiliaryString: string = ``;
    for (i = 0; i < 6; i++) {
      auxiliaryString = this.boardMatrix[i];
      console.log(auxiliaryString);
      for (j = 0; j < 7; j++) {
        if (auxiliaryString[j] === value) {
          counter++;
        // eslint-disable-next-line max-len
        } else if ((auxiliaryString[j] !== `0`) && (auxiliaryString[j] !== value)) {
          counter = 0;
        }
      }
      if (counter === 4) {
        return true;
      } else {
        counter = 0;
      }
    }
    return false;
  }
  /**
   * Function necessary to comprobe if a player wins the game.
   * @param value Consists in the value to comprobe.
   * @returns True if a player wins the game.
   */
  comprobationColumns(value: string) {
    let counter: number = 0;
    let i: number = 0;
    let auxiliaryString: string = ``;
    let k: number = 0;
    for (k = 0; k < 7; k++) {
      for (i = 0; i < 6; i++) {
        auxiliaryString = this.boardMatrix[i];
        if (auxiliaryString[k] === value) {
          counter++;
        // eslint-disable-next-line max-len
        } else if ((auxiliaryString[k] !== `0`) && (auxiliaryString[k] !== value)) {
          counter = 0;
        }
      }
      if (counter === 4) {
        return true;
      } else {
        counter = 0;
      }
    }
    return false;
  }
  /**
   * Function necessary to comprobe if a player wins the game
   * @param value Consists in the value to comprobe.
   * @returns True if a player wins the game.
   */
  comprobationDiagonal(value:string) {
    let counter: number = 0;
    let i: number = 0;
    let j: number = 0;
    let auxiliaryString: string = ``;
    let k: number = 5;
    for (i = 5; i >= 0; i--) {
      auxiliaryString = this.boardMatrix[i];
      for (j = 0; j < 7; j++) {
        if (auxiliaryString[j] === value) {
          counter++;
        // eslint-disable-next-line max-len
        } else if ((auxiliaryString[j] !== `0`) && (auxiliaryString[j] !== value)) {
          counter = 0;
        }
        k--;
        if (k >= 0) {
          auxiliaryString = this.boardMatrix[k];
        }
      }
      if (counter === 4) {
        return true;
      } else {
        counter = 0;
      }
    }
    return false;
  }
}

/**
 * Interface neccesary to define th structure of a player.
 */
interface player {
  name: string;
  chips: number;
}

/**
 * Class neccesary to makes the Connects-4 game.
 */
class connectsFour extends board implements player {
  /**
   * This is the constructor of the class.
   * @param boardMatrix Consists in the board of the game.
   * @param name Consists in the name of the player.
   * @param chips Consists in the total number that has a player.
   */
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
  /**
   * This function makes the correct implementation of the game.
   * @param playerOne Consists in the first player.
   * @param playerTwo Consists in the second player.
   * @returns The winner of the game, or if nobody wins the game
   * it says **tie**.
   * Here we have a link a [youtube video](https://www.youtube.com/watch?v=1TzCYVTC9tc),
   * that explains the use of the library `prompt-sync`.
   */
  start(playerOne: player, playerTwo: player): string {
    const i: number = 5;
    let j: number = 0;
    while ((playerOne.chips >= 0) && (playerTwo.chips >= 0)) {
      // PLAYER 1 GAME
      const entry = require('prompt-sync')({sigit: true});
      let optionColumns: number = 0;

      // eslint-disable-next-line max-len
      optionColumns = entry(`<<JUGADOR 1>>: Introduzca la columna donde quiere introducir la ficha: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns - 1;

      this.setValue(i, j, `X`);
      console.log();
      // eslint-disable-next-line max-len
      console.log(`EL jugador uno, tras introducir la ficha en la columna ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      console.log();
      this.printsMatrix();
      playerOne.chips = playerOne.chips - 1;

      // eslint-disable-next-line max-len
      if ((this.comprobationRows(`X`) === true) || (this.comprobationColumns(`X`) === true) ||
      (this.comprobationDiagonal(`X`) === true)) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 1`);
        return 'WIN PLAYER ONE';
      }

      let continueExecuting: number = 0;
      console.log();
      // eslint-disable-next-line max-len
      continueExecuting = entry(`Dejar de visualizar el tablero (Pulse cualquier tecla): `);
      if (continueExecuting !== 1) {
        console.clear();
      }

      // PLAYER 2 GAME
      // eslint-disable-next-line max-len
      optionColumns = entry(`<<JUGADOR 2>>: Introduzca la columna donde quiere introducir la columns: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns - 1;
      this.setValue(i, j, `Y`);
      console.log();
      console.log(`EL jugador dos, tras introducir la ficha en la fila ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      console.log();
      this.printsMatrix();
      playerTwo.chips = playerTwo.chips - 1;

      // eslint-disable-next-line max-len
      if ((this.comprobationRows(`Y`) === true) || (this.comprobationColumns(`Y`) === true) ||
        this.comprobationDiagonal(`Y`) === true) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 2`);
        return `WIN PLAYER TWO`;
      }

      continueExecuting = 0;
      console.log();
      // eslint-disable-next-line max-len
      continueExecuting = entry(`Dejar de visualizar el tablero (Pulse cualquier tecla): `);
      if (continueExecuting !== 1) {
        console.clear();
      }
    }
    return `EMPATE`;
  }
}

const boardExample: string[] = [];
export const example = new connectsFour(boardExample, ``, 0);
