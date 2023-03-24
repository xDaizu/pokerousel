import {ReactElement} from "react";

interface TrainerCardProps {
  data: Trainer
}

const DEFAULT_TRAINER_IMAGE = 'unknown.png'

export function TrainerCard({data}: TrainerCardProps): ReactElement {


  return <div className="bg-zinc-400 max-h-60 h-60 flex p-1 max-w-xl flex-col justify-center">
    <div className="p-2 bg-zinc-800 max-h-full h-full flex rounded-xl max-w-xl">
      <div className={"w-36 flex justify-items-center overflow-hidden no-flex"}>
        <img className={'h-full max-h-full object-cover'} src={`static/trainer/${data.spriteUrl ?? DEFAULT_TRAINER_IMAGE}`}></img>
      </div>
      <div className={'pt-1 h-full max-h-full flex-1 flex flex-col'}>
        <div className="w-full no-flex">
          <h3 className="font-retro text-white">{data.title} {data.name}</h3>
        </div>
        <div className={'pl-4 pb-1 w-full no-flex'}>
          <h3 className="font-retro text-yellow-200 text-sm">{data.theme}</h3>
        </div>
        <div className="w-full flex-1">
          <ul className="grid grid-cols-3 grid-rows-2 h-full max-h-full w-full place-content-around">
            {data.team.map((pokemon: Pokemon, index) =>
              <li key={`${data.name}-pokemon-${index}`} className={`${index == 0 ? '' : ''} flex justify-center content-center items-stretch`}>
                <div className={`w-20 h-20 overflow-hidden ${index == 0 ? '-m-1' : ''} rounded-full bg-type-${pokemon.type1.toLowerCase()}-dark drop-shadow-xl`}>
                  <img
                    className={`w-24 h-24 object-cover rounded-full -mt-2.5
                    ${pokemon.type2 === undefined 
                      ? `bg-gradient-to-b from-type-${pokemon.type1.toLowerCase()} to-type-${pokemon.type1.toLowerCase()}-dark via-type-${(pokemon.type2 ?? pokemon.type1).toLowerCase()}-darko`
                      : `bg-gradient-to-b from-type-${pokemon.type1.toLowerCase()} to-type-${(pokemon.type2 ?? pokemon.type1).toLowerCase()} via-type-${(pokemon.type2 ?? pokemon.type1).toLowerCase()}-dark`
                    }
                    `}
                    // alternative for plain double color
                    // style={{background: 'linear-gradient(110deg, #6890F0 60%, #F4BDC9 60%)'}}
                    src={`static/pokedex/sprites/${pokemon.spriteUrl}`}
                    style={{"clip-path": "circle(40%)"}}
                  />
                </div>

                {/*{pokemon.name}*/}
              </li>)}
          </ul>
        </div>
      </div>
    </div>
  </div>;
}

