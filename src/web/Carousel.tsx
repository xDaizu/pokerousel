import classnames from 'classnames'
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import type { Trainer } from '../core/Trainer'
import { TrainerCard } from './TrainerCard'
import { TrainerSimplifiedCard } from './TrainerSimplifiedCard'
import { useTimedCyclicCounter } from './useTimedCyclicCounter'

const TIME_STEP = 2000 // ms

interface TrainerCardListProps {
  data: Trainer[]
  transitionTime?: number
}

export function Carousel({
  data,
  transitionTime,
}: TrainerCardListProps): ReactElement {
  const subscriberTrainerCards = useMemo(() => {
    return data
      .filter((trainer: Trainer) => trainer.isSubscriber)
      .map((trainer: Trainer) => (
        <TrainerCard data={trainer} key={trainer.name} />
      ))
  }, [data])

  const simpleCards = useMemo(() => {
    return buildSimplifiedCards(
      data.filter((trainer: Trainer) => !trainer.isSubscriber),
    )
  }, [data])

  const allCards = useMemo(
    () => [...subscriberTrainerCards, ...simpleCards],
    [simpleCards, subscriberTrainerCards],
  )
  const [counter, oldCounter] = useTimedCyclicCounter(
    allCards.length,
    transitionTime ?? TIME_STEP,
  )

  return (
    <div id="carousel" className="relative">
      {allCards.map((card, index) => {
        return (
          <div
            style={{ zIndex: allCards.length - index }}
            className={classnames(
              'absolute transition-transform delay-100 duration-1000',
              index === oldCounter && '-translate-x-full',
              index !== counter && index !== oldCounter && 'invisible',
            )}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            {card}
          </div>
        )
      })}
    </div>
  )
}

function buildSimplifiedCards(trainers: Trainer[]): ReactElement[] {
  const chunkSize = 3
  const chunks = []
  for (let i = 0; i < trainers.length; i += chunkSize) {
    chunks.push(trainers.slice(i, i + chunkSize))
  }

  return chunks.map((chunk: Trainer[]) => (
    <TrainerSimplifiedCard
      data={chunk}
      key={chunk.map(({ name }) => name).join('|')}
    />
  ))
}
