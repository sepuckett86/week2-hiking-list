import Component from './Component.js';
import Header from './Header.js';
import Search from './Search.js';
import HikingList from './HikingList.js';

import api from '../services/api.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header().render();
        const search = new Search().render();
        const hikingList = new HikingList({ hikes: [] }).render();

        dom.prepend(header);
        main.appendChild(search);
        main.appendChild(hikingList);

        window.addEventListener('hashchange', () => {
            api.getHikes().then(hikes => {
                console.log(hikes.trails);
                hikingList.update({ hikes: hikes.trails });
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