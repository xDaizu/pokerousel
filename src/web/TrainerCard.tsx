import type {ReactElement} from 'react'
import type {Pokemon} from '../core/Pokemon'
import type {Trainer} from '../core/Trainer'
import {APP_CONFIG} from "../core/app-config";

interface TrainerCardProps {
  data: Trainer
}

const DEFAULT_TRAINER_IMAGE = 'blank.png'

export function TrainerCard({data}: TrainerCardProps): ReactElement {
  const affiliation = data.affiliation ?? 'neutral';

  const borderBgColor =
    affiliation === 'HYL' ? 'bg-amber-400' :
      affiliation === 'HDL' ? 'bg-violet-400' :
        'bg-zinc-900';
  const cardBgColor =
    affiliation === 'HYL' ? 'bg-sky-800' :
      affiliation === 'HDL' ? 'bg-violet-900' :
        'bg-zinc-500';

  const iconSrc =
    affiliation === 'HYL' ? 'static/icons/HYL-loyal.png' :
      affiliation === 'HDL' ? 'static/icons/HDL.png' :
        'static/icons/HYL-neutral.png';

  return (
    <div className={`${borderBgColor} max-h-60 h-60 flex p-1 max-w-xl flex-col justify-center`}>
      <div className={`p-2 ${cardBgColor} max-h-full h-full flex rounded-xl w-full`}>
        <div className="w-36 flex justify-items-center overflow-hidden no-flex">
          <img
            className="h-full max-h-full object-cover"
            src={`static/trainer/${data.spriteUrl ?? DEFAULT_TRAINER_IMAGE}`}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col h-full max-h-full">
          <div className="pt-1 h-full max-h-full flex-1 flex flex-row">
            <div className="flex-1 no-flex">
              <div className="w-full no-flex">
                <h3 className="font-retro text-white">
                  {data.title} {data.name}
                </h3>
              </div>
              <div className="pl-4 pb-2 w-full no-flex">
                <h3 className="font-retro text-yellow-200 text-sm">{data.theme}</h3>
              </div>
            </div>
            <div className="w-12 flex flex-row h-full max-h-full">
              <img
                className="h-full max-h-full object-cover"
                src={iconSrc}
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex flex-row h-full max-h-full">
            <div className="basis-1/4">
              <ul className="font-retro text-white text-xl text-right px-4 align-middle relative">
                <li className="columns-2 h-10">
                  <img className="align-middle" src={`static/emoji/PP.png`} />
                  <div className={`h-full align-text-bottom ${(data.stats.pp ?? 0) >= APP_CONFIG.maxPP ? 'text-green-400' : ''}`}>{data.stats.pp ?? '-'}</div>
                </li>
                <li className="columns-2 h-10">
                  <img className="align-middle" src={`static/emoji/CP.png`} />
                  <div
                    className={`h-full align-text-bottom ${(data.stats.cp ?? 0) >= APP_CONFIG.maxCP ? 'text-green-400' : ''}`}>
                    {data.stats.cp ?? '-'}
                  </div>
                </li>
                <li className="columns-2 h-10">
                  <img className="align-middle" src={`static/emoji/HP.png`} />
                  <div
                    className={`h-full align-text-bottom ${(data.stats.hp ?? 0) >= APP_CONFIG.maxHP ? 'text-green-400' : ''}`}>
                    {data.stats.hp ?? '-'}
                  </div>
                </li>
              </ul>
            </div>
            <div className="basis-3/4 flex-1">
              <ul className="grid grid-cols-3 grid-rows-2 h-full max-h-full w-full place-content-around">
                {data.team.map((pokemon: Pokemon, index) => (
                  <li
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${data.name}-pokemon-${index}`}
                    className={`${
                      index == 0 ? '-mt-2' : ''
                    } m-0.5 flex justify-center content-center items-stretch`}
                  >
                    <div
                      className={`h-full aspect-square overflow-hidden ${
                        index == 0 ? '' : ''
                      } rounded-full bg-type-${pokemon.type1.toLowerCase()}-dark drop-shadow-xl`}
                    >
                      <div
                        className={`aspect-square object-cover overflow-hidden rounded-full m-1 mt-0.5
                       ${
                          pokemon.type2 === undefined
                            ? `bg-gradient-to-b from-type-${pokemon.type1.toLowerCase()} via-type-${pokemon.type1.toLowerCase()}-dark to-type-${pokemon.type1.toLowerCase()}-dark`
                            : `bg-gradient-to-b from-type-${pokemon.type1.toLowerCase()} via-type-${pokemon.type2.toLowerCase()}-dark to-type-${pokemon.type2.toLowerCase()}`
                        }
                       `}
                      >
                        <div
                          className="h-full aspect-square"
                          style={{
                            border: '2px',
                            backgroundImage: `url(static/pokedex/sprites/${pokemon.spriteUrl})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            transform: `scale(${index == 0 ? '1.5' : '1.3'})`,
                          }}
                        />
                      </div>
                    </div>

                    {/*{pokemon.name}*/}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
