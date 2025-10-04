
class HomePage {

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

export { HomePage };