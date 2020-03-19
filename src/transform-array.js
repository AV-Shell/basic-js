const CONTROLS = {
    '--discard-next': true,
    '--discard-prev': true,
    '--double-next': true,
    '--double-prev': true,
}

const SHOW_CONSOLE_LOG = false;

module.exports = function transform(inc_arr) {
    if (!(Array.isArray(inc_arr))) {
        throw 'Not array';
    }
    if (SHOW_CONSOLE_LOG) console.log('start program');
    if (SHOW_CONSOLE_LOG) console.log('array length', inc_arr.length, 'array:', inc_arr);


    for (let i = 0; i < inc_arr.length; i++) {
        if (inc_arr[i] in CONTROLS) {
            switch (inc_arr[i]) {
                case '--double-prev':
                    if (i > 0) {
                        inc_arr.splice(i, 1, inc_arr[i - 1])
                    } else {
                        inc_arr.splice(i, 1);
                        i--;
                    }
                    break;
                case '--double-next':
                    if (i < (inc_arr.length - 1)) {
                        inc_arr.splice(i, 1, inc_arr[i + 1]);
                    } else {
                        inc_arr.splice(i, 1);
                    }
                    break;

            }
        }
    }
    for (let i = 0; i < inc_arr.length; i++) {
        if (inc_arr[i] in CONTROLS) {
            switch (inc_arr[i]) {
                case '--discard-prev':
                    if (i > 0) {
                        inc_arr.splice(i - 1, 2);
                        i-=2;
                    } else {
                        inc_arr.splice(i, 1);
                        i-=1;
                    }
                    break;
                case '--discard-next':
                    if (i < (inc_arr.length - 1)) {
                        inc_arr.splice(i, 2);
                        i--;
                    } else {
                        inc_arr.splice(i, 1);
                        i--;
                    }
                    break;
            }
        }
    }



    if (SHOW_CONSOLE_LOG) console.log('array length', inc_arr.length, 'array:', inc_arr);
    if (SHOW_CONSOLE_LOG) console.log('end program');
    return inc_arr;
    // remove line with error and write your code here
};
