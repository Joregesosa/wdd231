export function TechnologyItem(icon) {
    const item = document.createElement('li');
    const svg = document.createElement('svg');
    const use = document.createElement('use');
    svg.classList.add('technology');
    use.setAttribute('href', `images/icons/${icon}.svg#${icon}`);
    svg.appendChild(use);
    item.appendChild(svg);
    return item;
}

export default TechnologyItem;