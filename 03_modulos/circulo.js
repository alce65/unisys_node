const pi = Math.PI

const area = function (r) {
    return (r * r * pi).toFixed(2)
}

const circunf = function (r) {
    return (2 * r * pi).toFixed(2)
}

exports.area = area
module.exports.circunf = circunf

