let services = {
    "стрижка": "60.01 грн",
    "гоління": "80.90 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200.99 грн";

function price() {
    let sum = 0;
    for (let key in this) {
        sum += parseFloat(this[key]);
    }
    return sum;
}
console.log(price.call(services));

function minPrice() {
    let prices = [];
    for (let key in this) {
        prices.push(parseFloat(this[key]));
    }
    return Math.min(... prices);
}
console.log(minPrice.call(services));

function maxPrice() {
    let prices = [];
    for (let key in this) {
        prices.push(parseFloat(this[key]));
    }
    return Math.max(... prices);
}
console.log(maxPrice.call(services));

