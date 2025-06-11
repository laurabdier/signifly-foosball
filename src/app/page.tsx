"use client";
import { isAfter, isBefore } from "date-fns";
import Banner from "./components/Banner";
import { useAppContext } from "./context/Appcontext";
import ScoreBoard from "./components/ScoreBoard";

export default function Home() {
  const { tournaments } = useAppContext();

  const tournamentInProgress = tournaments.find(
    (t) =>
      isBefore(t.startDate, new Date()) &&
      t.games.some((g) => g.scoreA < 10 && g.scoreB < 10)
  );

  const upComingTournament = tournaments.find((t) =>
    isAfter(t.startDate, new Date())
  );

  console.log("tournamentsInProgress", tournamentInProgress);
  console.log("upComingTournaments", upComingTournament);

  const visibleTournament = tournamentInProgress ?? upComingTournament;

  console.log("visibleTournament", visibleTournament);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Banner tournament={visibleTournament} />

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

      {tournamentInProgress && <ScoreBoard tournament={tournamentInProgress} />}
    </div>
  );
}
