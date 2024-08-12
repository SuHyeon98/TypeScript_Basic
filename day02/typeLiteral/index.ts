type Movie = {
  name: string;
  grade: "12" | "15" | "18" | "ALL"; // typeLiteral : intersection 활용
};
const pliot: Movie = {
  name: "파일럿",
  grade: "15",
};
