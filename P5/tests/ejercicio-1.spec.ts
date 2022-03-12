import 'mocha';
import {expect} from 'chai';
import {blastoisePokemon} from '../src/ejercicio-1';
import {charizarPokemon} from '../src/ejercicio-1';
import {raichuPokemon} from '../src/ejercicio-1';
import {servinePokemon} from '../src/ejercicio-1';

describe('combat class tests', () => {
  // eslint-disable-next-line max-len
  it('blastoisePokemon.start(Charizard, Blastpise) returns value Blastoise', () => {
    // eslint-disable-next-line max-len
    expect(blastoisePokemon.start(charizarPokemon, blastoisePokemon)).to.equal('Blastoise');
  }),
  it('raichuPokemon.start(Blastoise, Raichu) returns value Raichu', () => {
    // eslint-disable-next-line max-len
    expect(raichuPokemon.start(blastoisePokemon, raichuPokemon)).to.equal('Raichu');
  }),
  it('servinePokemon.start(Servine, Charizard) returns value Charizard', () => {
    // eslint-disable-next-line max-len
    expect(servinePokemon.start(servinePokemon, charizarPokemon)).to.equal('Charizard');
  });
});
