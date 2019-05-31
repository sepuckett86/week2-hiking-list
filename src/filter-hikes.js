function filterHikes(filter, hikes) {
    const lowerCaseSearch = filter.search.toLowerCase();
    const filtered = hikes.filter(hike => {
        const lowerCaseName = hike.name.toLowerCase();
        const lowerCaseLocation = hike.location.toLowerCase();
        
        const hasName = lowerCaseName.includes(lowerCaseSearch);
        const hasLocation = lowerCaseLocation.includes(lowerCaseSearch);

        return hasName || hasLocation;
    });
    return filtered;
}

export default filterHikes;