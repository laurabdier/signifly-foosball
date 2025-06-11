import { Team } from "../data/dataTypes"

export function generateTeamPairs(teams: Team[]) {
    const pairs: [Team, Team][] = []
  
    for (const team of teams) {
        for (const pair of teams) {
            if (team.id !== pair.id) {
                pairs.push([team, pair])
            }
        }
    }

    return pairs
}