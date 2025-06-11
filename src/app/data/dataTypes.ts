export type Player = {
    id: number;
    name: string;
}

export type Team = {
    id: number;
    name: string;
    memberIds: number[];
}

export type Game = {
    id: number;
    startDate: Date;
    endDate?: Date;
    teamA: Team;
    scoreA: number;
    teamB: Team;
    scoreB: number
}

export type Tournament = {
    id: number;
    startDate: Date;
    teamIds: number[];
    games: Game[]
}