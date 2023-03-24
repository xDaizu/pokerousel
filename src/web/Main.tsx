import type {ReactElement} from 'react'
import {useTranslation} from 'react-i18next'
import Footer from './Footer'
import './styles.css'
import {importTrainers} from "../core/TrainerImporter";
import {Carousel} from "./Carousel";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const allTrainers = importTrainers()


export default function Main(): ReactElement {
  const {t} = useTranslation()
  const [searchParams] = useSearchParams();
  const [clean, setClean] = useState(true)
  const [trainerFilter, setTrainerFilter] = useState<string | undefined>(undefined)

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    const isCleanSet = (currentParams.clean ?? null) !== null
    setClean(isCleanSet)
    setTrainerFilter(currentParams.trainer ?? undefined)
  }, [searchParams]);


  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>
        {clean ||
          <h1 className="text-5xl text-center font-display font-light mb-6 mt-10">
            {t('app.title')}
          </h1>
        }

        <Carousel data={allTrainers.filter((trainer: Trainer) => (trainerFilter == undefined || trainer.name.toLowerCase() === trainerFilter.toLowerCase()))} />
      </main>
      {clean || <Footer />}
    </div>
  )
}
