import { isAfter } from "date-fns";
import { Tournament } from "../data/dataTypes";

export enum TournamentStatus {
    PAST = "PAST",
    IN_PROGRESS = "IN_PROGRESS",
    UPCOMING = "UPCOMING",
}

export function getTournamentStatus(tournament: Tournament): TournamentStatus {
    if (tournament.games.some(
        (g) =>
          (g.scoreA < 10 &&
          g.scoreB < 10)
      )) {
        return TournamentStatus.IN_PROGRESS
      }

      else if( isAfter(tournament.startDate, new Date())) {
        return TournamentStatus.UPCOMING
      }

      else {
        return TournamentStatus.PAST
      }
}