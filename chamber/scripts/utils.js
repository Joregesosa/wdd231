
/**
 * Fetches business data from a JSON file and dynamically generates business cards
 * to be appended to the business directory section of the webpage.
 * 
 * @async
 * @function getBusiness
 * @returns {Promise<void>} Resolves when the business cards are successfully appended.
 * @throws {Error} Logs an error to the console if the fetch or JSON parsing fails.
 */
export async function getBusiness(nodeElement, limit) {
    try {
        const data = await fetchData('data/members.json');
        let content = "";
        const template = document.createElement('template');
        const members = limit ? shuffle(data).slice(0, limit) : data;
        members.forEach(business => {
            const card = CardTemplate(business);
            content += card;
        });

        template.innerHTML = content;
        const cards = template.content.cloneNode(true);
        nodeElement.appendChild(cards);
    } catch (error) {
        console.log(error);
    }

}
/**
 * @description Fetches weather data from OpenWeatherMap API and updates the DOM with current weather and forecast.
 * @param {HTMLElement} currentNode - The DOM element to display the current weather.
 * @param {HTMLElement} forecastNode - The DOM element to display the weather forecast.
 * @returns {Promise<void>} Resolves when the weather data is successfully fetched and displayed.
 * @throws {Error} Logs an error to the console if the fetch or JSON parsing fails.
 */
export async function getWeather(currentNode, forecastNode) {
    try {
        const currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=3bc4c9f45cf04e7a74ac17d51146bf82&units=imperial";
        const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3bc4c9f45cf04e7a74ac17d51146bf82&units=imperial";

        const current = await fetchData(currentUrl);
        const forecast = await fetchData(forecastUrl);

        forecastNode.innerHTML = forecastWeatherTemplate(forecast.list);
        currentNode.innerHTML = currentWeatherTemplate(current);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Generates an HTML template string for a business card.
 * 
 * @function CardTemplate
 * @param {Object} business - The business object containing details for the card.
 * @param {string} business.name - The name of the business.
 * @param {string} business.tag - A tagline or description of the business.
 * @param {string} business.phone - The phone number of the business.
 * @param {string} business.website - The website URL of the business.
 * @param {string} business.email - The email address of the business.
 * @param {string} business.image - The URL of the business's logo or image.
 * @returns {string} An HTML string representing the business card.
 */
export function CardTemplate({ name, tag, phone, website, email, image }) {
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

/**
 * Generates an HTML template string for the current weather.
 * 
 * @function currentWeatherTemplate
 * @param {Object} current - The current weather object containing details for the template.
 * @param {Object} current.main - The main weather data object.
 * @param {Object} current.weather - The weather data object.
 * @param {Object} current.sys - The system data object.
 * @returns {string} An HTML string representing the current weather.
 */
export function currentWeatherTemplate({ main, weather, sys }) {
    const { temp, temp_max, temp_min, humidity } = main;
    const [{ description, icon }] = weather;
    const { sunrise, sunset } = sys;
    return `
        <h2>Current Weather</h2>
        <figure>
            <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${description}" width="120">
        </figure>
        <ul>
            <li><b>${temp}</b>&deg;F</li>
            <li>${description.toUpperCase()}</li>
            <li>High: ${temp_max}&deg;</li>
            <li>Low: ${temp_min}&deg;</li>
            <li>Hymidity: ${humidity}%</li>
            <li>Sunrise: ${getDateTime(sunrise)}</li>
            <li>Sunset: ${getDateTime(sunset)}</li>
        </ul>
     `
}

/**
 * Generates an HTML template string for the weather forecast.
 * 
 * @function forecastWeatherTemplate
 * @param {Array} forecast - The forecast array containing weather data.
 * @returns {string} An HTML string representing the weather forecast.
 */
export function forecastWeatherTemplate(forecast) {
    const days = forecast.filter((_, index) => index % 8 === 0).slice(0, 4);
    const forecastItems = days.map(day => {
        const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
        const date = getDateTime(day.dt, 'day') === currentDay ? 'Today' : getDateTime(day.dt, 'day');
        return `<li> ${date} - <strong>${day.main.temp}</strong>&deg;F</li>`
    }).join('');
    return forecastItems;
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * 
 * @function shuffle
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;

}

/**
 * Fetches data from a given URL and returns the parsed JSON response.
 * 
 * @async
 * @function fetchData
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} The parsed JSON response.
 * @throws {Error} Logs an error to the console if the fetch or JSON parsing fails.
 */
export async function fetchData(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        throw error;
    }

}

/**
 * Converts an epoch timestamp to a human-readable time or day.
 * 
 * @function getDateTime
 * @param {number} epoch - The epoch timestamp to convert.
 * @param {string} type - The type of conversion to perform (time or day).
 * @returns {string} The human-readable time or day.
 */
export function getDateTime(epoch, type = 'time') {
    const date = new Date(epoch * 1000);

    if (type === 'time') {
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });;
    } else if (type === 'day') {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }

}