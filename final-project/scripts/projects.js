import { ProjectCard } from "./components/ProjectCard.js"
const projectList = document.querySelector('.project_list'); 

async function fetchData() {
    const response = await fetch('https://api.github.com/users/joregesosa/repos');
    const data = await response.json();
    loadCards(data);
}

function loadCards(array) {
    projectList.innerHTML = '';
    array.filter((item) => item.description).forEach((project, index) => { 
        const card = ProjectCard(project);
        projectList.appendChild(card);
    });
}

fetchData(); 

