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
type CardClick = () => void;

type CardStyle = {
  width: CardWidth;
  height: CardHeight;
  backgroundColor: CardBG;
  display: "flex";
  flexDirection: "column";
  justifyContent: CardChild;
  click: CardClick;
};

type SizeType = {
  [key in CardHeight & CardWidth]: string;
};

const sizeMap: SizeType = {
  xs: "50px",
  sm: "100px",
  md: "150px",
  lg: "200px",
  xl: "250px",
};

type Pallete = "#2980b9" | "#3498db" | "#34495e";
type BgType = {
  [key in CardBG]: Pallete;
};

const colorMap: BgType = {
  primary: "#2980b9",
  secondary: "#3498db",
  dark: "#34495e",
};

type ChildType = {
  [key in CardChild]: string;
};

const childMap: ChildType = {
  top: "top",
  middle: "middle",
  buttom: "buttom",
};

const applyCard = (div: HTMLDivElement, style: CardStyle) => {
  div.style.display = style.display;
  div.style.flexDirection = style.flexDirection;
  div.style.justifyContent = childMap[style.justifyContent];
  div.style.backgroundColor = colorMap[style.backgroundColor];
  div.style.width = sizeMap[style.width];
  div.style.height = sizeMap[style.height];
};

const myDivStyle: CardStyle = {
  width: "sm",
  height: "xs",
  display: "flex",
  flexDirection: "column",
  justifyContent: "buttom",
  backgroundColor: "primary",
  click: () => alert("card click"),
};

const yourDivStyle: CardStyle = {
  width: "sm",
  height: "xl",
  display: "flex",
  flexDirection: "column",
  justifyContent: "middle",
  backgroundColor: "secondary",
  click: () => alert("card click"),
};

const card = document.createElement("div");
card.innerText = "card";
const card1 = document.createElement("div");
card1.innerText = "card";

applyCard(card, myDivStyle);
applyCard(card1, yourDivStyle);
document.body.appendChild(card);
document.body.appendChild(card1);
