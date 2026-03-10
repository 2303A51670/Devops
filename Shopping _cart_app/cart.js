let cart = [];

function addItemToCart(item) {
    cart.push(item);
    console.log(`${item} added to the cart.`);
}

function removeItemFromCart(item) {
    const index = cart.indexOf(item);
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${item} removed from the cart.`);
    } else {
        console.log(`${item} is not in the cart.`);
    }
}

function showCart() {
    console.log("Items in your cart:", cart);
}

module.exports = { addItemToCart, removeItemFromCart, showCart };