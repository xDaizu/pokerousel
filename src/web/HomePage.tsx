import type { ReactElement } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import type { Trainer } from '../core/Trainer'
import { importTrainers } from '../core/TrainerImporter'
import { Carousel } from './Carousel'
import Footer from './Footer'

const allTrainers = importTrainers()

export function HomePage(): ReactElement {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [clean, setClean] = useState(true)
  const [trainerFilter, setTrainerFilter] = useState<string | undefined>(
    undefined,
  )

  const trainerList = useMemo(() => {
    return allTrainers.filter(
      (trainer: Trainer) =>
        trainerFilter == undefined ||
        trainer.name.toLowerCase() === trainerFilter.toLowerCase(),
    )
  }, [trainerFilter])

  useEffect(() => {
    const isCleanSet = searchParams.has('clean')
    setClean(isCleanSet)
    setTrainerFilter(searchParams.get('trainer') ?? undefined)
  }, [searchParams])

  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>
        {clean || (
          <h1 className="text-5xl text-center font-display font-light mb-6 mt-10">
            {t('app.title')}
          </h1>
        )}

        <Carousel data={trainerList} />
      </main>
      {clean || <Footer />}
    </div>
  )
}
