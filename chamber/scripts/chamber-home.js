import { getBusiness, getWeather } from './utils.js';
const bissnessDirectory = document.querySelector('#business_directory');
const toggleGrid = document.querySelector('#business_directory > button'); 
const currentWeather = document.querySelector('#current_weather');
const forecastWeather = document.querySelector('#weather_forecast');
toggleGrid.remove();
getWeather(currentWeather, forecastWeather);
getBusiness(bissnessDirectory, 3);