var hira = ["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を", "ん", "が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ", "だ", "ぢ", "づ", "で", "ど", "ば", "び", "ふ", "べ", "ぼ", "ぱ", "ぴ", "ぴ", "ぺ", "ぽ", "ぁ", "ぃ", "ぅ", "ぇ", "ぉ", "ゃ", "ゅ", "ょ", "っ", "ゔ"];
var kana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン", "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "フ", "ベ", "ボ", "パ", "ピ", "ピ", "ペ", "ポ", "ァ", "ィ", "ゥ", "ェ", "ォ", "ャ", "ュ", "ョ", "ッ", "ヴ"];
var hankana = ["ｱ", "ｲ", "ｳ", "ｴ", "ｵ", "ｶ", "ｷ", "ｸ", "ｹ", "ｺ", "ｻ", "ｼ", "ｽ", "ｾ", "ｿ", "ﾀ", "ﾁ", "ﾂ", "ﾃ", "ﾄ", "ﾅ", "ﾆ", "ﾇ", "ﾈ", "ﾉ", "ﾊ", "ﾋ", "ﾌ", "ﾍ", "ﾎ", "ﾏ", "ﾐ", "ﾑ", "ﾒ", "ﾓ", "ﾔ", "ﾕ", "ﾖ", "ﾗ", "ﾘ", "ﾙ", "ﾚ", "ﾛ", "ﾜ", "ｦ", "ﾝ", "ｶﾞ", "ｷﾞ", "ｸﾞ", "ｹﾞ", "ｺﾞ", "ｻﾞ", "ｼﾞ", "ｽﾞ", "ｾﾞ", "ｿﾞ", "ﾀﾞ", "ﾁﾞ", "ﾂﾞ", "ﾃﾞ", "ﾄﾞ", "ﾊﾞ", "ﾋﾞ", "ﾌﾞ", "ﾍﾞ", "ﾎﾞ", "ﾊﾟ", "ﾋﾟ", "ﾌﾟ", "ﾍﾟ", "ﾎﾟ", "ｧ", "ｨ", "ｩ", "ｪ", "ｫ", "ｬ", "ｭ", "ｮ", "ｯ", "ｳﾞ"];

function hira_kana(text){
  var input = hira;
  var output = kana;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function hira_hankana(text){
  var input = hira;
  var output = hankana;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function kana_hankana(text){
  var input = kana;
  var output = hankana;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function kana_hira(text){
  var input = kana;
  var output = hira;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function hankana_hira(text){
  var input = hankana;
  var output = hira;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function hankana_kana(text){
  var input = hankana;
  var output = kana;
  var result = hira_kana_hankana(text, input, output);
  return result;
}

function hira_kana_hankana(text, input, output) {
  var result = "";
  var array = [];
  for (var i = 0; i < text.length; i++) {
    if (text[i] == "ﾞ" || text[i] == "ﾟ") {
      array[array.length - 1] = (text[i - 1] + text[i]);
    } else {
      array.push(text[i]);
    }
  }
  for (var j = 0; j < array.length; j++) {
    var index = input.indexOf(array[j]);
    if (index == -1) {
      result = result + array[j];
    } else {
      result = result + output[index];
    }
  }
  return result;
}
