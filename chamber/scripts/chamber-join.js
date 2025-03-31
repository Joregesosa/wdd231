import { fetchData } from './utils.js';
const membershipDialog = document.querySelector('#dialog');
const membershipLevels = document.querySelector('#membership-levels');
const applicationForm = document.querySelector('.application-form > form');

function membershipCard(membership) {
    const { id, name } = membership;
    return `
        <li data-membership-id="${id}">
            <h3>${name}</h3>
            <button data-membership='${JSON.stringify(membership)}'>Learn More</button>
        </li>
    `;
}

async function getMemberships() {
    const memberships = await fetchData('data/memberships.json');
    const membershipList = memberships.map(membershipCard).join('');
    membershipLevels.innerHTML = membershipList;
}

membershipLevels.addEventListener('click', (e) => {
    const { target } = e;
    const { tagName } = target;

    if (tagName === 'BUTTON') {
        const membership = JSON.parse(target.dataset.membership);
        membershipDialog.innerHTML = modalContent(membership);
        membershipDialog.showModal();
    }

})

function modalContent({ description, name, shortDescription, fee, benefits }) {
    return `
        <article>
            <header>
                <h4>${name}</h4>
                <p><strong>${shortDescription}</strong></p>
            </header> 
            <section>
                <h5>Benefits</h5>
                <ul>
                    <li>Annual Fee: $${fee}</li>
                    ${benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
                <p>${description}</p>
            </section>
            <form method="dialog">
                <button id="closeDialog">Close</button>
            </form>
        </article>
    `
}

applicationForm.addEventListener('submit', () => { 
    applicationForm.elements.timestamp.value = Date.now(); 
})

getMemberships();