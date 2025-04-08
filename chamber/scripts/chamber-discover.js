import { fetchData } from "./utils.js";
const card_wrapper = document.querySelector("#card_wrapper");
const welcomeMessage = document.querySelector("#welcome_back > p");
const closeWelcomeMessage = document.querySelector("#welcome_back > button");

async function getPlaces() {
    const data = await fetchData("data/places.json");

    const templates = data.map(placeCard).join("");
    card_wrapper.innerHTML = templates;

}


function placeCard({ name, address, description, image }) {
    return ` 
        <div class="card">
            <figure>
                <img src="${image}" alt="${name}" width="300">
            </figure>
            <h2>${name}</h2>
            <address>
                ${address}
            </address>
            <p>${description}</p>
            <a href="">Learn More</a>
        </div>
    `;

}


function displayWelcomeMessage() {
    const msToDays = 86400000;
    const lastVisit = localStorage.getItem("lastVisit");
    const currentDate = Date.now();
    const diff = (currentDate - lastVisit) / msToDays;

    if (!lastVisit) {
        welcomeMessage.innerHTML = "Welcome! Let us know if you have any questions.";
        return;
    }


    if (diff < 1) {
        welcomeMessage.textContent = "Back so soon! Awesome!";
    } else {
        const dayText = diff === 1 ? "day" : "days";
        welcomeMessage.textContent = `You last visited ${diff} ${dayText} ago.`;
    }


    localStorage.setItem("lastVisit", currentDate.toString());
}

closeWelcomeMessage.addEventListener("click", () => {
    welcomeMessage.parentElement.remove();
});


displayWelcomeMessage();

await getPlaces();