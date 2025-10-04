import { expect } from '@playwright/test'

class LoginPage {

    constructor(page) {
        this.page = page;
        this.productStoreLink = page.getByRole('link', { name: 'PRODUCT STORE' });
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.profileName = page.getByText('Welcome adams123');
    }

    async gotoURL() {
        await this.page.goto('https://www.demoblaze.com/');
        await expect(this.productStoreLink).toBeVisible();
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.profileName).toBeVisible();

    }
}

export { LoginPage };