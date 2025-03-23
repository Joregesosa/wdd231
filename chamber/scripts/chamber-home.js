import { getBusiness, getWeather } from './utils.js';

const bissnessDirectory = document.querySelector('#business_directory');
const currentWeather = document.querySelector('#current_weather');
const forecastWeather = document.querySelector('#weather_forecast'); 

getWeather(currentWeather, forecastWeather);
getBusiness(bissnessDirectory, 3);