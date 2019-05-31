import Component from './Component.js';
import Header from './Header.js';
import Search from './Search.js';
import HikingList from './HikingList.js';

import api from '../services/api.js';
import hashStorage from '../hash-storage.js';
import filterHikes from '../filter-hikes.js';

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

        this.state.allHikes = [];

        window.addEventListener('hashchange', () => {
            const filter = hashStorage.get();

            // Get data from API if no data
            if(this.state.allHikes.length === 0) {
                api.getHikes().then(hikes => {
                    // Store data in state
                    this.state.allHikes = hikes.trails;
                });
            }
            
            // Update list based on filter
            if(filter.search === '') {
                hikingList.update({ hikes: this.state.allHikes });
            } else {
                const filtered = filterHikes(filter, this.state.allHikes);
                hikingList.update({ hikes: filtered });
            }
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