module.exports = function repeater(str, options) {


    repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 0;
    separator = 'separator' in options ? options.separator : '+';
    addition = 'addition' in options ? options.addition : '';
    additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 0;
    additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';

    outstring = '';
    let i = 0;
    do {
        i++;
        if (i > 1) {
            outstring = outstring + separator;
        }
        let add_str = '';
        let j = 0;
        do {
            j++;
            if (j > 1) {
                add_str = add_str + additionSeparator;
            }
            add_str = add_str + addition
        } while (j < additionRepeatTimes);
        outstring = outstring + str + add_str;
    } while (i < repeatTimes);
    return outstring;
    throw 'Not implemented';
    // remove line with error and write your code here
};
