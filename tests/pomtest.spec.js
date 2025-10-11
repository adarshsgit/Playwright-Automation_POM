import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';



test('Verify Login and add to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoURL();
    await loginPage.login('adams123', 'test@123');

    const homePage = new HomePage(page);
    const selectedProduct = "Sony xperia z5";
    await homePage.selectProduct(selectedProduct)
    await homePage.addToCart();
    await page.waitForTimeout(2000);

    const cartPage = new CartPage(page);
    cartPage.goToCart();
    const status = await cartPage.verifyItemInCart(selectedProduct);
    expect(status).toBe(true);

    

})


