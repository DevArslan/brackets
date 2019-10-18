module.exports = function check(str, bracketsConfig) {
  
  let tempBrackets = [];

  if (str.length % 2 != 0 ){
    return false
  }

  for(let i = 0; i < str.length; i++){
    for(let k = 0; k < bracketsConfig.length; k++){
      if(str[i] == bracketsConfig[k][1] && tempBrackets[tempBrackets.length-1] == bracketsConfig[k][0]){
        tempBrackets.pop()
      }

      else if(str[i] == bracketsConfig[k][0] || str[i] == bracketsConfig[k][1]){
        tempBrackets.push(str[i])
      }
    }
  }
  if(tempBrackets.length == 0){
    return true
  }
  else{
    return false
  }



}
