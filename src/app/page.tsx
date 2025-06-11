"use client";
import { isAfter } from "date-fns";
import MatchCard from "./components/MatchCard";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import { Game } from "./data/dataTypes";
import { useAppContext } from "./context/Appcontext";

export default function Home() {
  const { tournaments } = useAppContext();
  const tournament = tournaments.sort((a, b) =>
    isAfter(a.startDate, b.startDate) ? 1 : 0
  )[0];

  console.log("tournament checks", tournaments.length);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Banner tournament={tournament} />

        {/* Latest Matches */}
        <div className="mb-4 bg-[#f2f5f9]">
          <h3 className="text-lg font-semibold mb-2">Latest Matches</h3>
          <div className="space-y-2">
            {tournament &&
              tournament.games.map((game: Game, i) => (
                <MatchCard key={i} game={game} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}
