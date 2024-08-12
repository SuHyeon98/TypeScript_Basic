// BoxStyle type 만들기
// width, height backgroundColor[5개만] , padding, boder, borderRadius
type BoxSize = "small" | "medium" | "large";
type BoxCol = "red" | "blue" | "green" | "yellow" | "gray";
type BoxBR = "0px" | "4px" | "10px" | "9999px";
type BoxBorder = "1px solid black" | "1px solid gray";
type BoxStyle = {
  size: BoxSize;
  backgroundColor: BoxCol;
  borderRadius: BoxBR;
  border: BoxBorder;
};

const myBoxStyle: BoxStyle = {
  size: "large",
  backgroundColor: "blue",
  border: "1px solid black",
  borderRadius: "9999px",
};

type BoxSizeMap = {
  small: { width: "50px"; height: "50px" };
  medium: { width: "100px"; height: "100px" };
  large: { width: "150px"; height: "150px" };
};

const boxSize: BoxSizeMap = {
  small: { width: "50px", height: "50px" },
  medium: { width: "100px", height: "100px" },
  large: { width: "150px", height: "150px" },
};

// applyStyle 이라는 함수 만들기
// 매개변수는 element, style 넣으면 element 에 style 이 적용되는 로직 만들기
const applyStyle = (tag: HTMLElement, css: BoxStyle) => {
    tag.style.width = boxSize[css.size].width
    tag.style.height = boxSize[css.size].height
    tag.style.backgroundColor = 
};

// applyStyle("box","BoxStyle")

// ts를 js로 바꾸고 html에 넣어서 실행
