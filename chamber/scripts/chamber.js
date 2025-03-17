const bissnessDirectory = document.querySelector('#business_directory');
const toggleGrid = document.querySelector('#business_directory > button');
const buttonIcon = document.querySelector('#business_directory > button > img');
console.log(toggleGrid);

async function getBusiness() {
    try {
        const res = await fetch('data/members.json');
        const data = await res.json();
        let content =  "";
        const template = document.createElement('template');

        data.forEach(business => {
            const card = CardTemplate(business);
            content += card;
        });

        template.innerHTML = content;
        const cards = template.content.cloneNode(true);
        bissnessDirectory.appendChild(cards);
    } catch (error) {
        console.log(error);
    }

}

function CardTemplate({ name, tag, phone, website, email, image }) {
    const list = document.querySelector('.list');
    const websiteText = list ? 'Website' : website;
    return `
        <div class="business_card">
            <h3>${name}</h3>
            <p>${tag}</p>
            <hr>
            <div class="card__content">
                <img src="${image}" alt="${tag} logo" >
                <ul class="content__list">
                    <li><a href=""><strong>Email:</strong>${email}</a></li>
                    <li><a href=""><strong>Phone:</strong>${phone}</a></li>
                    <li><a href="${website}" target="_blank"><strong>Website:</strong>${websiteText}</a></li>
                </ul>
            </div>
        </div>
     `
}

toggleGrid.addEventListener('click', () => {
    bissnessDirectory.classList.toggle('list');
    bissnessDirectory.classList.toggle('grid');
    buttonIcon.src = bissnessDirectory.classList.contains('list') ? 'images/grid.svg' : 'images/list.svg';
    buttonIcon.alt = bissnessDirectory.classList.contains('list') ? 'grid icon' : 'list icon';
});

getBusiness();