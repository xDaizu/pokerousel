import type { ReactElement } from 'react'
import type { Trainer } from '../core/Trainer'

interface TrainerCardProps {
  data: (Trainer | undefined)[]
}

export function TrainerSimplifiedCard({
  data,
}: TrainerCardProps): ReactElement {
  return (
    <div className="bg-zinc-400 max-h-60 h-60 flex p-2 max-w-xl flex-col justify-center">
      {data.map((trainer) =>
        trainer === undefined ? undefined : (
          <div
            className="w-full flex bg-zinc-800 mb-1 rounded-md drop-shadow-lg"
            key={trainer.name}
          >
            <div className="w-16">
              <img
                className="w-16 h-16"
                src={`static/pokedex/sprites/${trainer.team[0].spriteUrl}`}
                alt={trainer.team[0].name}
              />
            </div>
            <div className="flex flex-1 align-middle flex-col justify-center">
              <h3 className="text-center font-retro text-white">
                {trainer.title} {trainer.name}
              </h3>
              <h3 className="text-center font-retro text-yellow-200">
                {trainer.theme}
              </h3>
            </div>
          </div>
        ),
      )}
    </div>
  )
}
