import Component from './Component.js';

class HikingList extends Component {
    renderTemplate() {
        return /*html*/ `
            <ul>
                <li>
                    <img src="https://cdn-files.apstatic.com/hike/7024665_small_1554847413.jpg" alt="Tryon Creek Loop">
                    <h2>Tryon Creek Loop</h2>
                    <p>Lake Oswego, Oregon</p>
                    <p>This is an easy loop through a beautiful lush forest that is right in the Portland metro.</p>
                    <p>Length: 3.4 miles</p>
                </li>
                <li>
                    <img src="https://cdn-files.apstatic.com/hike/7033126_small_1554997289.jpg" alt="Upper Marquam Trail">
                    <h2>Upper Marquam Trail</h2>
                    <p>Portland, Oregon</p>
                    <p>Needs Adoption</p>
                    <p>Length: 1.8 miles</p>
                </li>
                <li>
                    <img src="https://cdn-files.apstatic.com/hike/7033124_small_1554997283.jpg" alt="Marquam Trail">
                    <h2>Marquam Trail</h2>
                    <p>Portland, Oregon</p>
                    <p>Needs Adoption</p>
                    <p>Length: 4.7 miles</p>
                </li>
            </ul>
        `;
    }
}

export default HikingList;