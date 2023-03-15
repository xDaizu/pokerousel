import {ReactElement, useEffect, useState} from "react";
import {TrainerCard} from "./TrainerCard";
import {TrainerSimplifiedCard} from "./TrainerSimplifiedCard";

interface TrainerCardListProps {
  data: Trainer[]
  transitionTime?: number
}


export function Carousel({data, transitionTime}: TrainerCardListProps): ReactElement {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(new Date());
  const [percentage, setPercentage] = useState(100);
  const timeIncrement = (transitionTime ?? 2000) / 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, timeIncrement);
    setPercentage(percentage - 1)
    if (percentage === 0) {
      const newIndex = ((index + 1) % (allCards.length ?? 1))
      setIndex(newIndex)
      setPercentage(100)
    }

    return () => clearInterval(interval);
  }, [time]);

  const subscriberTrainerCards = data.filter((trainer: Trainer) => trainer.isSubscriber).map((trainer: Trainer) =>
    <TrainerCard data={trainer} />);

  const simpleCards = buildSimplifiedCards(data.filter((trainer: Trainer) => !trainer.isSubscriber))

  const allCards = [...subscriberTrainerCards, ...simpleCards]

  return <>
    {allCards[index]}
    <div className="max-w-xl bg-zinc-400 h-2.5 dark:bg-gray-700">
      <div className="bg-zinc-800 h-2.5 w-32" style={{width: `50%`, transitionProperty: 'width'}}></div>
    </div>
  </>;
}

function buildSimplifiedCards(trainers: Trainer[]): ReactElement[] {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < trainers.length; i += chunkSize) {
    chunks.push(trainers.slice(i, i + chunkSize));
  }

  return chunks.map((chunk: Trainer[]) => <TrainerSimplifiedCard data={chunk} />)
}