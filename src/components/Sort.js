import Component from './Component.js';

import hashStorage from '../hash-storage.js';

class Sort extends Component {
    render() {
        const dom = this.renderDOM();
        const menu = dom.querySelector('select');

        menu.addEventListener('input', () => {
            hashStorage.set({ sort: menu.value });
        });

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div class="center">
                Sort By:
                <select>
                    <option disabled selected>Sort By</option>
                    <option value="distance">Distance from Portland</option>
                    <option value="quality">Quality</option>
                </select>
            </div>
        `;
    }
}

export default Sort;