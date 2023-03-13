describe('I18n subsystem', () => {
  it('should detect the user language', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        Object.defineProperties(win.navigator, {
          language: {
            value: ['es'],
          },
          languages: {
            value: ['es'],
          },
        })
      },
    })

    cy.get('h1').should('have.text', 'TÍTULO APP')

    cy.clearLocalStorage()
    cy.visit('/', {
      onBeforeLoad(win) {
        Object.defineProperties(win.navigator, {
          language: {
            value: ['en'],
          },
          languages: {
            value: ['en'],
          },
        })
      },
    })

    cy.get('h1').should('have.text', 'APP TITLE')
  })

  it('should allow changing the language and retain it after refresh', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        Object.defineProperties(win.navigator, {
          language: {
            value: ['en'],
          },
          languages: {
            value: ['en'],
          },
        })
      },
    })

    cy.get('h1').should('have.text', 'APP TITLE')

    cy.get('select').select('Español')
    cy.get('select').should('have.value', 'es')
    cy.get('h1').should('have.text', 'TÍTULO APP')

    cy.reload(true)
    cy.get('h1').should('have.text', 'TÍTULO APP')
  })
})
