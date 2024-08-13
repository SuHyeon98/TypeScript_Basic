// manipulation operator : 조작 연산자

// 1. in 연산자
// object에 특정 속성 여부

// 2. keyof 연산자
// key name 가져오기
type Human = {
  name: string;
  age: number;
  race: string;
};

type Test = keyof Human; // name | age | race
const t1: Test = "race";

// 3. as 연산자 [타입 단언]
// 해당 type이 반드시 있다고 선언
const t2 = document.querySelector(".box") as Element;

// 2) 마찬가지로 type에도 함수지정 가능
type Person = {
  name: string;
  age: number;
  makeKimbob: () => void; // void 값이 비어있음
};

// 1) object 안에 함수 생성 가능
const t3: Person = {
  name: "gobong",
  age: 21,
  makeKimbob: () => {
    alert("김밥 만드는 중");
  },
};

// dog type[name, species, age, runtime, eatSnack]
type dog = {
  name: string;
  species: "chihuahua" | "maltese" | "Pomeranian";
  age: number;
  running: () => void;
  eatSnake: () => void;
};

const popi: dog = {
  name: "popi",
  species: "chihuahua",
  age: 2,
  running: () => {
    alert(`${name}가 달립니다`);
  },
  eatSnake: () => {
    alert(`${name}가 간식을 먹습니다`);
  },
};

// type을 설정해서 체계화 시키는 훈련이 필요함
type Fish = { swim: () => void };
type Mammal = { breathe: () => void };
type Fly = { fly: () => void };
type Reptiles = { lay: () => void };

const Dolphin: Mammal & Fish = {
  swim: () => alert("수영"),
  breathe: () => alert("새끼남"),
};

const croco: Reptiles & Fish = {
  lay: () => alert("악어 새끼남"),
  swim: () => alert("수영함"),
};
