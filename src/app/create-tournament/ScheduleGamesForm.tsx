"use client";

import { useState } from "react";
import { Game, Team } from "../data/dataTypes";
import { generateTeamPairs } from "./scheduleGames.utils";

type Props = {
  tournamentStartDate: Date;
  teams: Team[];
  games: Game[];
  setGames: (games: Game[]) => void;
};

type ScheduleGameRowProps = {
  _startDate: Date;
  teamA: Team;
  teamB: Team;
};

const ScheduleGameRow = ({
  _startDate,
  teamA,
  teamB,
}: ScheduleGameRowProps) => {
  const [startDate, setStartDate] = useState(_startDate);

  return (
    <div
      key={`${teamA.id}-${teamB.id}`}
      className="bg-white p-4 rounded-xl flex justify-between items-center shadow"
    >
      <div className="flex items-center gap-4 w-full">
        <div className={`w-4 h-4 rounded-full bg-[80D8C3]`} />
        <span>{teamA.name}</span>
        <span className="text-gray-400">vs</span>
        <span>{teamB.name}</span>
        <div className={`rounded-full w-1/10 bg-[FFD66B]`} />
      </div>

      <div>
        <label className="block font-medium mb-1">Start Date</label>
        <input
          type="date"
          value={startDate.toString()}
          onChange={(e) => setStartDate(new Date(e.target.value))}
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>
  );
};

export default function ScheduleGamesForm({
  tournamentStartDate,
  teams,
  games,
  setGames,
}: Props) {
  const teamPairs = generateTeamPairs(teams);
  setGames(
    teamPairs.map((pair) => ({
      id: 123456765432,
      startDate: tournamentStartDate,
      teamA: pair[0],
      scoreA: 0,
      teamB: pair[1],
      scoreB: 0,
    }))
  );

  return (
    <div className="mb-4 bg-[#f2f5f9]">
      <h3 className="text-lg font-semibold mb-2">Coming games:</h3>
      <div className="space-y-2">
        {games.map(({ teamA, teamB, startDate }) => (
          <ScheduleGameRow
            key={`${teamA.id}-${teamB.id}`}
            _startDate={startDate}
            teamA={teamA}
            teamB={teamB}
          />
        ))}
      </div>
    </div>
  );
}
