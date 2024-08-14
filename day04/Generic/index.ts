// generic -> generalize : 일반화사다
type My<A, B> = {
  first: A;
  second: B;
};

const t4: My<number, string> = {
  first: 1,
  second: "2",
};

type McMoringMain = "핫케익" | "맥머핀" | "브랙퍼스트";
type McMoringSide = "해쉬브라운" | "에그";
type McMoringDrink = "드립커피" | "탄산";

type NormalMain = "상하이" | "빅맥" | "스낵랩";
type NormalSide = "감자튀김" | "맥너겟";
type NormalDrink = "커피" | "탄산";

type Mcdonald<
  M extends McMoringMain | NormalMain,
  S extends McMoringSide | NormalSide,
  D extends McMoringDrink | NormalDrink
> = {
  main: M;
  side: S;
  drink: D;
};

const moring: Mcdonald<McMoringMain, McMoringSide, McMoringDrink> = {
  main: "맥머핀",
  side: "해쉬브라운",
  drink: "드립커피",
};

const normal: Mcdonald<NormalMain, NormalSide, NormalDrink> = {
  main: "상하이",
  side: "감자튀김",
  drink: "탄산",
};

type SubWay<
  M extends SubWayMorningSandwich,
  B extends Bread,
  C extends Cheese,
  V extends Veggies,
  S
> = {
  main: M;
  bread: B;
  cheese: C;
  veggies: V[];
  sauce: S;
};

type SubWayMorningSandwich =
  | "햄,에그&치즈"
  | "웨스턴,에그&치즈"
  | "베이컨,에그&치즈";
type Bread = "화이트" | "플랫브레드" | "허니오트";
type Cheese = "아메리칸" | "슈레드" | "모차렐라";
type Veggies = "피클" | "올리브" | "할라피뇨";
type Sauce =
  | "마요네즈"
  | "스위트어니언"
  | "허니머스타드"
  | "핫칠리"
  | "머스타드";

type SauceType = {
  frist: Sauce;
  second: Sauce;
};

const morningWay: SubWay<
  SubWayMorningSandwich,
  Bread,
  Cheese,
  Veggies,
  Partial<SauceType>
> = {
  main: "햄,에그&치즈",
  bread: "플랫브레드",
  cheese: "모차렐라",
  veggies: ["올리브", "할라피뇨"],
  sauce: {
    frist: "스위트어니언",
    second: "허니머스타드",
  },
};
