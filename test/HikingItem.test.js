import HikingItem from '../src/components/HikingItem.js';

const test = QUnit.test;

QUnit.module('Hiking Item');

test('returns corrent Hiking Item html', assert => {
    // Arrange
    const hike = {
        'id': 7075662,
        'name': 'Tryon Creek Loop',
        'type': 'Featured Hike',
        'summary': 'This is an easy loop through a beautiful lush forest that is right in the Portland metro.',
        'difficulty': 'greenBlue',
        'stars': 4,
        'starVotes': 2,
        'location': 'Lake Oswego, Oregon',
        'url': 'https://www.hikingproject.com/trail/7075662/tryon-creek-loop',
        'imgSqSmall': 'https://cdn-files.apstatic.com/hike/7024665_sqsmall_1554847413.jpg',
        'imgSmall': 'https://cdn-files.apstatic.com/hike/7024665_small_1554847413.jpg',
        'imgSmallMed': 'https://cdn-files.apstatic.com/hike/7024665_smallMed_1554847413.jpg',
        'imgMedium': 'https://cdn-files.apstatic.com/hike/7024665_medium_1554847413.jpg',
        'length': 3.4,
        'ascent': 399,
        'descent': -408,
        'high': 426,
        'low': 209,
        'longitude': -122.676,
        'latitude': 45.4414,
        'conditionStatus': 'Unknown',
        'conditionDetails': null,
        'conditionDate': '1970-01-01 00:00:00'
    };
    const expected = /*html*/ `
        <li>
            <img src="https://cdn-files.apstatic.com/hike/7024665_small_1554847413.jpg" alt="Tryon Creek Loop">
            <h2>Tryon Creek Loop</h2>
            <p>Lake Oswego, Oregon</p>
            <p>This is an easy loop through a beautiful lush forest that is right in the Portland metro.</p>
            <p>Length: 3.4 miles</p>
        </li>`;
    // Act
    const hikingItem = new HikingItem({ hike });
    const actual = hikingItem.renderTemplate();

    // Assert
    assert.htmlEqual(actual, expected);
});