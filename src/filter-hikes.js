function filterHikes(filter, hikes) {
    const filtered = hikes.filter(hike => {
        return hike.name.includes(filter.search);
    });
    return filtered;
}

export default filterHikes;