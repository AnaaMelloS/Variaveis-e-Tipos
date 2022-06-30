function substituiPares(array) {
    if (!array.length) return - 1;

    const naoZero = (num) => num !== 0;
    const numPar = (num) => num % 2 === 0;

    for (let i = 0; i < array.length; i++) {
        if (numPar(array[i]) && naoZero(array[i])) {
            console.log(`Substituindo ${array[i]} por zero...`)
            array[i] = 0;
        } else if (!naoZero(array[i])) {
            console.log("Você já é zero!");
        }
    }
    console.log(array);
}
// exemplo:
substituiPares([1, 22, 35, 66, 78, 99]);