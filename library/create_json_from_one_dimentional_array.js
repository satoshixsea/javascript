/************************************
Google Apps Script ID
1UKwKsgAPnybT8wSLK9iWb-IwqZ6kkubVq__WvkZKGx1TNTrA7WwNAUYP

use case
function create_json() {
  var text = "あいうえお\nかきくけこ";
  var array = text.split("\n");
  var json = create_json_from_one_dimentional_array(array);
  console.log(json);
}
************************************/

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
