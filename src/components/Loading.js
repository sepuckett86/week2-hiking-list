import Component from './Component.js';

class Loading extends Component {
    renderTemplate() {
        const done = this.props.done;
        if(done) {
            return /*html*/ `
            <div>
            </div>
        `;
        }
        return /*html*/ `
            <div class="center-flex">
                <img src="./assets/hiking.gif">
            </div>
        `;
    }
}

export default Loading;