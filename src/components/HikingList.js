import Component from './Component.js';
import HikingItem from './HikingItem.js';

class HikingList extends Component {
    render() {
        const dom = this.renderDOM();
        const hikes = this.props.hikes;

        hikes.forEach(hike => {
            const hikingItem = new HikingItem({ hike });
            const hikingItemDOM = hikingItem.render();
            dom.appendChild(hikingItemDOM);
        });
        
        return dom;
    }
    renderTemplate() {
        const hikes = this.props.hikes;
        if(hikes.length === 0) {
            return /*html*/ `
            <p class="no-results">No results, please try another search.</p>
        `;
        }
        return /*html*/ `
            <ul>
            </ul>
        `;
    }
}

export default HikingList;