import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header>
                <h1>Hikes Near Portland</h1>
            </header>
        `;
    }
}

export default Header;              