import dayjs from 'dayjs';

// Функция для генерации случайных чисел из диапазона
// Источник: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 0) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomArrayElement = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);

  return array[randomIndex];
};

const generateDate = () => {
  const maxDaysGap = 7;
  const daysGap = getRandomInteger(-maxDaysGap, maxDaysGap);

  return dayjs().add(daysGap, `day`).toDate();
};

const pointTypes = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check-in`,
  `Sightseeing`,
  `Restaurant`
];

const pointDestinations = [
  `Amsterdam`,
  `Chamonix`,
  `Geneva`,
  `Moscow`,
  `Paris`
];

const pointPrices = [20, 50, 120, 160, 180, 600];

const generatePointDescription = () => {
  const string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;

  const sentences = string.split(`. `);
  const numberOfOffers = getRandomInteger(1, 5);

  let destinationDescription = [];

  for (let i = 0; i < numberOfOffers; i++) {
    const indexOfSentences = getRandomInteger(0, sentences.length - 1);
    destinationDescription.push(sentences[indexOfSentences]);
  }

  return destinationDescription.join(`. `);
};

const generatePointOffers = () => {
  const allPointOffers = [
    {option: `Order Uber`, price: 20},
    {option: `Lunch in city`, price: 30},
    {option: `Book ticckets`, price: 40},
    {option: `Add breakfast`, price: 50},
    {option: `Add luggage`, price: 50},
    {option: `Switch to comfort`, price: 80},
    {option: `Rendt a car`, price: 200}
  ];

  const shuffledOffers = allPointOffers.sort(() => Math.round(Math.random() * 100) - 50);
  const shuffledQuantity = getRandomInteger(0, 5);

  return shuffledOffers.slice(0, shuffledQuantity);
};

export const generatePoint = () => {
  return {
    type: getRandomArrayElement(pointTypes),
    destination: getRandomArrayElement(pointDestinations),
    description: generatePointDescription(),
    offers: generatePointOffers(),
    price: getRandomArrayElement(pointPrices),
  };
};
