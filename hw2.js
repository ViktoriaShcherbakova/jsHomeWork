function pow(base, exponent) {
    let result = 1;
    for (exponent, exponent > 0; exponent--;) {
        result = result * base;
    }
    return result;
}

pow(2, 3);