import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    showMoreStyles('.button-styles', '#styles .row');
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading'/* , '.accordion-block' */);
    burger('.burger-menu', '.burger');

});