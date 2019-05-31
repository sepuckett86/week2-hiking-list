import Component from './Component.js';

class HikingItem extends Component {
    renderTemplate() {
        return /*html*/ `
            <li>
                <img src="https://cdn-files.apstatic.com/hike/7024665_small_1554847413.jpg" alt="Tryon Creek Loop">
                <h2>Tryon Creek Loop</h2>
                <p>Lake Oswego, Oregon</p>
                <p>This is an easy loop through a beautiful lush forest that is right in the Portland metro.</p>
                <p>Length: 3.4 miles</p>
            </li>
        `;
    }
}

export default HikingItem;