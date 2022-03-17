# / PRÁCTICA 5: OBJETOS, CLASES E INTERFACES

## // ÍNDICE

1. [Tareas Previas.](#id1)
2. [Ejercicios.](#id2) \
    a. [Ejercicio 1.](#id3) \
    b. [Ejercicio 2.](#id4)

## // Tareas previas  <a name="id1"></a>

Para la realización de esta quinta práctica de la asignatura `Desarrollo de Sistemas 
Informáticos` se ha solicitado la lectura y visualización de ciertos documentos y vídeos, que 
permiten el correcto desarrollo de esta.

Por un lado, se solicita la lectura del documento relacionado con los [Principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)
de programación orientada a Objetos. Este documento, presenta los 5 principios SOLID para este 
tipo de programación orienta a objetos.

El primero de ellos se trata del `Single responsability principle`, este, establece que toda 
clase tiene una única responsabilidad, es decir, toda clase que sea desarrollada, tiene que 
tener una única responsabilidad.

El segundo, es el principio `Open-closed principle`. Este, permite establecer que al tener una 
super clase, si se quiere ampliar la funcionalidad de esta, no se debe de modificar la propia 
clase, sino, que se tiene que extender dicha clase y, aumentar la funcionalidad de la super 
clase, a partir de una clase hija.

El tercero de estos es `Liskov substitution principle`, dónde, se establece que, si se tiene una 
clase padre y una clase hija, al hacer uso únicamente de la clase padre, el comportamiento del 
programa no debería de verse afectado sin el uso de la clase hija.

El cuarto, `Interface segregation principle`. Al hacer uso de interfaces, se establece el uso de 
las interfaces de la manera más sencilla posible, es decir, se deben de crear varias interfaces 
sencillas, que permitan el uso de varias interfaces, aumentando la funcionalidad de estas.

El quinto de estos principios es `Dependency inverion principle`, que declara el uso de clases 
abstractas que permitan establecer la estructura de una clase, para que, a continuación se 
puedan declarar clases hijas que hagan uso de esta estructura anteriormente declarada en la 
clase abstracta.

Para finalizar con estas tareas iniciales, se realiza la visualización del vídeo relacionado con 
las herramientas de obtención de informes sobre el cubrimiento de código, denominadas como 
[Instambul](https://istanbul.js.org) y [Coveralls](https://coveralls.io). La primera de ellas, 
permite obtener información relacionada con el cubrimiento de nuestro propio código desarrollado 
en este caso en TypeScript. Por otro lado, la herramienta **Coverralls** nos permite visualizar 
la documentación generada de manera automática a partir de la información generada por 
**Instabul**.

## // Ejercicios  <a name="id2"></a>

La realización de los distintos ejercicios solicitados en el [guión](https://ull-esit-inf-dsi-2122.github.io/prct05-objects-classes-interfaces/) 
de dicha práctica, se desarrollan en el directorio `/src`, dentro de directorios, siguiendo la 
estructura de nombres del tipo `ejercicio-n`.

Además, se hace uso de las herramientas, `TypeDoc` para la generación de documentación, y de 
`Mocha` y `Chai` para la realización de test y pruebas TDD o BDD.

### /// Ejercicio 1 - Pokedex  <a name="id3"></a>

Para el desarrollo de este primer ejercicio, se realiza la creación de una Pokedex que almacene 
la información relacionada con distintos Pokemons. Además, se debe de realizar una clase 
denominada como `Combat`, que permite escoger dos de los Pokemons que se encuentran almacenados 
en la Pokedex y, realizar un combate real entre ambos, devolviendo, el ganador de la batalla.

Para lograr todo lo especificado anteriormente, se lleva a cabo la creación de una interfaz 
denominada como `pokedex` que permite definir la estructura de los objetos de tipo Pokemon, es 
decir, que permite establecer la estructura que deberán de poseer los disntintos pokemons que 
van a ser introducidos en la Pokedex. 

Dicha interfaz queda plasmada a continuación:

```
interface pokedex {
  pokemonName: string;
  weight: number;
  height: number;
  pokemonType: string;
  attack: number;
  defense: number;
  speed: number;
  healthPoints: number;
}
```

Por otra parte, se implementa la clase denominada como `Combat` que hace uso de la interfaz 
`Pokedex` que permite definir los dos objetos, es decir, los dos pokemons que van a ser usados 
para la lucha.

Dentro de esta clase, se hace uso de la función desarrollada en la [Práctica 3](https://ull-esit-inf-dsi-2122.github.io/prct03-types-functions/) 
de la asignatura. Para este caso, dicha función se trata de un método de la propia clase, que 
permite obtener el daño producido por un Pokemon, dependiendo de los tipos de Pokemon de los que 
se tranten, es decir, se obtiene el daño que va a producir un Pokemon a su contricante, teniendo 
en cuenta si uno se trata de un Pokemon de tipo *Agua* y el otro de tipo *Fuego* por ejemplo.

La implementación del método se puede observar:

```
damageProduction(firstoponent: combat, secondoponent: combat): number {
    let damage: number = 0;
    let efficiency: number = 0;
    if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `hierba`)) {
      efficiency = 2;
    } else if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `agua`)) {
      efficiency = 0.5;
    } else if ((firstoponent.pokemonType === `fuego`) && (secondoponent.pokemonType === `eléctrico`)) {
      efficiency = 1;
    } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `hierba`)) {
      efficiency = 0.5;
    } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `eléctrico`)) {
      efficiency = 0.5;
    } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `eléctrico`)) {
      efficiency = 1;
    } else if (firstoponent.pokemonType === secondoponent.pokemonType) {
      efficiency = 0.5;
    } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `fuego`)) {
      efficiency = 0.5;
    } else if ((firstoponent.pokemonType === `agua`) && (secondoponent.pokemonType === `fuego`)) {
      efficiency = 2;
    } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `fuego`)) {
      efficiency = 1;
    } else if ((firstoponent.pokemonType === `hierba`) && (secondoponent.pokemonType === `agua`)) {
      efficiency = 2;
    } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `agua`)) {
      efficiency = 2;
    } else if ((firstoponent.pokemonType === `eléctrico`) && (secondoponent.pokemonType === `hierba`)) {
      efficiency = 1;
    }
    damage = 50 * (firstoponent.attack / firstoponent.defense) * efficiency;
    return damage;
  }
```

Para finalizar, se desarrolla el método de la clase, que permite realizar la pelea entre dos 
Pokemons, esta, se encarga de obtener la salud de ambos Pokemons, y tras el ataque del primero 
de ellos, recalcular la vida total que este posee, tras un ataque realizado. Con ello, se van 
realizando ataques, hasta que la vida total de uno de ellos, sea 0 o inferior. Con todo esto, se 
llega a la conclusión de que el otro oponente es el ganador de la batalla.

La implementación del método de la lucha, se puede ver a continuación:

```
start(firstoponent: combat, secondoponent: combat): string {
    let counter: number = 1;
    let combatFinish: number = -1;
    console.log();
    console.log(`<< LUCHA >>`);
    console.log(`Luchador 1: ${firstoponent.pokemonName}, tipo: ${firstoponent.pokemonType}, puntos de vida inicial: ${firstoponent.healthPoints}`);
    console.log(`Luchador 2: ${secondoponent.pokemonName}, tipo: ${secondoponent.pokemonType}, puntos de vida inicial: ${secondoponent.healthPoints}`);
    console.log();
    while (combatFinish != 0) {
      let totalDamage: number;
      totalDamage = firstoponent.damageProduction(firstoponent, secondoponent); // First attack of the turn
      secondoponent.healthPoints = secondoponent.healthPoints - totalDamage;
      console.log(`Durante el ataque número ${counter}, ${firstoponent.pokemonName} ha dejado a ${secondoponent.pokemonName} a ${secondoponent.healthPoints} puntos de vida`);
      counter++;
      if (secondoponent.healthPoints > 0) {
        totalDamage = secondoponent.damageProduction(secondoponent, firstoponent);
        firstoponent.healthPoints = firstoponent.healthPoints - totalDamage;
        console.log();
        console.log(`Durante el ataque número ${counter}, ${secondoponent.pokemonName} ha dejado a ${firstoponent.pokemonName} a ${firstoponent.healthPoints} puntos de vida`);
        counter++;
      }
      if (firstoponent.healthPoints > 0) {
        if (secondoponent.healthPoints <= 0) {
          combatFinish = 0;
          console.log();
          console.log(`<< LA LUCHA HA FINALIZADO >>`);
          console.log(`El ganador de esta batalla, ha sido ${firstoponent.pokemonName}`);
          console.log(`Su peso es: ${firstoponent.weight}`);
          console.log(`Su altura es: ${firstoponent.height}`);
          console.log(`Su velocidad es: ${firstoponent.speed}`);
          return firstoponent.pokemonName;
        } else {
          console.log();
          console.log(`<< CONTINÚA LA LUCHA >>`);
          console.log();
        }
      } else {
        combatFinish = 0;
        console.log();
        console.log(`<< LA LUCHA HA FINALIZADO >>`);
        console.log(`El ganador de esta batalla, ha sido ${secondoponent.pokemonName}`);
        console.log(`Su peso es: ${secondoponent.weight}`);
        console.log(`Su altura es: ${secondoponent.height}`);
        console.log(`Su velocidad es: ${secondoponent.speed}`);
        return secondoponent.pokemonName;
      }
    }
    return ``;
  }
```

Hay que tener en cuenta que, el método anterior recibe como parámetros, los dos Pokemons que se 
encuentran almacenados dentro de la Pokedex.

La ejecución del código y el testeo de este, se puede observar a continuación:

![exercise-1-execution](https://user-images.githubusercontent.com/72341631/158905632-a71f9e44-bae1-4430-9ace-6719dcc76cea.png)

**El testeo del ejercicio es:**

![execise-1-test](https://user-images.githubusercontent.com/72341631/158905669-d5863d62-935e-4697-add2-43bfb4dcac97.png)

**El cubrimiento del código del programa:**

![exercise-1-test-1](https://user-images.githubusercontent.com/72341631/158905692-c2218d94-8f3f-484a-82c1-f5725d25fb2c.png)

### /// Ejercicio 3 - Conecta 4  <a name="id4"></a>

Durante el desarrollo de este segundo y último ejercicio, se solicita el desarrollo de un 
programa, que permita que dos jugadores, puedan jugar al juego del **conecta 4**. Este juego, 
consiste en un panel o una tabla de 6x7, dónde, se puede introducir una ficha de juego por cada 
turno de cada jugador.

Para la implementación del programa, se crean dos clases. La primera de ellas `board`, contiene los diferentes métodos, que 
son usados para crear, acceder o modificar el contenido de la tabla de juego. Es decir, esta primera clase se encarga de la 
creación del panel de juego, junto con todas las operaciones que se pueden realizar con este.

El constructor de la clase, se encarga de generar las dimensiones del propio panel. Este, tiene el siguiente aspecto:

```
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
  }
```

A continuación, se desarrolla otro método que permite modificar los valores del panel, es decir, para este caso, este 
método se encarga de añadir las fichas de los jugadores dentro del tablero. Para ello, se hace uso de una variable auxiliar 
que por cada interacción saca el *string* que se encuentra dentro del vector, correspondiendo esta última con cada fila del 
tablero. Gracias a esto, se consigue introducir cada ficha en la columna correspondiente y en su respectiva fila.

La comprobación de filas, se produce desde la última fila de la matriz, comprobando en todos los casos si dicha fila en la 
columna en la que se pretende introducir la ficha, se encuentra vacía. Si se encuentra vacía, se introduce la ficha, si se 
encuentra ocupada por otra ficha, se comprueba la fila superior para ver si en dicha fila se puede introducir la ficha.

La implementación de esto descrito anteriormente se puede observar a continuación:

```
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
```

Por otro lado, se desarrolla el método necesario para imprimir de forma correcta la matriz. Para ello, se recorre cada 
posición del vector de cadenas, de manera que se vaya imprimiendo cada cadena (*string*) por pantalla.

```
printsMatrix() {
    let i: number = 0;
    for (i = 0; i < 6; i++) {
      console.log(this.boardMatrix[i]);
    }
  }
```

A continuación, se desarrollan tres métodos necesarios para la comprobación del tablero. Haciendo uso de estos tres 
métodos, se realiza la comprobación de las filas, las columnas y las diagonales. Cada uno de estos métodos, realiza una 
búsqueda:

El primero de ellos, por cada interacción obtiene la cadena de caracteres, dónde, comprueba por cada fila, si se produce 
que existe que 4 caracteres del mismo tipo se encuentran de manera continua.

```
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
```

El segundo, por cada interacción obtiene cada una de las filas del panel, dónde, por cada fila comprueba la misma posición 
de cada fila, comprobando, si durante el recorrido de dicha columna, se produce que existen cuatro caracteres del mismo 
tipo de manera consecutiva.

```
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
```

El tercer y último método de comprobación, se encarga de comprobar las diagonales que se forman en el panel, de manera que 
se produzca que 4 caracteres del mismo tipo se encuentren de manera consecutiva. Para ello, se comprueba en cada cadena del 
vector, si en la posición especificada por otra variable que va aumentando, se produce que 4 caracteres del mismo jugador 
se se encuentran de manera diagonal en el vector.

```
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
```

Para continuar, se hace uso de una interfaz denominada como `player`. Esta, es necesaria para definir la estructura de los 
objetos que son de tipo **jugador**. Dicha interfaz se puede observar a continuación:

```
interface player {
  name: string;
  chips: number;
}
```

Por último, se desarrolla la clase `connectsFour`. Esta clase, heredando la clase `board` e implementado la interfaz 
`player`, desarrolla el funcionamiento base del juego *Conecta 4*. 

Para ello, se implementa un método denominado como `start`, que recibe como parámetros dos objetos de tipo **player**, 
dónde, por cada jugador realiza una solicitud por teclado para que dicho jugador introduzca una ficha en la columna que 
desea. Una vez introducida la ficha en la columna, se muestra el estado del panel, y a continuación, pasa el turno al 
segundo jugador. Este proceso, ocurre de manera consecutiva hasta que, alguno de los dos jugadores gane la partida.

La implementación del método se puede observar:

```
start(playerOne: player, playerTwo: player): string {
    const i: number = 5;
    let j: number = 0;
    while ((playerOne.chips >= 0) && (playerTwo.chips >= 0)) {
      // PLAYER 1 GAME
      const entry = require('prompt-sync')({sigit: true});
      let optionColumns: number = 0;

      optionColumns = entry(`<<JUGADOR 1>>: Introduzca la columna donde quiere introducir la ficha: `);
      console.log(`La columna seleccionada ha sido: ${optionColumns}`);
      j = optionColumns - 1;

      this.setValue(i, j, `X`);
      console.log();
      console.log(`EL jugador uno, tras introducir la ficha en la columna ${j}.`);
      console.log(`El tablero tiene el siguiente aspecto: `);
      console.log();
      this.printsMatrix();
      playerOne.chips = playerOne.chips - 1;

      if ((this.comprobationRows(`X`) === true) || (this.comprobationColumns(`X`) === true) ||
      (this.comprobationDiagonal(`X`) === true)) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 1`);
        return 'WIN PLAYER ONE';
      }

      let continueExecuting: number = 0;
      console.log();
      continueExecuting = entry(`Dejar de visualizar el tablero (Pulse cualquier tecla): `);
      if (continueExecuting !== 1) {
        console.clear();
      }

      // PLAYER 2 GAME
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

      if ((this.comprobationRows(`Y`) === true) || (this.comprobationColumns(`Y`) === true) ||
        this.comprobationDiagonal(`Y`) === true) {
        console.log();
        console.log(`<< EL JUEGO A FINALIZADO >>`);
        console.log(`El ganador es el jugador número 2`);
        return `WIN PLAYER TWO`;
      }

      continueExecuting = 0;
      console.log();
      continueExecuting = entry(`Dejar de visualizar el tablero (Pulse cualquier tecla): `);
      if (continueExecuting !== 1) {
        console.clear();
      }
    }
    return `EMPATE`;
  }
```

La ejecución del programa y el testeo de este, se puede observar en las imagenes adjuntas a continuación:

**Ganador mediante fila:**

![exercise-2-row](https://user-images.githubusercontent.com/72341631/158905793-b7d5f9bb-9792-486e-9909-b7d22ae03e0a.png)

**Ganador mediante columna:**

![exercise-2-column](https://user-images.githubusercontent.com/72341631/158905834-60953a6c-4799-4be1-83c1-7ead27e2d1b1.png)

**Ganador mediante diagonal:**

![exercise-2-diagonal](https://user-images.githubusercontent.com/72341631/158905886-9ece6901-2099-44f2-9351-b80232dc064b.png)

**Cubrimiento del código del programa:**

![exercise-2-test](https://user-images.githubusercontent.com/72341631/158905915-b0d2ebce-3a93-4858-b4af-3fea06a0a4d6.png)


En conclusión, la realización de esta quinta práctica de la asignatura, me ha ayudado a aprender un poco más sobre la 
programación orientada a objetos. No sólo he podido aprender, consejos, técnicas o guías de uso para realizar una 
programación orientada a objetos de manera correcta para TypeScript, sino, que también esto me puede ser útil para el 
desarrollo de proyectos en otros tipos de lenguajes.

Por tanto, esta primera práctica realizada como toma de contacto para la programación orientada a objetos en TypeScript, ha 
sido interesante para aprender un poco más sobre este tipo de programación, y, además, familiarizarme con un nuevo término 
para mi personalmente, como es el uso de interfaces, para poder definir la estructura de los objetos que serán usados para 
las clases.

