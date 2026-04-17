// Write your code here
// Task 2: Create the Product Inventory Array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Task 3: Function to log the first product
function logFirstProduct() {
    console.log(products[0]);
}

// Task 4: Function to add a new product
function addProduct(productName) {
    products.push(productName);
}

// Task 5: Function to update a product name by index
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }
}

// Task 6: Function to remove the last product
function removeLastProduct() {
    products.pop();
}

// Export for automated testing (required for the tests to work)
module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct
};


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
