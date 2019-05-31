import Component from './Component.js';
import Header from './Header.js';
import Search from './Search.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const search = new Search();
        const searchDOM = search.render();

        dom.prepend(headerDOM);
        main.appendChild(searchDOM);

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