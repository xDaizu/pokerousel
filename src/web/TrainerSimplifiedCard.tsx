import {ReactElement} from "react";

interface TrainerCardProps {
  data: (Trainer | undefined)[]
}

export function TrainerSimplifiedCard({data}: TrainerCardProps): ReactElement {


  return <div className="bg-zinc-800 max-h-60 h-60 flex border-4 border-red-600 p-2 max-w-xl">
    <div className={"w-full flex justify-items-center overflow-hidden no-flex"}>
      <table className="table-fixed w-full">
        <tbody>
        {data.map(trainer => trainer === undefined ? undefined : <tr>
          <td className='w-16'><img
            className={`w-16 h-16`}
            src={`static/pokedex/sprites/${trainer.team[0].spriteUrl}`}
          /></td>
          <td className=''>
            <h3 className="text-center font-retro text-white">{trainer.title} {trainer.name}</h3>
            <h3 className="text-center font-retro text-yellow-200">{trainer.theme}</h3>
          </td>
        </tr>)}
        </tbody>
      </table>
    </div>
  </div>;
}

