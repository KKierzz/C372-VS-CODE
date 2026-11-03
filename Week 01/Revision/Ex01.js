const groomingFee = 50;
const numberOfPets = 2;
// const gstRate = 0.09;
const gstRate = 0.0933333;

const subtotal = groomingFee * numberOfPets;
const gst = subtotal * gstRate;
const total = subtotal + gst;

// const message = "The total cost is $"+total;
// const message = `The total cost is $${total}`;
const message = `The total cost is $${total.toFixed(2)}`;

console.log(message);