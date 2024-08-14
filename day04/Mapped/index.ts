// Mapped
// 1. 코드 중복 제거
// 2. 유연성과 확장성 용이

// 1. Record
type Animal = "dog" | "cat" | "rat";
const zoo: Record<Animal, string> = {
  dog: "흰둥이",
  cat: "삼색이",
  rat: "쥐새끼",
};

// 2. Nullish[?]
type Dog = {
  name: string;
  breed: string;
  age?: number; // 값을 적지 않으면 null값으로 들어감
};

const kingyul: Dog = {
  name: "킹율",
  breed: "이탈리안 하우스",
};

// 3. Partial : 키 값을 안 넣어도 됨
type Cat = {
  name: string;
  breed: string;
  age: number;
};

const navi: Partial<Cat> = {
  name: "나비",
};
