import {createTripInfoTemplate} from './view/trip-info';
import {createTripMenuTemplate} from './view/trip-menu';
import {createTripFiltersTemplate} from './view/trip-filters';
import {createTripEventsTemplate} from './view/trip-events';
import {createPointAddTemplate} from './view/point-add';
import {createPointEditTemplate} from './view/point-edit';
import {createPointTemplate} from './view/point';

const POINT_COUNT = 3;

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

render(tripEventsListElement, createPointEditTemplate(), Place.BEFOREEND);
render(tripEventsListElement, createPointAddTemplate(), Place.BEFOREEND);

const getPoints = (count) => {
  const points = [];

  for (let i = 0; i < count; i++) {
    points.push(createPointTemplate());
  }

  return points;
};

getPoints(POINT_COUNT).forEach((point) => {
  render(tripEventsListElement, point, Place.BEFOREEND);
});
