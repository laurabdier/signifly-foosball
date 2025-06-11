import { format, isAfter } from "date-fns";
import { Clock2, MapPin } from "lucide-react";
import Link from "next/link";
import { Tournament } from "../data/dataTypes";

export default function Banner({ tournament }: { tournament?: Tournament }) {
  const nextGame = tournament?.games.filter(
    (game) =>
      !game.endDate &&
      isAfter(game.startDate, new Date()) &&
      game.scoreA < 10 &&
      game.scoreB < 10
  )[0];

  if (!tournament || !nextGame) {
    return (
      <div className="bg-[#344d7c] flex-col w-full flex p-6 rounded-xl text-white justify-center font-bold items-center gap-4">
        <h2>No Tournament planned yet</h2>
        <Link
          href="/create-tournament"
          className="border-2 border-white bg-white text-[#344d7c] hover:text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:border-blue-700 cursor-pointer hover:shadow"
        >
          Create Tournament
        </Link>
      </div>
    );
  }

  const isNextGameinProgress =
    !nextGame.endDate &&
    isAfter(nextGame.startDate, new Date()) &&
    nextGame.scoreA < 10 &&
    nextGame.scoreB < 10;

  return (
    <div className="bg-[#344d7c] w-full flex-col flex p-6 rounded-xl text-white justify-center font-bold items-center gap-4">
      <div>
        <h2 className="text-2xl font-bold">{tournament.name}</h2>
        <span className="flex text-sm justify-center">
          {isNextGameinProgress ? "HAPPENING NOW" : "Coming soon"}
        </span>
        <div className="flex flex-row text-m justify-between">
          <span className="flex text-m flex-row gap-4">
            {nextGame.teamA.name} {nextGame.scoreA}
          </span>
          <span className="flex text-m flex-row">vs</span>
          <span className="flex text-m flex-row gap-4">
            {nextGame.scoreB} {nextGame.teamB.name}
          </span>
        </div>

        <span className="flex flex-row text-xs gap-1 justify-center items-center">
          <Clock2 className="w-2 h-2 text-white" />
          {format(nextGame.startDate, "Pp")} <span>•</span>
          <MapPin className="w-2 h-2 text-white" /> The Office
        </span>
      </div>
    </div>
  );
}
