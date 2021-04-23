const TEXT = "Nima"
const Tword = "T"

describe('Search box test', () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it('Add a new row', () => {
        // before each test, make sure to visit the home page of the app
        // create one todo item
        cy.get("[data-cy=search]") // grab the input
            .type(TEXT) // type Text into input
            .type("{enter}") // press enter
            .clear();

        cy.get("[data-cy=channel-list] li")
            .last() // last li
            .find("p")
            .should("contain", TEXT);
    })

    it('Prevent to Add empty value', () => {
        cy.get("[data-cy=search]") // grab the input
            .type(' ') // type nothing
            .type("{enter}"); // press enter

        cy.get("[data-cy=channel-list] li")
            .its('length') // first li
            .should("eq", 5);
    })

    it('Search for a record', () => {
        cy.get("[data-cy=search]") // grab the input
            .type(TEXT) // type Nima
            .get('#search_btn').click(); // press enter

        cy.get("[data-cy=channel-list] li")
            .its('length') // first li
            .should("eq", 1);

        cy.get("[data-cy=search]") // grab the input
            .clear()
            .type(Tword) // type T
            .get('#search_btn').click(); // press enter

        cy.get("[data-cy=channel-list] li")
            .its('length') // first li
            .should("eq", 4);
    })
})
