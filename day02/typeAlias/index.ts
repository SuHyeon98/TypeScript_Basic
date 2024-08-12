type Coffee1 = {
  name: string;
  price: number;
  hasShot: boolean;
};

const latte: Coffee1 = {
  name: "라떼",
  price: 2500,
  hasShot: true,
};

type coupangMenu = {
  link: string;
  name: string;
  starRate: number;
  review: number;
  price: number;
  discountPersent: number;
};

const birakZero: coupangMenu = {
  link: "https://www.coupang.com/",
  name: "팔도 비락식혜 제로",
  starRate: 5,
  review: 2235,
  price: 26400,
  discountPersent: 52,
};
