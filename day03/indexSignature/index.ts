type MegaCoffee = {
  [key: string]: string;
};

type CoffeeMenu = "name" | "price";
type CoffeeIngredient = "kcal" | "shot" | "size";
type CoffeeType = CoffeeMenu | CoffeeIngredient;

type VentiCoffee = {
  [key in CoffeeType]: string;
};

const menu: VentiCoffee = {
  name: "아아",
  price: "15000",
  kcal: "250",
  shot: "2",
  size: "small",
};

// 자동차 격채 변수
// model, year, engine, price, color
type CarRecode = "model" | "price";
type CarInformation = "engine" | "year" | "color";
type CarAttribute = CarRecode | CarInformation;

type Car = {
  [key in CarAttribute]: string;
};

const morning: Car = {
  model: "morning",
  year: "2020",
  color: "white",
  price: "1200",
  engine: "hybrid",
};
