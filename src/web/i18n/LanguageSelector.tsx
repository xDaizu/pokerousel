import type { ChangeEventHandler, ReactElement } from 'react'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { LocaleCode } from '.'
import { availableLocales } from '.'

export default function LanguageSelector(): ReactElement {
  const { i18n, t } = useTranslation()

  const onChangeSelectedLanguage = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >(
    (event) => void i18n.changeLanguage(event.target.value as LocaleCode),
    [i18n],
  )

  return (
    <select
      aria-label={t('app.i18n.change-language')}
      className="bg-sky-50 hover:bg-sky-200 capitalize rounded-lg border-secondary shadow ringed-focus focus:border-primary focus:ring-inset active:shadow-none font-display font-medium"
      defaultValue={i18n.resolvedLanguage}
      onChange={onChangeSelectedLanguage}
    >
      {availableLocales.map(({ code, ownDisplayName }) => (
        <option
          className="capitalize font-display font-light"
          key={code}
          value={code}
        >
          {ownDisplayName}
        </option>
      ))}
    </select>
  )
}
