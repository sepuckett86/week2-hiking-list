import Component from './Component.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();

        const form = dom.querySelector('form');
        const input = dom.querySelector('input');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(input.value);
        });
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <section>
                Search hikes within 1 mile of Portland:
                <form>
                    <input type="text">
                    <button>Submit</button>
                </form>
            </section>
        `;
    }
}

export default Search;