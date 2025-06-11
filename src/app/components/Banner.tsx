import { format, isAfter, isBefore } from "date-fns";
import { Clock2, MapPin } from "lucide-react";
import { Tournament } from "../data/dataTypes";

export default function Banner({ tournament }: { tournament?: Tournament }) {
  const nextGame = tournament?.games
    .filter((game) => game.scoreA < 10 && game.scoreB < 10)
    .sort((a, b) => (isAfter(a.startDate, b.startDate) ? 1 : 0))[0];

  if (!tournament || !nextGame) {
    return (
      <div className="bg-[#344d7c] flex-col w-full flex p-6 rounded-xl text-white justify-center font-bold items-center gap-4">
        <h2>No Tournament planned yet</h2>
      </div>
    );
  }

  const isNextGameinProgress =
    isBefore(nextGame.startDate, new Date()) &&
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
