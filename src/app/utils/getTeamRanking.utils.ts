import { Team, Tournament } from "../data/dataTypes";

export type ScoreByTeam = {
    score: number;
    won: number;
    lost: number;
    team: Team
}

export const getTeamRanking = (tournament: Tournament): Record<string, ScoreByTeam>  => {

    const scoreByTeam: Record<string, ScoreByTeam> = {}
    tournament.teams.forEach(team => {
        if (!scoreByTeam[team.id.toString()]) {
            scoreByTeam[team.id.toString()] = {score: 0, won: 0, lost: 0, team}
        }
    })

    const pastGames = tournament.games.filter(game => game.scoreA === 10 ||
        game.scoreB === 10)
        

        pastGames.forEach(game => {
            const {scoreA, teamA, teamB} = game
            if(scoreA === 10) {
                scoreByTeam[teamA.id.toString()].score += 3
                scoreByTeam[teamA.id.toString()].won += 1
                scoreByTeam[teamB.id.toString()].lost += 1
            } else {
                scoreByTeam[teamB.id.toString()].score += 3
                scoreByTeam[teamB.id.toString()].won += 1
                scoreByTeam[teamA.id.toString()].lost += 1
            }
        })

        return scoreByTeam
}