import { Game } from "../data/dataTypes";
import { format } from "date-fns";

export default function MatchCard({ game }: { game: Game }) {
  const { teamA, teamB, scoreA, scoreB, startDate } = game;
  return (
    <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow">
      <div className="flex items-center gap-4 w-full">
        <div className={`w-4 h-4 rounded-full bg-[80D8C3]`} />
        <span>{teamA.name}</span>
        <span>{scoreA}</span>
        <span className="text-gray-400">| |</span>
        <span>{scoreB}</span>
        <span>{teamB.name}</span>
        <div className={`rounded-full w-1/10 bg-[FFD66B]`} />
      </div>
      <div className="text-sm text-gray-500">
        {format(startDate, "Pp")} · Office
      </div>
    </div>
  );
}
