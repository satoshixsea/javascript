function create_json_from_one_dimentional_array(array){
  var arrays = [];
  for (var i = 0; i < array.length; i++) {
    var obj = {}
    obj["text"] = array[i];
    arrays.push(obj);
  }
  var json = JSON.stringify(arrays);
  return json;
}