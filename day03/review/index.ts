// button style 적용하기

/*
ButtonSize type : small, medium, large 중 하나의 값
ButtonColor type : blue, green, red, purple
ButtonPadding type : 5px, 10px, 15px 
ButtonBorder type : 2px solid black, 2px solid white 
ButtonStyle type : size, color, padding, border 
*/

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "blue" | "green" | "red" | "purple";
type ButtonPadding = "5px" | "10px" | "15px";
type ButtonBorder = "2px solid black" | "2px solid white";

type ButtonStyle = {
  size: ButtonSize;
  color: ButtonColor;
  padding: ButtonPadding;
  border: ButtonBorder;
};

const BtnSize = {
  small: { width: "10px", height: "10px" },
  medium: { width: "15px", height: "15px" },
  large: { width: "20px", height: "20px" },
};

const applyButtonStyle = (btn: HTMLButtonElement, style: ButtonStyle) => {
  btn.style.color = style.color;
  btn.style.padding = style.padding;
  btn.style.border = style.border;
  btn.style.width = BtnSize[style.size].width;
  btn.style.height = BtnSize[style.size].height;
};

const myBtnStyle: ButtonStyle = {
  size: "small",
  color: "purple",
  padding: "5px",
  border: "2px solid white",
};

const btn = document.createElement("button");
applyButtonStyle(btn, myBtnStyle);
document.body.appendChild(btn);
