let car = {
    model: "Mustang",
    brand: "Ford",
    year: 2024,
    owner: {
        name: "John",
        surname: "Snow"
    },
    getInfo() {
        function getObject(obj){
            for (let key in obj) {
                if (typeof obj[key] === 'function') {
                }
                else if (typeof obj[key] === "object") {
                    getObject(obj[key]);
                } else {
                    console.log(`${key}: ${obj[key]}`)
                }
            }
        }
        getObject(this)
    }
}

car.getInfo();
car.owner.city = 'Winterfell';
car.getInfo();
