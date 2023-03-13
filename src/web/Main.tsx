import type { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from './Footer'
import './styles.css'

export default function Main(): ReactElement {
  const { t } = useTranslation()
  return (
    <div className="min-h-full max-w-7xl mx-4 sm:mx-8 xl:mx-auto">
      <main>
        <h1 className="text-5xl text-center font-display font-light mb-6 mt-10">
          {t('app.title')}
        </h1>
        <p className="text-center text-slate-800 my-4">
          {t('app.description')}
        </p>
      </main>
      <Footer />
    </div>
  )
}
