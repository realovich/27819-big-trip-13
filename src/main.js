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

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsTitleElements = tripControlsElement.querySelectorAll(`h2`);

render(tripControlsTitleElements[0], createTripMenuTemplate(), Place.AFTEREND);
render(tripControlsTitleElements[1], createTripFiltersTemplate(), Place.AFTEREND);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createTripEventsTemplate(), Place.BEFOREEND);

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createPointEditTemplate(), Place.BEFOREEND);
render(tripEventsListElement, createPointAddTemplate(), Place.BEFOREEND);

const points = [];

for (let i = 0; i < POINT_COUNT; i++) {
  points.push(createPointTemplate());
}

points.forEach((point) => {
  render(tripEventsListElement, point, Place.BEFOREEND);
});
