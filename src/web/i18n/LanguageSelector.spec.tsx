import { fireEvent, render, screen } from '@testing-library/react'
import { use as chaiUse, expect } from 'chai'
import chaiDom from 'chai-dom'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import i18n from '../i18n'
import LanguageSelector from './LanguageSelector'

chaiUse(chaiDom)
chaiUse(sinonChai)

describe('<LanguageSelector />', function () {
  it('should be set to `i18n.resolvedLanguage` by default', function () {
    render(<LanguageSelector />)
    const selectedOption: HTMLOptionElement = screen.getByRole('option', {
      selected: true,
    })

    expect(i18n.resolvedLanguage).to.be.an('string').and.not.be.empty
    expect(selectedOption).to.have.value(i18n.resolvedLanguage)
  })

  it('should have at least "English" and "Español" options', function () {
    render(<LanguageSelector />)
    const options: HTMLOptionElement[] = screen.getAllByRole('option')

    expect(options).to.have.length.greaterThanOrEqual(2)
    expect(screen.getByRole('option', { name: 'English' })).to.exist.and.be
      .visible
    expect(screen.getByRole('option', { name: 'Español' })).to.exist.and.be
      .visible
  })

  it('should call `i18n.changeLanguage` when selecting a different option', function () {
    render(<LanguageSelector />)
    const select = screen.getByRole('combobox')
    const selectedOption = i18n.resolvedLanguage !== 'en' ? 'en' : 'es'
    const spy = sinon.spy(i18n, 'changeLanguage')

    fireEvent.change(select, { target: { value: selectedOption } })
    expect(spy).to.have.been.calledOnceWith(selectedOption)

    spy.restore()
  })
})
