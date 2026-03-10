const cart = require('./cart');
const payment = require('./payment');

console.log("Testing cart functionality...");
cart.addItemToCart('Apple');
cart.addItemToCart('Banana');
cart.showCart();
cart.removeItemFromCart('Apple');
cart.showCart();

console.log("Testing payment functionality...");
payment.validatePayment('Credit Card');
payment.validatePayment('PayPal');
payment.validatePayment('Bitcoin');