import { Player, Team, Tournament } from "./dataTypes";


export const players: Player[] = [
    {
        id: 1,
        name: "Mandi",
    },
    {
        id: 2,
        name: "Kait",
    },
    {
        id: 3,
        name: "Kirsten",
    },
    {
        id: 4,
        name: "Petra"
    },
    {
        id: 5,
        name: "Alex",
    },
    {
        id: 6,
        name: "Antonina"
    },
    {
        id: 7,
        name: "Christelle"
    },
    {
        id: 8,
        name: "Jenn"
    },
]

export const teams: Team[] = [
    {
        id: 1,
        name: "America",
        memberIds: [1, 2],
        members: [{
            id: 1,
            name: "Mandi",
        },
        {
            id: 2,
            name: "Kait",
        }]
    },
    {
        id: 2,
        name: "Denmark",
        memberIds: [3, 4, 5, 6],
        members: [
            {
                id: 3,
                name: "Kirsten",
            },
            {
                id: 4,
                name: "Petra"
            },
            {
                id: 5,
                name: "Alex",
            },
            {
                id: 6,
                name: "Antonina"
            },
        ]
    },
    {
        id: 3,
        name: "France",
        memberIds: [7, 8],
        members: [
            {
                id: 7,
                name: "Christelle"
            },
            {
                id: 8,
                name: "Jenn"
            },
        ]
    }
]

export const tournaments: Tournament[] = [
    {
        id: "1",
        name: "New Year Foosball Tournament",
        startDate: (new Date("01/01/2025")),
        endDate: new Date("01/01/2025"),
        teamIds: [
           1, 2, 3
        ],
        teams,
        games: [
            {
                id: "1-1-1",
                startDate: new Date("01/01/2025 14:15:00"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                    members: [{
                        id: 1,
                        name: "Mandi",
                    },
                    {
                        id: 2,
                        name: "Kait",
                    }]
                },
                scoreA: 10,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                    members: [
                        {
                            id: 3,
                            name: "Kirsten",
                        },
                        {
                            id: 4,
                            name: "Petra"
                        },
                        {
                            id: 5,
                            name: "Alex",
                        },
                        {
                            id: 6,
                            name: "Antonina"
                        },
                    ]
                },
                scoreB: 6
            },
            {
                id: "2-3-2",
                startDate: new Date("01/01/2025 14:50:00"),
                teamA: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                    members: [
                        {
                            id: 7,
                            name: "Christelle"
                        },
                        {
                            id: 8,
                            name: "Jenn"
                        },
                    ]
                },
                scoreA: 7,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                    members: [
                        {
                            id: 3,
                            name: "Kirsten",
                        },
                        {
                            id: 4,
                            name: "Petra"
                        },
                        {
                            id: 5,
                            name: "Alex",
                        },
                        {
                            id: 6,
                            name: "Antonina"
                        },
                    ]
                },
                scoreB: 10
            },
            {
                id: "3-1-3",
                startDate: new Date("01/01/2025 16:10:00"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                    members: [{
                        id: 1,
                        name: "Mandi",
                    },
                    {
                        id: 2,
                        name: "Kait",
                    }]
                },
                scoreA: 10,
                teamB: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                    members: [
                        {
                            id: 7,
                            name: "Christelle"
                        },
                        {
                            id: 8,
                            name: "Jenn"
                        },
                    ]
                },
                scoreB: 5
            }
        ]
    },
    {
        id: "2",
        name: "Mid Summer Tournament",
        startDate: new Date("2025-06-10"),
        teamIds: [
           1, 2, 3
        ],
        teams,
        games: [
            {
                id: "4-1-2",
                startDate: new Date("2025-06-10 10:20"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                    members: [{
                        id: 1,
                        name: "Mandi",
                    },
                    {
                        id: 2,
                        name: "Kait",
                    }]
                },
                scoreA: 10,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                    members: [
                        {
                            id: 3,
                            name: "Kirsten",
                        },
                        {
                            id: 4,
                            name: "Petra"
                        },
                        {
                            id: 5,
                            name: "Alex",
                        },
                        {
                            id: 6,
                            name: "Antonina"
                        },
                    ]
                },
                scoreB: 9
            },
            {
                id: "5-3-2",
                startDate: new Date("2025-06-11 12:15"),
                teamA: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                    members: [
                        {
                            id: 7,
                            name: "Christelle"
                        },
                        {
                            id: 8,
                            name: "Jenn"
                        },
                    ]
                },
                scoreA: 4,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                    members: [
                        {
                            id: 3,
                            name: "Kirsten",
                        },
                        {
                            id: 4,
                            name: "Petra"
                        },
                        {
                            id: 5,
                            name: "Alex",
                        },
                        {
                            id: 6,
                            name: "Antonina"
                        },
                    ]
                },
                scoreB: 10
            },
            {
                id: "6-1-3",
                startDate: new Date("2025-06-11 17:10"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                    members: [{
                        id: 1,
                        name: "Mandi",
                    },
                    {
                        id: 2,
                        name: "Kait",
                    }]
                },
                scoreA: 0,
                teamB: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                    members: [
                        {
                            id: 7,
                            name: "Christelle"
                        },
                        {
                            id: 8,
                            name: "Jenn"
                        },
                    ]
                },
                scoreB: 0
            }
        ]
    }
]