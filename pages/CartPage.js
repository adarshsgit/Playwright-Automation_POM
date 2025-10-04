import { expect } from "@playwright/test";

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('xpath=//a[normalize-space()="Cart"]');
    this.placeOrder = page.getByRole('button', { name: 'Place Order' });
    this.cartHeading = page.getByRole('heading', { name: 'Products' });
  }

  async verifyCart() {
    await this.cartLink.click();
    await expect(this.cartHeading).toBeVisible();
    await this.placeOrder.click();

  }
}

export { CartPage };
