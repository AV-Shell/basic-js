const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // console.log (arr)
        if (!(Array.isArray(arr))) {
            return 0;
        } else {
            let max = 0;
            arr.forEach(element => {
                if (Array.isArray(element)) {
                    let tmp = this.calculateDepth(element);
                    max = tmp > max ? tmp : max;
                }
            });
            max++;
            return max;
        }
    }
};