/* eslint-disable import/extensions */

import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet/dist/leaflet.css';
import './script/style/main.css';

import './script/components/header/case-covid-wrapper';
import './script/components/main/province/province-wrapper-case';
import './script/components/main/about-covid/about-wrapper';

import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
