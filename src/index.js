import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHello();

//スプレッド構文
const arr1 = [1, 2];
console.log(arr1);

console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

// Map,filterを使用した配列の処理

const nameArr = ["田中", "山田", "ジャイアン"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です。`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, index) => {
  console.log(`${index + 1}番目は${name}です。`);
});

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "ジャイアン") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

// 三項演算子
const num = "1300";

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています!!" : "共用範囲内です";
};
console.log(checkSum(50, 50));
