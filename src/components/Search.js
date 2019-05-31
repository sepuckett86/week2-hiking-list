import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();

        const form = dom.querySelector('form');
        const input = dom.querySelector('input');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            hashStorage.set({ search: input.value });
        });
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <section id="search">
                <p>Search hikes within 50 miles of Portland.</p>
                <form>
                    <input type="text">
                    <button>Submit</button>
                </form>
            </section>
        `;
    }
}

export default Search;