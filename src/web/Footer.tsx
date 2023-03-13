import type { ReactElement } from 'react'
import { Trans } from 'react-i18next'
import LanguageSelector from './i18n/LanguageSelector'

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const githubLogo = require('./images/GitHub-Mark-32px.png') as string
// const repositoryUrl = 'https://github.com/'

export default function Footer(): ReactElement {
  return (
    <footer className="text-center">
      <div className="h-0.5 my-8 mx-auto w-4/5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <div>
        <LanguageSelector />
      </div>
      <div className="pt-4 pb-8 align-middle">
        {/* <a
          className="inline-block w-fit mx-4 align-middle	"
          href={repositoryUrl}
          rel="noreferrer"
          target="_blank"
        >
          <img alt="GitHub Repository" src={githubLogo} />
        </a> */}
        <span className="align-middle	">
          <Trans i18nKey="app.footer.made-by">
            {'Made with ❤️ by '}
            <a
              className="font-display hover:underline font-semibold"
              href="https://github.com/Josan-Coba/"
              rel="noreferrer"
              target="_blank"
            >
              Josan
            </a>
          </Trans>
        </span>
      </div>
    </footer>
  )
}
