
import { expect } from "@playwright/test";

class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator("//div[@id='tbodyid']/div/div/div/h4/a");
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
  }

  async selectProduct(productName) {
    const products = await this.productList.elementHandles(); // Get all product elements
    for (const product of products) {
      const text = await product.textContent();
      if (text === productName) {
        await product.click(); // Click the matching product
        break;
      }
    }
  }

  async addToCart() {
    this.page.on('dialog', async dialog => {
      if (dialog.message().includes('Product added')) {
        await dialog.accept(); // Accept confirmation dialog
      }
    });
    await this.addToCartButton.click(); // Trigger the dialog
  }
}

export { HomePage };
