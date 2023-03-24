import type {ReactElement} from 'react'
import {useTranslation} from 'react-i18next'
import Footer from './Footer'
import './styles.css'
import {importTrainers} from "../core/TrainerImporter";
import {Carousel} from "./Carousel";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const trainers = importTrainers()


export default function Main(): ReactElement {
  const {t} = useTranslation()
  const [searchParams] = useSearchParams();
  const [clean, setClean] = useState(true)
  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    const isCleanSet = (currentParams.clean ?? null) !== null
    setClean(isCleanSet)
    console.log(currentParams); // get new values onchange
  }, [searchParams]);

  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>
        {clean ||
          <h1 className="text-5xl text-center font-display font-light mb-6 mt-10">
            {t('app.title')}
          </h1>
        }

        <Carousel data={trainers} />
      </main>
      {clean || <Footer />}
    </div>
  )
}
