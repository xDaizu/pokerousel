import {ReactElement, useEffect, useState} from "react";
import {TrainerCard} from "./TrainerCard";

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
    console.log('use effect ', index)
    const newIndex = ((index + 1) % (subscriberTrainerCards.length ?? 1))
    setIndex(newIndex)
    return () => clearInterval(interval);
  }, [time]);


  const subscriberTrainerCards = data.map((trainer: Trainer) =>
    <TrainerCard data={trainer} />);

  return subscriberTrainerCards[index];
}

