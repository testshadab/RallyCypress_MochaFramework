import LoginPage from "../pages/loginLocatorPage";

const loginPageLoc = new LoginPage();

export class LoginActionPage {

    login(username, password) {

        loginPageLoc.navloginCTA().click();
        loginPageLoc.username().type(username);
        loginPageLoc.password().type(password);
        loginPageLoc.loginCTA().click();
    }

    verifyLogoutCTA() {
        loginPageLoc.profileIcon().click();
        loginPageLoc.logoutCTA().should('be.visible');
 
    }

    verifyCampaignHeading(){
        loginPageLoc.startACampaignCTA().click();  
        loginPageLoc.campaignHeading().should('be.visible');
    }


}