/// <reference types="cypress" />

describe("Add and remove a product from the cart", ()=> {

    beforeEach("visit the link and login", () =>{
        cy.visit("https://www.saucedemo.com/") 
        cy.get("#user-name").type("standard_user") 
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click() 
        //lkjhg
    })
    
  
    it("Add a product to the cart ", ()=>{
        let pro1 
  
        cy.get(".inventory_item").eq(0).within(() => {
                cy.contains("Add to cart").click();
                cy.contains("Remove").should("be.visible");
                cy.get('.inventory_item_name').eq(0).then(prodNameCard=> {
                pro1 =prodNameCard.text();
                cy.log(pro1)
            })
           
        });
        
        // verifier si panier contient 1 seul produit
        cy.get("span[data-test='shopping-cart-badge']").should("be.visible").and("have.text", "1");
        //visiter  le  panier
        cy.get("a[data-test='shopping-cart-link']").click()
        // vérifier que c'est bien le bon produit
    
        cy.get('.inventory_item_name').eq(0).then(obj=> {
            obj.text()==pro1 ? cy.log("le produit est le bon") : cy.log("le produit est incorrect")
        });

        //supprimer le produit
        cy.get(".cart_item").eq(0).within(() => {
            cy.contains("Remove").click();
          });
          // Le badge du panier ne doit plus exister
            cy.get(".shopping_cart_badge").should("not.exist");
  
    });
  
        
    })