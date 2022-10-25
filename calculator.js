function display(num){
result.value+=num
}
function allclear(){
    result.value=""
}
function evaluateexp(){
// exp=result.value
// res=eval(exp)
// result.value=res

// or
 result.value=eval(result.value)
}

  function removeelement(){
    currentexp=result.value
    result.value=currentexp.slice(0,-1)
  }
