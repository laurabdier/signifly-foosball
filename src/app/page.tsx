import { isAfter } from "date-fns";
import MatchCard from "./components/MatchCard";
import Sidebar from "./components/Sidebar";
import { tournaments } from "./data/data";
import Banner from "./components/Banner";
import { Game } from "./data/dataTypes";

export default function Home() {
  const tournament = tournaments
    .sort((a, b) => (isAfter(a.startDate, b.startDate) ? 1 : 0))
    .shift();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        {/* Banner */}
        {/* <div className="rounded-2xl bg-blue-800 p-6 text-white mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Foosball Tournament</h2>
            <p className="text-sm">Team A vs Team B · 5:00 PM · Office</p>
          </div>
        </div> */}

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
