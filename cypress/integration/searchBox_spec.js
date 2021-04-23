const TEXT = "Nima"
const Team = "Team"

describe('Search box test', () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it('Test search Input', () => {
        // before each test, make sure to visit the home page of the app
        context("Add todos", () => {
            it.only("should allow me to add todo items", () => {
                // create one todo item
                cy.get("[data-cy=search]") // grab the input
                    .type(TEXT) // type Text into input
                    .type("{enter}"); // press enter

                cy.get("[data-cy=channel-list] li")
                    .last() // last li
                    .find("p")
                    .should("contain", TEXT);

                cy.get("[data-cy=channel-list] li")
                    .eq(0) // first li
                    .find("p")
                    .should("contain", Team);
            });

        });
    })
})
