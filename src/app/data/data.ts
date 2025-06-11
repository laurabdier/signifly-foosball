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
    },
    {
        id: 2,
        name: "Denmark",
        memberIds: [3, 4, 5, 6],
    },
    {
        id: 3,
        name: "France",
        memberIds: [7, 8],
    }
]

export const tournaments: Tournament[] = [
    {
        id: "1",
        name: "New Year Foosball Tournament",
        startDate: (new Date("01/01/2025")),
        teamIds: [
           1, 2, 3
        ],
        teams,
        games: [
            {
                id: "1-1-1",
                startDate: new Date("01/01/2025 14:15:00"),
                endDate: new Date("01/01/2025 14:32:00"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                },
                scoreA: 10,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                },
                scoreB: 6
            },
            {
                id: "2-3-2",
                startDate: new Date("01/01/2025 14:50:00"),
                endDate: new Date("01/01/2025 15:05:00"),
                teamA: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                },
                scoreA: 7,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                },
                scoreB: 10
            },
            {
                id: "3-1-3",
                startDate: new Date("01/01/2025 16:10:00"),
                endDate: new Date("01/01/2025 16:33:00"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                },
                scoreA: 10,
                teamB: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                },
                scoreB: 5
            }
        ]
    },
    {
        id: "2",
        name: "Mid Summer Tournament",
        startDate: new Date("10/06/2025"),
        teamIds: [
           1, 2, 3
        ],
        teams,
        games: [
            {
                id: "4-1-2",
                startDate: new Date("10/06/2025 10:20"),
                endDate: new Date("10/06/2025 10:44"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                },
                scoreA: 10,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                },
                scoreB: 9
            },
            {
                id: "5-3-2",
                startDate: new Date("11/06/2025 12:15"),
                endDate: new Date("11/06/2025 12:39"),
                teamA: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                },
                scoreA: 4,
                teamB: {
                    id: 2,
                    name: "Denmark",
                    memberIds: [3, 4, 5, 6],
                },
                scoreB: 10
            },
            {
                id: "6-1-3",
                startDate: new Date("11/06/2025 17:10"),
                teamA: {
                    id: 1,
                    name: "America",
                    memberIds: [1, 2],
                },
                scoreA: 0,
                teamB: {
                    id: 3,
                    name: "France",
                    memberIds: [7, 8],
                },
                scoreB: 0
            }
        ]
    }
]