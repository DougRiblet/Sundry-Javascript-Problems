function checkBalancedBrackets(str){
  let stack = [];
  let openers = /[\(\[\{]/;
  let closers = {'}':'{', ')':'(', ']':'['};
  
  for (let i=0; i<str.length; i+=1){
    if (openers.test(str[i])){
      stack.push(str[i]);
    } else if (closers.hasOwnProperty(str[i])){
      if (stack[stack.length-1] === closers[str[i]]){
        stack.pop();
      } else {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}