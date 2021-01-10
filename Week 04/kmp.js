function kmp(source, pattern) {
    // 计算 table 
    let table = new Array(pattern.length).fill(0);
  
    {
      // 寻找模式窜中的公共前后缀
      let i = 1,
        j = 0;
  
      while (i < pattern.length - 1) {
        if (pattern[i] === pattern[j]) {
          ++j, ++i;
          table[i] = j;
        } else {
          if (j > 0) {
            j = table[j];
          } else {
            ++i;
          }
        }
      }
  
      table[0] = -1;
    }
  
    // 匹配
    {
      let i = 0,
        j = 0;
  
      while (i < source.length) {
        if (pattern[j] === source[i]) {
          ++j, ++i;
        } else {
          if (j > 0) {
            j = table[j];
          } else {
            ++i;
          }
        }
        if (j === pattern.length) 
        return true;
      }
      return false;
    }
  }
  
  console.log(kmp('abcdabcdcabcdx', 'abcd'));
  console.log(kmp('hello', 'll'));
  