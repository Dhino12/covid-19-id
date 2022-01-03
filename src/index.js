/* eslint-disable import/extensions */

import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'leaflet/dist/leaflet.css';
import './script/style/main.css';

import './script/components/header/NavbarList';
import './script/components/header/HeaderContent';
import './script/components/header/WaveHeader';
import './script/components/header/case-covid-wrapper';
import './script/components/header/case-covid-list';

import './script/components/main/province/province-title';
import './script/components/main/province/province-case-list';
import './script/components/main/province/province-logo';
import './script/components/main/province/province-list';

import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
