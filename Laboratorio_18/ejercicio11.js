const regexClaveFuerte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

console.log("== Clave Fuerte ==");
console.log("Clave1234 (OK):", regexClaveFuerte.test("Clave1234"));
console.log("clave (MAL - sin mayus/num/8):", regexClaveFuerte.test("clave"));
console.log("ClaveSINnum (MAL - sin num):", regexClaveFuerte.test("ClaveSINnum"));