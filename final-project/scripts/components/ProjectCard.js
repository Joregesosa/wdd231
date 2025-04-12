
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

function dialogContent({ name, description, owner, language }) {
    const { avatar_url, login } = owner;
    return `
        <form method="dialog" class="dialog_form">
            <h3 class="dialog_title">${name}</h3>
            <figure class="dialog_user">
                <img src="${avatar_url}" alt="User Avatar"
                    class="dialog_user_avatar">
                <figcaption class="dialog_user_name">${login}</figcaption>
            </figure>
            <hr>
            <p class="dialog_description">
                ${description ? description : 'No description available.'}
            </p>
            <p class="dialog_technologies">
                <strong>Technologies used:</strong>
              ${language ? language : 'Not specified'}
            </p>
            <button class="button" id="close-dialog">Close</button>
        </form>
    `
}
export default ProjectCard;

