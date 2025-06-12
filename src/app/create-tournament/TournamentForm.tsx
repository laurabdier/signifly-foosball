"use client";
import { useState } from "react";
import { Team } from "../data/dataTypes";
import CreateTeamModal from "./CreateTeamModal";
import { players } from "../data/data";
import { format } from "date-fns";

type Props = {
  name: string;
  startDate: Date;
  teams: Team[];
  setName: (name: string) => void;
  setStartDate: (date: Date) => void;
  setTeams: (teams: Team[]) => void;
};

export default function TournamentForm({
  name,
  setName,
  startDate,
  setStartDate,
  teams,
  setTeams,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const usedPlayerIds = teams.flatMap((t) => t.memberIds);

  const availablePlayers = players.filter((u) => !usedPlayerIds.includes(u.id));

  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="bg-white p-4 rounded-xl shadow mb-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={format(startDate, "yyyy-MM-dd")}
            onChange={(e) => {
              setStartDate(new Date(e.target.value));
            }}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Teams</h2>
          {availablePlayers.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              + Create Team
            </button>
          )}
        </div>

        {teams.length === 0 && (
          <p className="text-gray-500">No teams created yet.</p>
        )}

        <ul className="space-y-3">
          {teams.map((team: Team) => (
            <li
              key={team.id}
              className="flex justify-between items-center p-3 bg-gray-100 rounded"
            >
              <div className="flex flex-row gap-4 item-center">
                <img className="w-8 h-8" src={`/avatars/${team.avatar}.svg`} />
                <span>{team.name}</span>
              </div>

              <div className="space-x-2">
                <button
                  className="cursor-pointer"
                  // onClick={() => deleteTeam(team.id)}
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>

        {isModalOpen && (
          <CreateTeamModal
            close={() => setIsModalOpen(false)}
            onSave={(team) => setTeams([...teams, team])}
            availablePlayers={availablePlayers}
          />
        )}
      </div>
    </div>
  );
}
