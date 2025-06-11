"use client";
import { useState } from "react";
import { CreateTournamentStepper } from "./CreateTournamentStepper";
import TournamentForm from "./TournamentForm";
import ScheduleGamesForm from "./ScheduleGamesForm";
import { Game, Team } from "../data/dataTypes";

export default function CreateTournamentPage() {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const [startDate, setStartDate] = useState(new Date());
  const [teams, setTeams] = useState<Team[]>([]);
  const [games, setGames] = useState<Game[]>([]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Create New Tournament</h1>
      <CreateTournamentStepper step={step} />

      {step === 1 && (
        <TournamentForm
          startDate={startDate}
          setStartDate={setStartDate}
          teams={teams}
          setTeams={setTeams}
        />
      )}
      {step === 2 && (
        <ScheduleGamesForm
          tournamentStartDate={startDate}
          teams={teams}
          games={games}
          setGames={setGames}
        />
      )}

      <div className="flex justify-between mt-16">
        <button
          onClick={back}
          disabled={step === 1}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
          type="button"
        >
          Prev
        </button>
        <button
          onClick={next}
          disabled={step === 3}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all disabled:opacity-50"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
