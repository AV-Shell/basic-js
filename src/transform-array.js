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
    /* Я так понимаю задачу упростили, плак плак плак плак ...

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
    */

    let myArr = inc_arr.slice();
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] in CONTROLS) {
            switch (myArr[i]) {
                case '--double-prev':
                    if (i > 0) {
                        myArr[i] = myArr[i-1];
                    } else {
                        myArr[i] = null;
                    }
                    break;
                case '--double-next':
                    if ((i+1) < inc_arr.length) {
                        myArr[i] = myArr[i+1];
                    } else {
                        myArr[i] = null;
                    }
                    break;
                case '--discard-prev':
                    if (i > 0) {
                        myArr[i] = null;
                        myArr[i-1] = null;
                    } else {
                        myArr[i] = null;
                    }
                    break;
                case '--discard-next':
                    if (i < (inc_arr.length - 1)) {
                        myArr[i] = null;
                        myArr[i+1] = null;
                    } else {
                        myArr[i] = null;
                    }
                    i++;
                    break;
            }
        } 
    }
    myArr = myArr.filter((el) => el !== null);
    if (SHOW_CONSOLE_LOG) console.log('array length', myArr.length, 'array:', myArr);
    if (SHOW_CONSOLE_LOG) console.log('end program');
    return myArr;
    // remove line with error and write your code here
};
