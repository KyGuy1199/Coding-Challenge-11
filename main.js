//Task 2: Add Event Listener for Product Selection

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');   //Get references for the different HTML elements

//Task 3: Add Event Listener for Product Selection

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);         //Get entered quantity and product prices
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2);      
}

//Task 4: Handle order submission and display order summary

productSelector.addEventListener('change',updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);          //Event listeners to trigger updates and/or changes

placeOrderButton.addEventListener('click', function() {
    const selectedProductText = productSelector.options[productSelector.selectedIndex].text;
    const quantity = parseInt(quantityInput.value);
    const totalPrice = totalPriceElement.textContent;           //Get selected product, entered quantity, calculated total price
    
    if (isNaN(quantity) || quantity <= 0) {
        orderSummary.textContent = "Please enter a valid quantity.";        //I added an error message
        return;
}

    orderSummary.textContent = 'You Ordered ${quantity} of ${selectedProductText}. Total Price: $${totalPrice}';

});
