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
      <div className="w-full px-20">
        <h2 className="text-2xl flex justify-center font-bold">
          {tournament.name}
        </h2>
        <span className="flex text-sm justify-center">
          {isNextGameinProgress ? "HAPPENING NOW" : "Coming soon"}
        </span>

        <div className="flex flex-col md:flex-row py-4 grow text-xl justify-between items-center">
          <span className="flex flex-col md:flex-row md:gap-4 gap-2 items-center text-sm">
            <img
              className="w-10 h-10"
              src={`/avatars/${nextGame.teamA.avatar}.svg`}
              alt={nextGame.teamA.avatar}
            />
            {nextGame.teamA.name} {nextGame.scoreA}
          </span>

          <span className="flex flex-row my-2 md:my-0 text-sm">vs</span>

          <span className="flex flex-col md:flex-row md:gap-4 gap-2 items-center text-sm">
            {nextGame.scoreB} {nextGame.teamB.name}
            <img
              className="w-10 h-10"
              src={`/avatars/${nextGame.teamB.avatar}.svg`}
              alt={nextGame.teamB.avatar}
            />
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
