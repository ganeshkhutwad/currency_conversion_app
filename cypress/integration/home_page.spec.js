describe('Cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Source currency with USD default value', () => {
        cy.get('select[data-testid="sourceCurrency"]').should(
            'have.value',
            'USD'
        );
    });

    it('Output currency with USD default value', () => {
        cy.get('select[data-testid="outputCurrency"]').should(
            'have.value',
            'USD'
        );
    });

    it('Type value in source amount field', () => {
        cy.get('input[data-testid="sourceAmount"]')
            .type('200')
            .should('have.value', '200');
    });

    it('Error when source amount is empty', () => {
        cy.get('button[data-testid="convertBtn"]').click();
        cy.get('div[data-testid="sourceAmountErrorMsg"]').should(
            'have.text',
            'Field Is Required.'
        );
    });

    it('Error when source amount is invalid amount', () => {
        cy.get('input[data-testid="sourceAmount"]').type('20abc');
        cy.get('button[data-testid="convertBtn"]').click();
        cy.get('div[data-testid="sourceAmountErrorMsg"]').should(
            'have.text',
            'Only Valid Amount Is Allowed.'
        );
    });

    it('Check converted value', () => {
        cy.get('input[data-testid="sourceAmount"]').type('200');
        cy.get('select[data-testid="outputCurrency"]').select('USD');
        cy.get('button[data-testid="convertBtn"]').click();
        cy.get('input[data-testid="outputAmount"]').should(
            'have.value',
            '200.00'
        );
    });

    it('Check no history exists on app load', () => {
        cy.get('div[data-testid="noRecords"]').should(
            'have.text',
            'No records yet...'
        );
    });

    it('Check history should available.', () => {
        cy.get('input[data-testid="sourceAmount"]').type('200');
        cy.get('select[data-testid="outputCurrency"]').select('EUR');
        cy.get('button[data-testid="convertBtn"]').click();
        cy.get(
            'table[data-testid="historyRecords"] > tbody > tr > td:first'
        ).should('have.text', '1');
    });
});
