const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3
        },
        {
            name: "Steve",
            food: "crustaceans",
            size: 3
        }
    ]
}

const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

module.exports.getFish = getFish