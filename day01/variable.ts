// 1. type annotation(타입 주석)
const coffee1: string = '1';

// 2. type inference(타입 추론)
const coffee = 'americano';

const coffeeList: string[] = ['americano', 'latte', 'chocoLatte'];

// number 배열 변수 만들기
const num: number[] = [1, 2, 3, 4, 5];
const numList: number[] = Array(10).fill(10);

// boolean 배열 변수 만들기 그리고 js화 시키기
const bool: boolean[] = [true, false];

const boolList: boolean[] = [true, !!'!23', !1];

const test = (arr: string[]) => {
  arr.forEach((x) => {
    x.toUpperCase();
  });
};

// name, position, num
const obj: object = { name: 'kim', position: 'middle', num: 7 };
const obj1: { name: string; position: string; num: number } = {
  name: 'shinji',
  position: 'middle',
  num: 7,
};
