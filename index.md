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
[imagen]

### /// Ejercicio 3 - Conecta 4  <a name="id4"></a>

Durante el desarrollo de este segundo y último ejercicio, se solicita el desarrollo de un programa, que permita que dos jugadores, puedan jugar al juego del **conecta 4**. Este juego consiste en un panel o una tabla de 6x7, dónde se puede introducir una ficha de juego por cada turno de cada jugador.