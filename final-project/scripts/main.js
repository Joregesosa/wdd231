import { TechnologyItem } from "./components/TechnologyItem.js"
import { icons_technologies } from "./data/icons-technologies.js"

const technologies_list = document.querySelector('#technologies-list');
 
icons_technologies.forEach(technology => {
    const element = TechnologyItem(technology.icon);
    technologies_list.innerHTML += element.outerHTML;
});
 