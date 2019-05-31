import Component from './Component.js';
import Header from './Header.js';
import Search from './Search.js';
import HikingList from './HikingList.js';
import Loading from './Loading.js';
import Sort from './Sort.js';

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

        const loading = new Loading({ done: false });
        const loadingDOM = loading.render();

        const sort = new Sort();
        const sortDOM = sort.render();

        dom.prepend(header);
        main.appendChild(loadingDOM);
        main.appendChild(search);
        main.appendChild(sortDOM);
        main.appendChild(hikingListDOM);

        api.getHikes().then(hikes => {
            loading.update({ done: false });
            this.state.allHikes = hikes.trails;
            hikingList.update({ hikes: this.state.allHikes });
            loading.update({ done: true });
        });

        window.addEventListener('hashchange', () => {
            loading.update({ done: false });
            const filter = hashStorage.get();
            // retrive new data from api
            if(filter.sort) {
                api.getHikes({ sort: filter.sort }).then(hikes => {
                    loading.update({ done: false });
                    // Store data in state
                    this.state.allHikes = hikes.trails;
                    // Update Hiking List
                    hikingList.update({ hikes: this.state.allHikes });
                    loading.update({ done: true });
                }).then(() => {
                    const filtered = filterHikes(filter, this.state.allHikes);
                    hikingList.update({ hikes: filtered });
                    loading.update({ done: true });
                });
            } else {
                // filter data already retrieved
                const filtered = filterHikes(filter, this.state.allHikes);
                hikingList.update({ hikes: filtered });
                loading.update({ done: true });
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