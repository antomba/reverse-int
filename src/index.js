module.exports = function reverse(n) {
    var result = "";
    for (let i = n.toString().length; i > 0; i--) {
        result += n.toString()[i - 1];
    }
    return parseInt(result);
};
