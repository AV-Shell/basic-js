const CONSOLE_LOG_ENABLE = false;

const chainMaker = {
  cepochka: [],
  getLength() {
    if (CONSOLE_LOG_ENABLE) console.log('getLength', this.cepochka.length);
    return this.cepochka.length;
  },
  addLink(value) {
    str = '' + value;
    this.cepochka.push(str);
    if (CONSOLE_LOG_ENABLE) console.log('addLink', str, 'res', this.cepochka);
    return (this);
  },

  removeLink(position) {
    if ((typeof (position) != "number") || (position > this.cepochka.length) || (position < 1)) {
      this.cepochka = [];
      if (CONSOLE_LOG_ENABLE) console.log('removeLink', (position), 'throw(AZAZA !!! )');
      throw ('AZAZA !!! ')
    }

    if (CONSOLE_LOG_ENABLE) console.log('removeLink', (position), this.chain);

    this.cepochka.splice(position - 1, 1);
    return (this);
  },
  reverseChain() {
    if (CONSOLE_LOG_ENABLE) console.log('reverseChain');
    this.cepochka.reverse();
    return (this);
  },
  finishChain() {
    if (CONSOLE_LOG_ENABLE) console.log('finishChain', this.cepochka);
    let str = '';
    if (this.cepochka.length > 0) {
      str = '( ' + this.cepochka[0] + ' )';
      if (CONSOLE_LOG_ENABLE) console.log('firstchain', str);
      for (let i = 1; i < this.cepochka.length; i++) {
        str += '~~( ' + this.cepochka[i] + ' )';
      }
    }
    if (CONSOLE_LOG_ENABLE) console.log('finishChain', str);
    this.cepochka = [];
    return (str);
  }
};

module.exports = chainMaker;
