class LoginPage {

    navloginCTA() {
        return cy.get(':nth-child(4) > .hover-underline-animation')
    }

    username() {
        return cy.get('input[placeholder="user@example.com"]')
    }

    password() {
        return cy.get('input[type="password"]')
    }

    loginCTA() {
        return cy.get('button[class*="login-btn"]')
    }

    logoutCTA() {
        return cy.get('#pn_id_3_3 > .p-menuitem-content > .p-ripple')
    }

    profileIcon() {
        return cy.get('div[data-pc-name="avatar"]')
    }

    startACampaignCTA(){
        return cy.get('.align-middle')
    }

    campaignHeading(){
        return cy.get('div[class="select-rally-type-container"] h2')
    }



}
export default LoginPage; 