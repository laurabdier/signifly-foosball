export type Player = {
    id: number;
    name: string;
}

export type Team = {
    id: number | string;
    name: string;
    memberIds: number[] | string[];
}

export type Game = {
    id: string;
    startDate: Date;
    endDate?: Date;
    teamA: Team;
    scoreA: number;
    teamB: Team;
    scoreB: number
}

export type Tournament = {
    id: string;
    startDate: Date;
    endDate?: Date;
    teamIds: (string | number)[];
    games: Game[]
}