// 1. 타입 스크립트로 문자 배열을 매개변수로 주면 안에 있는 내용들을 모두 대문자화해서 돌려주는 함수 만들기
const makeStr = (x: string[]): string[] => x.map((v) => v.toUpperCase());

// 2. 커피 이름과 가격을 매개변수로 주면 커피 이름은 캐피탈라이즈(첫 글자만 대문자)하고
// 가격은 10% 할인되고 shot은 2로 자동으로 붙혀서 나오는 함수 만들기
const cafe = (
  name: string,
  price: number
): { name: string; price: number; shot: number } => {
  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    price: price * 0.9,
    shot: 2,
  };
};
// 3. 문자를 매개변수로 주면 불리언화해서 돌려주는 함수 만들기
const makeBool = (x: string): boolean => !!x;
