const database = {
    fish: [
        {
            id: 1,
            name: "Frodo",
            species: "S. splendicus",
            length: "5 cm",
            diet: "Copepods and polychetes",
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2019/05/mandarin-reefs-600x444.jpg",
           
        },
        {
            id: 2,
            name: "Samwise",
            species: "G. loreto",
            length: "7 cm",
            diet: "Plankton and crustaceans",
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2019/05/28537055195_d049dbb5f7_o-600x449.jpg",
        },
        {
            id: 3,
            name: "Galadriel",
            species: "P. Imperator",
            length: "20 cm",
            diet: "Small invertebrates",
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2019/05/Pomocanthus_imperator-600x455.jpg",
        },
        {
            id: 4,
            name: "Bilbo",
            species: "P. tiera",
            length: "35 cm",
            diet: "Shrimp, squid and algae",
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2019/05/batfish-reefs-600x450.jpg",
        },
        {
            id: 5,
            name: "Gollum",
            species: "E. nebulosa",
            length: "88 cm",
            diet: "Crustaceans",
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2019/05/snowflake-moray-eel-reefs-600x383.jpg",
        },
        {
            id: 6,
            name: "Gandalf",
            species: "B. mancus",
            length: "40 cm",
            diet: "Small fish, crab, and shrimp",
            image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Bothidae_-_Bothus_mancus.jpg",
        },
        {
            id: 7,
            name: "Chani",
            species: "L. camabi",
            length: "5 cm",
            diet: "Mysis or brine",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/candy-basslet-300x200.jpg",
        },
        {
            id: 8,
            name: "Leto",
            species: "R. opercularis",
            length: "5 cm",
            diet: "Shrimp and copepods",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/flat-head-perch-300x200.jpg",
        },
        {
            id: 9,
            name: "Feyd",
            species: "G. dejongi",
            length: "6 cm",
            diet: "Mysis shrimp and brine shrimp",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/golden-basslet-300x170.jpg",
        },
        {
            id: 10,
            name: "Jessica",
            species: "J. gladifer",
            length: "3 cm",
            diet: "Zooplankton",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/bladefin-basslet-300x161.png",
        },
        {
            id: 11,
            name: "Baron",
            species: "C. igarashiensis",
            length: "40 cm",
            diet: "Fish and crustaceans",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/neptune-grouper-300x161.jpg",
        },
        {
            id: 12,
            name: "Paul",
            species: "P. boylei",
            length: "7 cm",
            diet: "Brine shrimp and copepods ",
            image: "https://ocdreefs.com/wp-content/uploads/2017/08/peppermint-angelfish-300x196.jpg",
        },
    ]
}

 //exporting this helper function which returns a copy of the fish property of the database instead of the actual database...so that the original database can't be modified by every user of the database.
export const getFish = () => {
    return database.fish.map(fish => ({...fish}))//database.fish is the fish property in the database and is an array. Using map, we make a new array, copy each fish in database.fish array and store it in the new array and return the new array.
}


