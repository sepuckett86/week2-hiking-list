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
                <p>Search hikes within 7 miles of Portland.</p>
                <p>To see all, hit submit with an empty search.</p>
                <form>
                    <input type="text">
                    <button>Submit</button>
                </form>
            </section>
        `;
    }
}

export default Search;