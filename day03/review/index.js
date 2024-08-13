// button style 적용하기
var BtnSize = {
  small: { width: "10px", height: "10px" },
  medium: { width: "15px", height: "15px" },
  large: { width: "20px", height: "20px" },
};
var applyButtonStyle = function (tag, css) {
  tag.style.color = css.color;
  tag.style.padding = css.padding;
  tag.style.border = css.border;
  tag.style.width = BtnSize[css.size].width;
  tag.style.height = BtnSize[css.size].height;
};
var myBtnStyle = {
  size: "small",
  color: "purple",
  padding: "5px",
  border: "2px solid white",
};
var btn = document.createElement("button");
applyButtonStyle(btn, myBtnStyle);
document.body.appendChild(btn);
