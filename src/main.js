import {createTripInfoTemplate} from './view/trip-info';
import {createTripMenuTemplate} from './view/trip-menu';
import {createTripFiltersTemplate} from './view/trip-filters';
import {createTripEventsTemplate} from './view/trip-events';
import {createPointAddTemplate} from './view/point-add';
import {createPointEditTemplate} from './view/point-edit';
import {createPointTemplate} from './view/point';

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector(`.trip-main`);

render(tripMainElement, createTripInfoTemplate(), `afterbegin`);

const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripControlsTitleElements = tripControlsElement.querySelectorAll(`h2`);

render(tripControlsTitleElements[0], createTripMenuTemplate(), `afterend`);
render(tripControlsTitleElements[1], createTripFiltersTemplate(), `afterend`);

const tripEventsElement = document.querySelector(`.trip-events`);

render(tripEventsElement, createTripEventsTemplate(), `beforeend`);

const tripEventsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(tripEventsListElement, createPointEditTemplate(), `beforeend`);
render(tripEventsListElement, createPointAddTemplate(), `beforeend`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripEventsListElement, createPointTemplate(), `beforeend`);
}
