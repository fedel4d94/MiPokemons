import styles from './MostrarPokemon.module.css';

const primerLetraMayuscula = (str) => {
    if (!str)
        return "";
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function getTypeGroup(type) {
    if (['fire', 'fighting', 'dragon'].includes(type)) return styles.fireGroup;
    if (['water', 'ice'].includes(type)) return styles.waterGroup;
    if (['grass', 'bug', 'poison'].includes(type)) return styles.grassGroup;
    if (['electric', 'flying'].includes(type)) return styles.electricGroup;
    if (['ground', 'rock', 'steel'].includes(type)) return styles.groundGroup;
    if (['psychic', 'ghost', 'fairy', 'dark'].includes(type)) return styles.psychicGroup;
    return styles.default;
}



function MostrarPokemon({ pokemon }) {

    const mainType = pokemon?.types?.[0]?.type?.name || 'default';
    const cardClass = `${styles.pokemonCard} ${getTypeGroup(mainType)}`;
    { console.log(cardClass) }

    return (
        <div className={cardClass}>
            <p>ID: #{pokemon.id}</p>
            <h2 className={styles.pokemonName}>Pokemon: {primerLetraMayuscula(pokemon.name)}</h2>
            <p>Tipo: {pokemon.types.map(t => primerLetraMayuscula(t.type.name)).join(', ')}</p>
            <p>Habilidades: {pokemon.abilities.map(a => primerLetraMayuscula(a.ability.name)).join(', ')}</p>
            <p>Experiencia Base: {pokemon.base_experience}</p>
            <p>Peso: {pokemon.weight / 10 + " kg"}</p>
            <img className={styles.pokemonImage} src={pokemon.sprites.front_default} />
        </div>
    )
}

export default MostrarPokemon