/*
CardHeight  : xs, sm, md, lg, xl 
CardWidth  : xs, sm, md, lg, xl 
CardBG : primary, secondary, dark
CardChild : top, mid, buttom 글이 써졌을 때 위치
CardClick : 함수(alert)
*/
// applyCard : 함수 만들기

type CardHeight = "xs" | "sm" | "md" | "lg" | "xl";
type CardWidth = "xs" | "sm" | "md" | "lg" | "xl";
type CardBG = "primary" | "secondary" | "dark";
type CardChild = "top" | "middle" | "buttom";
type CardClick = { click: () => void };
type CardPosition = "relative" | "absolute";

type CardStyle = {
  width: CardWidth;
  height: CardHeight;
  backgroundColor: CardBG;
  CardClick: CardClick;
  CardPosition: CardPosition;
};

const Position = {
  relative: "relative",
  absolute: "absolute",
};

const CardSize = {
  xs: { width: "30px", height: "30px" },
  sm: { width: "50px", height: "50px" },
  md: { width: "100px", height: "100px" },
  lg: { width: "150px", height: "150px" },
  xl: { width: "200px", height: "200px" },
};

const Bg = {
  primary: "blue",
  secondary: "red",
  dark: "dark",
};

const Child = {
  top: { top: "0px" },
  middle: { top: "50px", left: "50px" },
  buttom: { buttom: "0px" },
};

const applyCard = (div: HTMLDivElement, style: CardStyle) => {
  div.style.backgroundColor = Bg[style.backgroundColor];
  div.style.width = CardSize[style.width].width;
  div.style.height = CardSize[style.height].height;
  div.style.position = Position[style.CardPosition];
};

const myDivStyle: CardStyle = {
  width: "sm",
  height: "xs",
  backgroundColor: "primary",
  CardPosition: "relative",
  click: () => alert("click"),
};

const a = document.createElement("div");
applyCard(a);
