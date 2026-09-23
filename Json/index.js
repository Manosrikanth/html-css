let emp = [
    {
        eId: 101,
        eName: "Chatur",
        eDesignation: "Project Manager"
    },
    {
        eId: 102,
        eName: "Anirudh",
        eDesignation: "Engineering Manager"
    }
];

console.log(emp);

console.log(JSON.stringify(emp));

console.log(JSON.parse(JSON.stringify(emp)));