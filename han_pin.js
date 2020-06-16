var pinyin = require("pinyin");

console.log(pinyin("单雄信"));    // [ [ 'zhōng' ], [ 'xīn' ] ]
console.log(pinyin("单雄信", {
  heteronym: true               // 启用多音字模式
}));                            // [ [ 'zhōng', 'zhòng' ], [ 'xīn' ] ]
// console.log(pinyin("中心", {
//   heteronym: true,              // 启用多音字模式
//   segment: true                 // 启用分词，以解决多音字问题。
// }));  

let pinyinList = pinyin("单雄信", {
  style: pinyin.STYLE_NORMAL, // 设置拼音风格
  heteronym: true               // 启用多音字模式
});
console.log(pinyinList);

function doExchange(arr){
  var len = arr.length;
  // 当数组大于等于2个的时候
  if(len >= 2){
      // 第一个数组的长度
      var len1 = arr[0].length;
      // 第二个数组的长度
      var len2 = arr[1].length;
      // 2个数组产生的组合数
      var lenBoth = len1 * len2;
      //  申明一个新数组,做数据暂存
      var items = new Array(lenBoth);
      // 申明新数组的索引
      var index = 0;
      // 2层嵌套循环,将组合放到新数组中
      for(var i=0; i<len1; i++){
          for(var j=0; j<len2; j++){
              items[index] = arr[0][i] +" "+ arr[1][j];
              index++;
          }
      }
      // 将新组合的数组并到原数组中
      var newArr = new Array(len -1);
      for(var i=2; i < arr.length; i++){
          newArr[i-1] = arr[i];
      }
      newArr[0] = items;
      // 执行回调
      return doExchange(newArr);
  }else{
      return arr[0];
  }
}
console.log(doExchange(pinyinList))

// console.log(pinyin("中心", {
//   style: pinyin.STYLE_INITIALS, // 设置拼音风格
//   heteronym: true
// }));                            // [ [ 'zh' ], [ 'x' ] ]