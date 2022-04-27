import faker from "@faker-js/faker";

const {
  datatype: { number },
  lorem: { sentence, sentences },
  internet: { avatar },
} = faker;

const productFactory = (override) => {
  return {
    id: number(),
    title: sentence(),
    price: number(),
    description: sentences(3),
    category: sentence(),
    image: avatar(),
    rating: {
      rate: number({ min: 0, max: 5, precision: 0.1 }),
      count: number(),
    },
    ...override,
  };
};

export { productFactory };
