
class MainPage {
    constructor (){
        
    }

    cookiesAgreement()
    {
        cy.get('#onetrust-accept-btn-handler').click()
    }

    getToast()
    {
        return cy.get('.Toastify__toast-body')
    }

    getSearch()
    {
        return cy.get('.modal-search__input')
    }

    getBtnSelector()
    {
        return '.btn'
    }

    getFeedbackText()
    {
        return '.invalid-feedback'
    }

    
}

export const mainPage = new MainPage()