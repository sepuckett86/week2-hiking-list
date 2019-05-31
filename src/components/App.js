import Component from './Component.js';
import Header from './Header.js';
import Search from './Search.js';
import HikingList from './HikingList.js';

import api from '../services/api.js';
import hashStorage from '../hash-storage.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header().render();
        const search = new Search().render();
        const hikingList = new HikingList({ hikes: [] });
        const hikingListDOM = hikingList.render();

        dom.prepend(header);
        main.appendChild(search);
        main.appendChild(hikingListDOM);

        window.addEventListener('hashchange', () => {
            const searchString = hashStorage.get().search;

            api.getHikes().then(hikes => {
                console.log(hikes.trails);
                const filtered = hikes.trails.filter(trail => {
                    return trail.name.includes(searchString);
                });
                hikingList.update({ hikes: filtered });
            });
        });
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;