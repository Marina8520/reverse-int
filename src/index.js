module.exports = function reverse (n) {
    let numArray= [],
    numArrayReverse = [];

    n = Math.abs(n);
    numArray = Array.from(String(n));
    for(let i = 0; i < numArray.length; i++) {
        numArrayReverse.unshift(numArray[i]);
        console.log(numArray[i]);
        }
        return numArrayReverse.join('');
}
