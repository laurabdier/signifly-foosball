"use client";
import { isAfter, format } from "date-fns";
import { useAppContext } from "../context/Appcontext";
import AdminGameCard from "../components/AdminGameCard";
import { Game } from "../data/dataTypes";
import Link from "next/link";

export default function AdminPage() {
  const { tournaments, updateGame } = useAppContext();

  const tournamentsInProgress = tournaments.filter(
    (t) => !t.endDate && isAfter(t.startDate, new Date())
  );

  return (
    <div className="flex flex-col gap-4">
      <Link className="bg-blue-600 text-white" href="/">
        Go back
      </Link>
      <h2>Update the scoreboard:</h2>
      {tournamentsInProgress.map((tournament) => {
        const gamesInProgress = tournament.games.filter(
          (game) =>
            !game.endDate &&
            isAfter(game.startDate, new Date()) &&
            game.scoreA < 10 &&
            game.scoreB < 10
        );

        console.log("check 27", tournament.id, gamesInProgress);

        return (
          <div key={tournament.id} className="flex flex-col w-full gap-4">
            <span>
              {" "}
              Tournament id: {tournament.id} - start:{" "}
              {format(tournament.startDate, "Pp")}
            </span>
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
