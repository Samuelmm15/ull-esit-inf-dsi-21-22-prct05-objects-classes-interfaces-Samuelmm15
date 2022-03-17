import 'mocha';
import {expect} from 'chai';
import {blastoisePokemon} from '../src/ejercicio-1/ejercicio-1';
import {charizarPokemon} from '../src/ejercicio-1/ejercicio-1';
import {raichuPokemon} from '../src/ejercicio-1/ejercicio-1';
import {servinePokemon} from '../src/ejercicio-1/ejercicio-1';
import {battleField} from '../src/ejercicio-1/ejercicio-1';

describe(' First combat class tests', () => {
  // eslint-disable-next-line max-len
  it('battleField.start(Charizard, Blastpise) returns value Blastoise', () => {
    // eslint-disable-next-line max-len
    expect(battleField.start(charizarPokemon, blastoisePokemon)).to.equal('Blastoise');
  });
});

describe(' Second combat class test', () => {
  it('battleField.start(Blastoise, Raichu) returns value Raichu', () => {
    // eslint-disable-next-line max-len
    expect(battleField.start(blastoisePokemon, raichuPokemon)).to.equal('Raichu');
  });
});

describe(' Third combat class test', () => {
  it('battleField.start(Servine, Charizard) returns value Charizard', () => {
    // eslint-disable-next-line max-len
    expect(battleField.start(servinePokemon, charizarPokemon)).to.equal('Charizard');
  });
});
