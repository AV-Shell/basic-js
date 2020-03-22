module.exports = function getSeason(date) {
  // console.log('in', date);
  let testDate = new Date;
  // for(let prop in testDate){
  // console.log('test a 1',prop);
  // }
  for( let prop in date){
    // console.log('test a 2',prop);
    throw 'Error';
  }
  if (date == null) {
    return 'Unable to determine the time of year!';
    // remove line with error and write your code here  
  }
  if (testDate.__proto__ != date.__proto__) {
    throw 'Error';
  }

  let month_num = date.getMonth();
  // console.log('month_num', month_num);
  {
    switch (month_num) {
      case 0:
      case 1:
      case 11:
        {
          // console.log('winter');
          return 'winter';
        }
      case 2:
      case 3:
      case 4:
        {
          // console.log('spring');
          return 'spring';
        }
      case 5:
      case 6:
      case 7:
        {
          // console.log('summer');
          return 'summer';
        }
      case 8:
      case 9:
      case 10:
        {
          // console.log('fall');
          return 'fall';
        }
    }
  }

};
