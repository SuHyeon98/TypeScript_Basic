// Interface : 규약
interface Coffee {
  name: string;
  price: number;
  hasShot: boolean;
}

const name1: string = "이름";
const americano: Coffee = {
  name: "아메리카노",
  price: 2500,
  hasShot: true,
};
