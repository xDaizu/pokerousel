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

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, transitionTime ?? 2000);
    const newIndex = ((index + 1) % (allCards.length ?? 1))
    setIndex(newIndex)
    return () => clearInterval(interval);
  }, [time]);


  const subscriberTrainerCards = data.filter((trainer: Trainer) => trainer.isSubscriber).map((trainer: Trainer) =>
    <TrainerCard data={trainer} />);

  const simpleCards = buildSimplifiedCards(data.filter((trainer: Trainer) => !trainer.isSubscriber))

  const allCards = [...subscriberTrainerCards, ...simpleCards]

  return allCards[5];
}

function buildSimplifiedCards(trainers: Trainer[]): ReactElement[] {
  const chunkSize = 3;
  const chunks = [];
  for (let i = 0; i < trainers.length; i += chunkSize) {
    chunks.push(trainers.slice(i, i + chunkSize));
  }

  return chunks.map((chunk: Trainer[]) => <TrainerSimplifiedCard data={chunk} />)
}