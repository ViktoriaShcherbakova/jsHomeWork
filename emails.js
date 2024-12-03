let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

const regex = /^\w+(\.\w+)?(@gmail|@yahoo)\.com$/i;
let result = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].email.match(regex)) {
        result.push(arr[i].email);
    }
}
console.log(result);
