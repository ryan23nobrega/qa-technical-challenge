class InventoryPage {

  constructor(page) {

    this.page = page;

    this.backpackAddButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

    this.cartButton = page.locator('.shopping_cart_link');

    this.removeButton = page.locator('[data-test="remove-sauce-labs-backpack"]');

    this.cartBadge = page.locator('.shopping_cart_badge');

    this.sortDropdown = page.locator('[data-test="product-sort-container"]');

    this.inventoryItems = page.locator('.inventory_item_name');

  }

  async addBackpackToCart() {

    await this.backpackAddButton.click();

  }

  async accessCart() {

    await this.cartButton.click();

  }

  async removeBackpack() {

    await this.removeButton.click();

  }

  async sortProducts(option) {

    await this.sortDropdown.selectOption(option);

  }

}

module.exports = InventoryPage;