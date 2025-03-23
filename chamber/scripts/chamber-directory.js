import { getBusiness } from './utils.js';
const bissnessDirectory = document.querySelector('#business_directory');
const toggleGrid = document.querySelector('#business_directory > button');
const buttonIcon = document.querySelector('#business_directory > button > img');
 



toggleGrid.addEventListener('click', () => {
    bissnessDirectory.classList.toggle('list');
    bissnessDirectory.classList.toggle('grid');
    buttonIcon.src = bissnessDirectory.classList.contains('list') ? 'images/grid.svg' : 'images/list.svg';
    buttonIcon.alt = bissnessDirectory.classList.contains('list') ? 'grid icon' : 'list icon';
});

getBusiness(bissnessDirectory);