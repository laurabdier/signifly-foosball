"use client";
import { isBefore } from "date-fns";
import { useAppContext } from "../context/Appcontext";
import AdminGameCard from "../components/AdminGameCard";
import { Game } from "../data/dataTypes";
import Link from "next/link";

export default function AdminPage() {
  const { tournaments, updateGame } = useAppContext();

  const tournamentsInProgress = tournaments.filter(
    (t) => !t.endDate && isBefore(t.startDate, new Date())
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#344d7c] font-bold text-xl">
        Update the scoreboard:
      </h1>
      {tournamentsInProgress.map((tournament) => {
        return (
          <div key={tournament.id} className="flex flex-col w-full gap-4">
            <div className="flex flex-row gap-2">
              <span>Tournament: </span>
              <span className="font-bold"> {tournament.name}</span>
            </div>
            <span className="text-s">All games:</span>
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
        className="border-2 border-white bg-white text-[#344d7c] hover:text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:border-blue-700 cursor-pointer hover:shadow"
      >
        Create Tournament
      </Link>
    </div>
  );
}
