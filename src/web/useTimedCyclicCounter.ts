import { useCallback, useEffect, useState } from 'react'

type CyclicCounter = [number | undefined, undefined | number]

export function useTimedCyclicCounter(
  maxCounter: number,
  timeStep: number,
): CyclicCounter {
  const [counter, setCounter] = useState<CyclicCounter>([0, undefined])

  const updateCounter = useCallback(
    () =>
      void setCounter(([oldValue]) => {
        if (oldValue === undefined) {
          return [0, undefined]
        }

        const nextValue = oldValue + 1
        if (nextValue >= maxCounter) {
          return [undefined, oldValue]
        }
        return [nextValue, oldValue]
      }),
    [maxCounter],
  )

  useEffect(() => {
    const interval = setInterval(updateCounter, timeStep)

    return () => {
      clearInterval(interval)
    }
  }, [timeStep])

  return counter
}
