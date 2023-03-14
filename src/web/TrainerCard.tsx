import {ReactElement} from "react";

interface TrainerCardProps {
  data: Trainer
}

const DEFAULT_TRAINER_IMAGE = 'unknown.png'

export function TrainerCard({data}: TrainerCardProps): ReactElement {


  return <div className="bg-zinc-800 max-h-60 h-60 flex border-4 border-red-600 p-2 max-w-xl">
    <div className={"w-44 flex justify-items-center overflow-hidden no-flex"}>
      <img className={'h-full max-h-full object-cover'} src={`static/trainer/${data.spriteUrl ?? DEFAULT_TRAINER_IMAGE}`}></img>
    </div>
    <div className={'pt-4 h-full max-h-full flex-1 flex flex-col'}>
      <div className="w-full no-flex">
        <h3 className="font-retro text-white">{data.title} {data.name}</h3>
      </div>
      <div className={'pl-4 w-full no-flex'}>
        <h3 className="font-retro text-yellow-200">{data.theme}</h3>
      </div>
      <div className="w-full flex-1">
        <ul className="grid grid-cols-3 grid-rows-2 h-full max-h-full w-full place-content-around">
          {data.team.map((pokemon: Pokemon, index) =>
            <li key={`${data.name}-pokemon-${index}`} className={`${index == 0 ? '' : 'p-2'} flex justify-center content-center items-stretch`}>
              <div className={`overflow-hidden rounded-full bg-${pokemon.type1.toLowerCase()}`}>
                <img
                  className={`w-full h-full object-cover bg-type-${pokemon.type1.toLowerCase()}-light`}
                  src={`static/pokedex/sprites/${pokemon.spriteUrl}`}
                />
              </div>

              {/*{pokemon.name}*/}
            </li>)}
        </ul>
      </div>
    </div>
  </div>;
}

