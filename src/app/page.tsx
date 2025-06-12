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

  const visibleTournament = tournamentInProgress ?? upComingTournament;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Banner tournament={visibleTournament} />
      {tournamentInProgress && <ScoreBoard tournament={tournamentInProgress} />}
    </div>
  );
}
