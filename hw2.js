function pow(base, exponent) {
    let result = 1;
    for (exponent; exponent > 0; exponent--) {
        result = result * base;
    }
    return result;
}

let test = pow(2, 3);

console.log(test);