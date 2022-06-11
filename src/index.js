/**
 * const let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

//varは上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

//var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

/**
 * letは上書き可能、再宣言不可能
 */

/**
 * constは上書き不可能、再宣言不可能
 */

/**
 * constで定義したオブジェクト、配列はプロパティの変更が可能
 * =>オブジェクトの定義は基本的にはconst
 */
// const val4 = {
//   name: "みき",
//   age: 28
// };

// console.log(val4);
//オブジェクトのプロパティを取得するときはドット
// val4.name = "miki";
// val4.address = "Shizuoka";

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "みき";
// const age = 28;
//「私の名前はみきです。年齢は28歳です。」

//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";

//テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// or
//件数を変数の中に入れて使うことも可能↓
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

//アロー関数
//関数宣言の後、いきなり引数が来て、矢印
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(1, 3));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "みき",
//   age: 28
// };

// const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;

//オブジェクトを分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["みき", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

//配列を分割代入（配列に定義されている順番に格納される）
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//コード読むために結構重要！

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello(); //引数が与えらていない時に、デフォルト値を返す

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1); //配列で表示
// console.log(...arr1); //配列の中身を順番に処理して数値として展開

// const sumFunk = (num1, num2) => console.log(num1 + num2);
// sumFunk(arr1[0], arr1[1]);
// sumFunk(...arr1); //配列の中身を順番に合計

//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入するときにスプレッド構文が使える
// //num1=1, num2=2, それ以降は何個あろうとarr3に代入
// console.log(arr2);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //スプレッド構文でarr4の中身を展開することで、arr4と全く同じ配列が作れる
// console.log(arr6);

// const arr7 = [...arr4, ...arr5]; //arr4の配列の中身と、arr5の配列の中身を展開した配列＝結合
// console.log(arr7);

//コピーだけなら＝でできるのでは？
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);
//スプレッド構文を使って配列をコピーしないと、値を代入したときに参照元のデータまで上書きされてしまう

/**mapやfilterの配列処理 */
const nameArr = ["田中", "山田", "じゃけぇ"]; //配列をループしてそれぞれの名前を処理したい時、これまではfor文だった
// for (let index = 0; index < nameArr.length; index++) {
//   //（第一引数に、何回目の処理かを管理するindex; 第二引数にループを終了させる条件; 第三引数に１回のループが終わるごとにindexを加算の処理）
//   console.log(nameArr[index]); //nameArrの長さ分だけ左の処理がループして、indexに値が入ることになる
// }

// const nameArr2 = nameArr.map((name) => {
//   //map()の中にアロー関数
//   //mapの引数にはnameArrの配列の中身の要素が入ってくる（仮名：name）
//   return name;
//   //順番に配列を処理して、そのままnameArr2に値を返して、新しい配列を作成
// });
// console.log(nameArr2);

//（配列ではなく）名前の順番にconsoleに出力
//for文と同じ処理を実現
// nameArr.map((name) => console.log(name));

//filter...配列に対してある条件に一致するものだけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   ///filterの後はmapと同じくアロー関数
//   //returnの中は条件式を書いて、条件に一致するものだけ返す
//   return num % 2 === 1; //奇数のものだけ返す
//   //num % 2 === 0 で偶数
// });
// console.log(newNumArr);

//配列の要素が何番目なのかを調べる
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

//mapは一つ目の引数に配列の中の要素が順番に入る。二つ目の引数には順番が0から入る
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

//☆実践　タスク：じゃけぇ以外にはさんをつけた新しい配列を作りたい
// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子（if...elseを描かなくて良くなる）
 */

//ある条件 ? 条件がtrueの時の処理が返される :　条件がfalseの時の処理が返される
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString()); //金額等３ケタ区切りでカンマ表示してくれる関数
// //toLocaleString()は文字列には使えない

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// // typeof...その変数の型が何か判定
// console.log(formattedNum)

//関数のreturn部分に三項演算子を使う
// const checkSum = (num1, num2) => {
//   //checkSUm...引数を受け取ってその値を合計したときに、数値が許容範囲ないか判定
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

// console.log(checkSum(50, 60));

/**
 * &&と||について（かつとまたはではない！）
 */

const num = null;
const fee = num || "金額未設定です";
console.log(fee);
//　||　の本来の意味は、左側がfalseなら右を返す（nullはJSではfalse判定）

const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
//　&&は、左側がtrueなら右を返す（nullはJSではfalse判定）
