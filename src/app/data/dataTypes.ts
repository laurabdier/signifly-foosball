export type Player = {
    id: number;
    name: string;
}

export type Team = {
    id: number | string;
    name: string;
    memberIds: number[];
    members: Player[];
}

export type Game = {
    id: string;
    startDate: Date;
    teamA: Team;
    scoreA: number;
    teamB: Team;
    scoreB: number
}

export type Tournament = {
    id: string;
    name: string;
    startDate: Date;
    endDate?: Date;
    teamIds: (string | number)[];
    teams: Team[];
    games: Game[]
}