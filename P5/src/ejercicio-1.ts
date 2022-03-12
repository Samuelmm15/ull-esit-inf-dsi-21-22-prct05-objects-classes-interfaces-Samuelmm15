/* eslint-disable max-len */
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

class combat implements pokedex {
  constructor(public readonly pokemonName: string, public readonly weight: number,
        public readonly height: number, public readonly pokemonType: string,
        public attack: number, public defense: number, public readonly speed: number,
        public healthPoints: number) {
  }
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
}

export const blastoisePokemon =
  // eslint-disable-next-line new-cap
  new combat(`Blastoise`, 85.5, 1.6, `agua`, 83, 100, 78, 79);

export const charizarPokemon =
  // eslint-disable-next-line new-cap
  new combat(`Charizard`, 90.5, 1.7, `fuego`, 84, 78, 100, 78);

export const raichuPokemon =
  // eslint-disable-next-line new-cap
  new combat(`Raichu`, 30.0, 0.8, `eléctrico`, 90, 55, 110, 60);

export const servinePokemon =
  // eslint-disable-next-line new-cap
  new combat(`Servine`, 16, 0.8, `hierba`, 60, 75, 83, 60);


// blastoisePokemon.start(blastoisePokemon, charizarPokemon); // PREGUNTAR CÓMO SE PUEDE HACER LA LLAMADA AL MÉTODO SIN HACER NINGUN TIPO DE USO DEL OBJETO PARA LLAMARLO
raichuPokemon.start(servinePokemon, charizarPokemon);

// To use for the program, here is the database of the pokemon
// https://pokemondb.net/pokedex/all
