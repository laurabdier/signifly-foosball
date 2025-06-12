"use client";
import { useState } from "react";
import { CreateTournamentStepper } from "./CreateTournamentStepper";
import TournamentForm from "./TournamentForm";
import ScheduleGamesForm from "./ScheduleGamesForm";
import { Game, Team } from "../data/dataTypes";
import { generateTeamPairs } from "./scheduleGames.utils";
import { format, isBefore } from "date-fns";
import { useAppContext } from "../context/Appcontext";
import Link from "next/link";

export default function CreateTournamentPage() {
  const { addTournament } = useAppContext();
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [teams, setTeams] = useState<Team[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  const isNextStepDisabled = () => {
    if (step === 1) {
      return isBefore(startDate, new Date()) || teams.length < 2 || !name;
    }

    return false;
  };

  const goNextStep = (nextStep: number) => {
    if (nextStep === 2) {
      const teamPairs = generateTeamPairs(teams);
      setGames(
        teamPairs.map(([teamA, teamB]) => ({
          id: `${format(startDate, "dd-MM-yyyy")}-${teamA.id}-${teamB.id}`,
          teamA,
          scoreA: 0,
          teamB,
          scoreB: 0,
          startDate,
        }))
      );
      next();
    }

    if (nextStep === 3) {
      next();
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Create New Tournament</h1>
      <CreateTournamentStepper step={step} />

      {step === 1 && (
        <TournamentForm
          name={name}
          setName={setName}
          startDate={startDate}
          setStartDate={setStartDate}
          teams={teams}
          setTeams={setTeams}
        />
      )}
      {step === 2 && <ScheduleGamesForm games={games} setGames={setGames} />}

      <div className="flex justify-between mt-16">
        {step === 1 ? (
          <Link
            href={"/"}
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
          >
            Cancel
          </Link>
        ) : (
          <button
            onClick={back}
            disabled={step === 1}
            className="select-none rounded-lg bg-gray-900 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
            type="button"
          >
            Prev
          </button>
        )}
        {step === 3 ? (
          <Link
            href={"/admin"}
            className="select-none cursor-pointer rounded-lg bg-blue-600 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
            onNavigate={() =>
              addTournament({
                id: `${format(startDate, "dd-MM-yyyy")}`,
                name,
                startDate,
                teamIds: teams.map((t) => t.id),
                teams,
                games,
              })
            }
          >
            Create Tournament
          </Link>
        ) : (
          <button
            onClick={() => goNextStep(step + 1)}
            disabled={isNextStepDisabled()}
            className="select-none cursor-pointer rounded-lg bg-blue-600 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
            type="button"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
