module.exports = function reverse (n) {
    let result = '';
    let plus = Math.abs(n);
    for (let i = 0; i < plus.toString().length; i++){
        result = `${plus.toString()[i]}${result}`
    }
  return Number(result);
}
