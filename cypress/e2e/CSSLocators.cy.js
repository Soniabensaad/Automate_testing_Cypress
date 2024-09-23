describe(`CSSLocators`, () => {
    it("csslocators", () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        //cy.get("#search_query_top").type("T-Shits") // id tag is optional
        //cy.get(".search_query").type("T-Shirts")// class tag
        cy.get("[name='search_query']").type("T-Shirts")//Attribute
        cy.get("input.search_query[name='search_query']").type("T-Shirts") // tag class attribute
        cy.get("[name='submit_search']").click() // to test if we can submit a search when clicking 
        //cy.get(".lighter").contains("T-Shirts") //to verify il the class cat-name contzins the word T-Shirt(Assertion)
})
})
