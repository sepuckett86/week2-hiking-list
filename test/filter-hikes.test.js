import filterHikes from '../src/filter-hikes.js';

const test = QUnit.test;

QUnit.module('filter hikes');

const hikes = [
    { 
        name: 'Tryon Creek Loop',
        location: 'Lake Oswego, Oregon'
    },
    { 
        name: '123',
        location: 'Planet'
    },
    { 
        name: 'ABC',
        location: 'Place'
    },
];

test('takes filter and array of objects and returns objects containing filter', assert => {
    // arrange
    const filter = {
        search: 'Try'
    };

    const expected = [
        { 
            name: 'Tryon Creek Loop',
            location: 'Lake Oswego, Oregon'
        }
    ];

    // act
    const filtered = filterHikes(filter, hikes);
    // assert
    assert.deepEqual(filtered, expected);
});