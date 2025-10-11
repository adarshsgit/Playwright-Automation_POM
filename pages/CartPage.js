
import { expect } from "@playwright/test";

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('xpath=//a[normalize-space()="Cart"]');
    this.cartHeading = page.getByRole('heading', { name: 'Products' });
    this.cartItems = page.locator('//tbody[@id="tbodyid"]/tr/td[2]');
    this.cartHeading = page.getByRole('heading', { name: 'Products' });
    this.cartItems = page.locator('//tbody[@id="tbodyid"]/tr/td[2]');
    this.placeOrder = page.getByRole('button', { name: 'Place Order' });
  }


  async goToCart() {
    await this.cartLink.click();
    await expect(this.cartHeading).toBeVisible();
  }

  async verifyItemInCart(itemName) {
    await this.cartItems.first().waitFor();
    const productsinCart = await this.cartItems.elementHandles();
    for (const product of productsinCart) {
      const text = await product.textContent();
      if (itemName === text) {
        console.log(text + " is available in the cart");
        return true;
      }
    }
    return false;
  }
}

export { CartPage };


