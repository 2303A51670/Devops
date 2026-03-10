function validatePayment(paymentMethod) {
    if (paymentMethod === 'Credit Card') {
        console.log('Payment validated successfully with Credit Card.');
    } else if (paymentMethod === 'PayPal') {
        console.log('Payment validated successfully with PayPal.');
    } else {
        console.log('Payment method is not supported.');
    }
}

module.exports = { validatePayment };