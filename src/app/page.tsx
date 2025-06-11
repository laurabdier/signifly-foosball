"use client";
import { isAfter } from "date-fns";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import { useAppContext } from "./context/Appcontext";
import ScoreBoard from "./components/ScoreBoard";

export default function Home() {
  const { tournaments } = useAppContext();

  const comingTournaments = tournaments
    .filter((t) => !t.endDate && isAfter(t.startDate, new Date()))
    .sort((a, b) => (isAfter(a.startDate, b.startDate) ? 1 : 0));

  const tournamentInProgress = comingTournaments[0].endDate
    ? undefined
    : comingTournaments[0];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6">
        <Banner tournament={tournamentInProgress} />

        {/* Latest Matches */}
        {/* <div className="mb-4 bg-[#f2f5f9]">
          <h3 className="text-lg font-semibold mb-2">Latest Matches</h3>
          <div className="space-y-2">
            {tournamentInProgress &&
              tournamentInProgress.games.map((game: Game, i) => (
                <MatchCard key={i} game={game} />
              ))}
          </div>
        </div> */}

        {tournamentInProgress && (
          <ScoreBoard tournament={tournamentInProgress} />
        )}
      </main>
    </div>
  );
}
