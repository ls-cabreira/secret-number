const lowNumber = 0;
const highNumber = 101;
const secretNumber = generator();

function generator() {
    document.getElementById("min-value").textContent = lowNumber;
    document.getElementById("max-value").textContent = highNumber - 1;

    return parseInt(Math.random() * highNumber);
}