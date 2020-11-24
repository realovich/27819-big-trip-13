import {createTripInfoTemplate} from './view/trip-info';
import {createTripMenuTemplate} from './view/trip-menu';
import {createTripFiltersTemplate} from './view/trip-filters';
import {createTripEventsTemplate} from './view/trip-events';
import {createPointEditTemplate} from './view/point-edit';
import {createPointTemplate} from './view/point';
import {generatePoint} from './mock/point';

const POINT_COUNT = 4;

const points = new Array(POINT_COUNT).fill().map(generatePoint);

const Place = {
  BEFOREBEGIN: `beforebegin`,
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `afterend`
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);

render(tripMainElement, createTripInfoTemplate(), Place.AFTERBEGIN);

const tripMenuElement = tripMainElement.querySelector(`.trip-controls__menu`);
const tripFilterElement = tripMainElement.querySelector(`.trip-controls__filter`);

render(tripMenuElement, createTripMenuTemplate(), Place.BEFOREEND);
render(tripFilterElement, createTripFiltersTemplate(), Place.BEFOREEND);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createTripEventsTemplate(), Place.BEFOREEND);

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createPointEditTemplate(points[0]), Place.BEFOREEND);

for (let i = 1; i < POINT_COUNT; i++) {
  render(tripEventsListElement, createPointTemplate(points[i]), Place.BEFOREEND);
}
