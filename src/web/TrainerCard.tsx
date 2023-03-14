import {ReactElement} from "react";

interface TrainerCardProps {
  data: Trainer
}

export function TrainerCard({data}: TrainerCardProps): ReactElement {


  return <div>
    <h3>{data.theme} {data.name}</h3>
    <ul>
      {data.team.map((pokemon: Pokemon) => <li><img src={pokemon.spriteUrl} /> {pokemon.name}</li>)}
    </ul>
  </div>;
}