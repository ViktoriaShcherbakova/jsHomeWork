let services = {
    "стрижка": "60.01 грн",
    "гоління": "80.90 грн",
    "Миття голови": "100 грн",
    price: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                sum += parseFloat(this[key]);
            }
        }
        console.log(sum);
    },
    minPrice: function () {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                prices.push(parseFloat(this[key]));
            }
        }
        console.log(Math.min(... prices));
    },
    maxPrice: function () {
        let prices = [];
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                prices.push(parseFloat(this[key]));
            }
        }
        console.log(Math.max(... prices));
    }
};

services.price();
services['Розбити скло'] = "200.99 грн";

services.price();
services.minPrice();
services.maxPrice();
