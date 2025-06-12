"use client";
import { isBefore } from "date-fns";
import { useAppContext } from "../context/Appcontext";
import AdminGameCard from "../components/AdminGameCard";
import { Game } from "../data/dataTypes";
import Link from "next/link";
import { getTeamRanking } from "../utils/getTeamRanking.utils";
import { getTournamentStatus, TournamentStatus } from "./admin.utils";

export default function AdminPage() {
  const { tournaments, updateGame } = useAppContext();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#344d7c] font-bold text-xl">
        Update the scoreboard:
      </h1>
      {tournaments
        .sort((a, b) => (isBefore(a.startDate, b.startDate) ? 1 : -1))
        .map((tournament) => {
          const status = getTournamentStatus(tournament);

          const scoreByTeam = getTeamRanking(tournament);
          const maxScore = Object.values(scoreByTeam)
            .map((t) => t.score)
            .reduce((a, b) => Math.max(a, b), -Infinity);
          const winners = Object.values(scoreByTeam).filter(
            (t) => t.score === maxScore
          );

          return (
            <div key={tournament.id} className="flex flex-col w-full gap-4">
              <div className="flex flex-row gap-2">
                <span>Tournament: </span>
                <span className="font-bold"> {tournament.name}</span>
              </div>

              {status === TournamentStatus.FINISHED && (
                <div className="text-s flex flex-row gap-4 items-center">
                  <span>Winner: </span>
                  {winners.map((winner) => (
                    <>
                      <img
                        className="w-8 h-8"
                        src={`/avatars/${winner.team.avatar}.svg`}
                      />{" "}
                      {winner.team.name}
                    </>
                  ))}
                </div>
              )}
              {status === TournamentStatus.IN_PROGRESS && (
                <p>Tournament in progress:</p>
              )}
              {status === TournamentStatus.UPCOMING && (
                <p>Upcoming tournament</p>
              )}
              {tournament.games.map((game) => (
                <AdminGameCard
                  key={game.id}
                  game={game}
                  onUpdateGame={(game: Game) => updateGame(game, tournament)}
                />
              ))}
            </div>
          );
        })}

      <Link
        href="/create-tournament"
        className="border-2 border-[#344d7c] w-fit bg-white text-[#344d7c] hover:text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:border-blue-700 cursor-pointer hover:shadow"
      >
        Create new Tournament
      </Link>
    </div>
  );
}
