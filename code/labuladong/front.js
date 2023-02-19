// deep clone
function deepClone(target) {
  let obj;
  if (Object.toString.call(target) == "[object Array]") {
    obj = [];
  } else if (Object.prototype.toString.call(target) == "[object Object]") {
    obj = {};
  } else {
    return target;
  }
  for (let key in target) {
    let item = target[key];
    if (
      Object.prototype.toString.call(item) == "[object Array]" ||
      Object.prototype.toString.call(item) == "[object Object]"
    ) {
      obj[key] = deepClone(item);
    } else {
      obj[key] = item;
    }
  }
  return obj;
}
//深度冻结
function deepFreeze(target){
    Object.freeze(target);
    for(let key in target){
        let item=target[key]
        if (
            Object.prototype.toString.call(item) == "[object Array]" ||
            Object.prototype.toString.call(item) == "[object Object]"
          ) {
            deepFreeze(item);
          }  
    }
}

//防抖节流
function fangdou(fun,delay){
    let timer;
    return function(){
        if(timer){
            clearTimeout(fun,delay)
        }else{
            timer=setTimeout(()=>fun,delay)
        }
    }
    
}
function jieliu(func,delay){
    let timer;
    return function(){
        if(timer){
            return
        }else{
            timer=setTimeout(()=>func,delay)
        }
    }
}
