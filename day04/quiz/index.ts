/*
1. 피자 메뉴 정의
Dough : "오리지널" | "씬" | "치즈크러스트"
Cheese : "모짜렐라" | "고르곤졸라" | "체다"
Topping : "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망"
Sauce : "토마토" | "크림" | "핫소스"
*/

type Pizza<D, C, T, S> = {
  Dough: D;
  Cheese: C;
  Topping: T;
  Sauce: S[];
};

type Dough = "오리지널" | "씬" | "치즈크러스트";
type PizzaCheese = "모짜렐라" | "고르곤졸라" | "체다";
type Topping = "페퍼로니" | "베이컨" | "양파" | "올리브" | "피망";
type PizzaSauce = "토마토" | "크림" | "핫소스";

type ToppingType = {
  f: Topping;
  s: Topping;
  t: Topping;
};

const PizzaOne: Pizza<Dough, PizzaCheese, Partial<ToppingType>, PizzaSauce> = {
  Dough: "오리지널",
  Cheese: "체다",
  Topping: {
    f: "페퍼로니",
    s: "올리브",
    t: "베이컨",
  },
  Sauce: ["크림", "핫소스"],
};

/*
2. 아이스크림 메뉴 정의
Base : "바닐라" | "초콜릿" | "딸기"
Topping : "아몬드" | "초콜릿 칩" | "카라멜"
Syrup : "초콜릿" | "카라멜" | "딸기"
*/

type IceCream<B, T, S> = {
  Base: B[];
  Topping: T[];
  Syrup: S[];
};

type Base = "바닐라" | "초콜릿" | "딸기";
type IceCreamTopping = "아몬드" | "초콜릿 칩" | "카라멜";
type Syrup = "초콜릿" | "카라멜" | "딸기";

const MyIceCream: IceCream<Base, IceCreamTopping, Syrup> = {
  Base: ["딸기", "바닐라"],
  Topping: ["초콜릿 칩", "아몬드"],
  Syrup: ["딸기", "초콜릿"],
};

/*
Raman type
Noodle = "소면" | "증면" | "우동면"
Broth = "간장" | "된장" | "매운맛"
Topping = "계란" | "차슈" | "파" | "김치"
AddOn = "떡" | "치즈" | "만두" (선택적)
*/

type Raman<N, B, T, A> = {
  Noodle: N;
  Broth: B;
  Topping: T[];
  AddOn: A;
};

type Noodle = "소면" | "증면" | "우동면";
type Broth = "간장" | "된장" | "매운맛";
type RamanTopping = "계란" | "차슈" | "파" | "김치";
// type AddOn = "떡" | "치즈" | "만두";
type AddOn = {
  one: "떡";
  two: "치즈";
  three: "만두";
};

const MyRaman: Raman<Noodle, Broth, RamanTopping, Partial<AddOn>> = {
  Noodle: "소면",
  Broth: "된장",
  Topping: ["계란", "차슈"],
  AddOn: {},
};
