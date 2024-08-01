import { useState, useEffect, createContext, useContext } from "react";
import { pokemonList } from "../api/helper";

const PokemonContext = createContext({});

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [, setActive] = useState(false);

  useEffect(() => {
    setPokemons(pokemonList);
    //WHY DO WE NEED TO cleanup function sets pokemons to an empty object
    // return () => setPokemons({});
  }, [pokemonList]);

  const handleActive = (index) => {
    // let i;
    // for (i = 0; i < pokemons.length; i++) {
    //   if (i === index) {
    //     pokemons[i].isActive = true;
    //   } else {
    //     pokemons[i].isActive = false;
    //   }
    //   setActive([...pokemons]);
    // }
    const updatedPokemons = pokemons.map((pokemon, i) => {
      if (i === index) {
        return { ...pokemon, isActive: true };
      } else {
        return { ...pokemon, isActive: false };
      }
    });

    setPokemons(updatedPokemons);
  };

  const value = { pokemons, setActive, handleActive };
  return <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>;
}

export const usePokemon = () => useContext(PokemonContext);
