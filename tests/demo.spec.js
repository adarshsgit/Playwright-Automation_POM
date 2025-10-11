/*import { expect } from '@playwright/test'

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

export { LoginPage };*/

/*import { expect } from "@playwright/test";

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('xpath=//a[normalize-space()="Cart"]');
    this.cartHeading = page.getByRole('heading', { name: 'Products' });
    this.cartItems = '//tbody[@id="tbodyid"]/tr/td[2]';
    this.placeOrder = page.getByRole('button', { name: 'Place Order' });
    this.itemName;

  }

  async verifyCart(itemName) {
    await this.cartLink.click();
    await expect(this.cartHeading).toBeVisible();
    await this.page.waitForSelector(this.cartItems);
    const productsinCart = await this.page.$$(this.cartItems);
    for (const product of productsinCart){
        console.log(await product.textContent());
        if(itemName=== await product.textContent()){
          return true;
          break;
        }

    }

  }
}

export { CartPage };*/


/*class HomePage {

    constructor(page) {
        this.page = page;
        this.productListSelector = "//div[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
        this.productName;
    }

    async selectProduct(productName) {
        const products = await this.page.$$(this.productListSelector);
        for (const product of products) {
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }

    }

    async addToCart() {
        await this.addToCartButton.click();
        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes('Product added')) {
                await dialog.accept();
            }
        })


    }

}

export { HomePage };*/