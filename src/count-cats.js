module.exports = function countCats(backyard) {

  // remove line with error and write your code here
  // console.log(backyard);


  // let i_max =0;
  // let j_max = 0;
  // let ushki_kotika=0;
  // for (let i = 0; i< backyard.length; i++){
  //   let arr = backyard[i];
  //   for (let j=0; j<arr.length;j++){
  //     if (arr[j]=== "^^"){
  //       ushki_kotika++;
  //     }
  //   }
  // }  
  // return ushki_kotika;

  let i =0;
  backyard.map((s) => s.map((el) => { i+= el === '^^' ?1:0 }));

  return i;

    // throw 'Not implemented';
};
