"use client";
import { isAfter } from "date-fns";
import { useAppContext } from "../context/Appcontext";
import AdminGameCard from "../components/AdminGameCard";
import { Game } from "../data/dataTypes";

export default function AdminPage() {
  const { tournaments, updateGame } = useAppContext();

  const tournamentsInProgress = tournaments.filter(
    (t) => !t.endDate && isAfter(t.startDate, new Date())
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#344d7c] font-bold text-xl">
        Update the scoreboard:
      </h1>
      {tournamentsInProgress.map((tournament) => {
        const gamesInProgress = tournament.games.filter(
          (game) =>
            !game.endDate &&
            isAfter(game.startDate, new Date()) &&
            game.scoreA < 10 &&
            game.scoreB < 10
        );

        if (gamesInProgress.length === 0) {
          return (
            <div
              key={tournament.id}
              className="bg-white p-4 flex flex-col gap-6 rounded-xl justify-between items-center shadow"
            >
              <div className="flex flex-row gap-2">
                <span>Tournament: </span>
                <span className="font-bold"> {tournament.name}</span>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="font-bold text-l">
                  No game is happening now
                </span>
                <span className="text-m">
                  To avoid any cheating, the admin can update the game only when
                  it happens
                </span>
              </div>
            </div>
          );
        }

        return (
          <div key={tournament.id} className="flex flex-col w-full gap-4">
            <div className="flex flex-row gap-2">
              <span>Tournament: </span>
              <span className="font-bold"> {tournament.name}</span>
            </div>
            <span className="text-s">Live game:</span>
            {gamesInProgress.map((game) => (
              <AdminGameCard
                key={game.id}
                game={game}
                onUpdateGame={(game: Game) => updateGame(game, tournament)}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
