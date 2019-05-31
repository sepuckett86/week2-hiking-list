import Component from './Component.js';

class Search extends Component {
    renderTemplate() {
        return /*html*/ `
            <section>
                Search for hikes near Portland!
                <form>
                    <select>
                        <option></option>
                    </select>
                </form>
            </section>
        `;
    }
}

export default Search;