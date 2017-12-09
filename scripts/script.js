var my_obj = {
  name: "misha",
  sourname: "rubinshtein",
  age: 20
}
function findKeys(obj){
  var keys = Object.keys(obj);
  var result_keys = [];
  for(var i = 0; i < keys.length; i++){
    if(keys[i] == "name" || keys[i] == "sourname" || keys[i] == "age"){
      result_keys.push(keys[i]);
    }
  }
  return keys.length == result_keys.length;
}

alert(findKeys(my_obj));
