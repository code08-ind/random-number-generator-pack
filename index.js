let value;

const random = (min, max, isInt, uptoDecimalPlace) => {
    if (isInt === true) {
        value = parseInt((max - min) * Math.random() + min);
    }
    else {
        value = ((max - min) * Math.random().toFixed(uptoDecimalPlace)) + min;
    }
    return value;
}

module.exports.random = random;