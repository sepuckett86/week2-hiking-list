function filterHikes(filter, hikes) {
    const lowerCaseSearch = filter.search.toLowerCase();
    const filtered = hikes.filter(hike => {
        const lowerCaseName = hike.name.toLowerCase();
        const hasName = lowerCaseName.includes(lowerCaseSearch);
        return hasName;
    });
    return filtered;
}

export default filterHikes;