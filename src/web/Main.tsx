import type {ReactElement} from 'react'
import {useTranslation} from 'react-i18next'
import Footer from './Footer'
import './styles.css'
import {importTrainers} from "../core/TrainerImporter";
import {Carousel} from "./Carousel";

const trainers = importTrainers()


export default function Main(): ReactElement {
  const {t} = useTranslation()
  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>

        <h1 className="text-5xl text-center font-display font-light mb-6 mt-10">
          {t('app.title')}
        </h1>
        <Carousel data={trainers} transitionTime={10000}/>
      </main>
      <Footer />
    </div>
  )
}
