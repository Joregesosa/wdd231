export function dialogContent({ name, description, owner, language }) {
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