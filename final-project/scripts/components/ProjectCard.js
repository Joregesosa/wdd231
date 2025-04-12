import { dialogContent } from "./ProjectDetails.js";

export function ProjectCard(project) {
    const { name, description, svn_url, homepage } = project;
    const projectItem = document.createElement('div');
    projectItem.classList.add('project_item');
    projectItem.innerHTML = `
        <h3 class="project_title">${name}</h3>
        <p class="project_description">${description}</p>
        <div class="project_links">
            <a href="${svn_url}" target="_blank" class="project_link">View Source</a>
            ${homepage ? `<a href="${homepage}" target="_blank" class="project_link">Live Demo</a>` : ''}
        </div>
    `;

    projectItem.addEventListener('click', () => {
        const dialog = document.querySelector('#project-dialog');
        dialog.innerHTML = dialogContent(project);
        dialog.showModal();
    });

    return projectItem;
}


export default ProjectCard;

