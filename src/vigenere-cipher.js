
const DEBUG_LOG_ENABLE = false;
const code_a = 'A'.charCodeAt(0);
const code_z = 'Z'.charCodeAt(0);
class VigenereCipheringMachine {

    constructor(param) {
        if ((typeof (param) == 'boolean') && (param == false)) {
            this.en_type = false;
        } else {
            this.en_type = true;
        }
        console.log('type', this.en_type);
    }


    encrypt(message, key) {
        if ((key == undefined) || (message == undefined)) {
            throw Error;
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (DEBUG_LOG_ENABLE) console.log('Incoming message:', message, 'Incoming key:', key);
        let newkeystring = multiplekey(key, message.length);
        if (DEBUG_LOG_ENABLE) console.log(message);
        if (DEBUG_LOG_ENABLE) console.log(newkeystring);
        let newarr = [];

        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if ((message.codePointAt(i) < code_a) || (message.codePointAt(i) > code_z)) {
                newarr.push(message[i]);
            } else {
                newarr.push(String.fromCodePoint(((message.codePointAt(i) - code_a) + (newkeystring.codePointAt(j) - code_a)) % 26 + code_a));
                j++;
            }
        }
        if (this.en_type) {
            return newarr.join('');
        } else {
            return newarr.reverse().join('');
        }


    }

    decrypt(crypt_message,key) {
        if ((key == undefined) || (crypt_message == undefined)) {
            throw Error;
        }
        crypt_message = crypt_message.toUpperCase();
        key = key.toUpperCase();
        if (DEBUG_LOG_ENABLE) console.log('Incoming crypt_message:', crypt_message, 'Incoming key:', key);
        let newkeystring = multiplekey(key, crypt_message.length);
        if (DEBUG_LOG_ENABLE) console.log(crypt_message);
        if (DEBUG_LOG_ENABLE) console.log(newkeystring);
        let newarr = [];

        let j = 0;
        for (let i = 0; i < crypt_message.length; i++) {
            if ((crypt_message.codePointAt(i) < code_a) || (crypt_message.codePointAt(i) > code_z)) {
                newarr.push(crypt_message[i]);
            } else {
                newarr.push(String.fromCodePoint(((crypt_message.codePointAt(i) - code_a) + 26 - (newkeystring.codePointAt(j) - code_a)  ) % 26 + code_a));
                j++;
            }
        }
        if (this.en_type) {
            return newarr.join('');
        } else {
            return newarr.reverse().join('');
        }
    }
}

module.exports = VigenereCipheringMachine;


function multiplekey(strkey, len) {
    let count = Math.ceil(len / strkey.length);
    if (DEBUG_LOG_ENABLE) console.log(len, count, strkey.length);
    let newstring = '';
    for (let i = 0; i < count; i++) {
        newstring = newstring + strkey;
    }
    if (DEBUG_LOG_ENABLE) console.log(newstring);
    return newstring;
}