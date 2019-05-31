import Component from './Component.js';

class HikingItem extends Component {
    renderTemplate() {
        const hike = this.props.hike;

        return /*html*/ `
            <li>
                <img src="${hike.imgMedium ? hike.imgMedium : './assets/no-image.jpg'}" alt="${hike.name}">
                <h2>${hike.name}</h2>
                <p>${hike.location}</p>
                <p>${hike.summary}</p>
                <p>Length: ${hike.length} miles</p>
            </li>
        `;
    }
}

export default HikingItem;