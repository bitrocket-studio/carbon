/**
 * /* global cy
 *
 * @format
 */

// import '@applitools/eyes-cypress/commands'
export const editorVisible = () => cy.get('.editor').should('be.visible');
