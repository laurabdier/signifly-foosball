"use client";
import { useState } from "react";
import { Player, Team } from "../data/dataTypes";

const avatars: string[] = [
  "dog",
  "parrot",
  "cat",
  "snake",
  "sheep",
  "pig",
  "hedgehog",
  "rhino",
];

type Props = {
  close: () => void;
  onSave: (team: Team) => void;
  availablePlayers?: Player[]; // from existing teams
};

export default function CreateTeamModal({
  close,
  onSave,
  availablePlayers = [],
}: Props) {
  const [teamName, setTeamName] = useState("");
  const [avatar, setAvatar] = useState("dog");
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const togglePlayer = (player: Player) => {
    const alreadySelected = selectedPlayers.some((p) => p.id === player.id);
    if (alreadySelected) {
      setSelectedPlayers((prev) => prev.filter((p) => p.id !== player.id));
    } else if (selectedPlayers.length < 4) {
      setSelectedPlayers((prev) => [...prev, player]);
    }
  };

  const handleSave = () => {
    if (!teamName || selectedPlayers.length < 1) {
      alert("Please enter a name and select 1-4 players.");
      return;
    }
    onSave({
      id: `${teamName}-${selectedPlayers.map((sp) => sp.id).join("-")}`,
      name: teamName,
      avatar,
      memberIds: selectedPlayers.map((sp) => sp.id),
      members: selectedPlayers,
    });
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Create Team</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Team Name</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div className="w-full flex flex-wrap gap-4">
          {avatars.map((av) => {
            const isSelected = av === avatar;
            return (
              <div key={av} onClick={() => setAvatar(av)}>
                <img
                  className={`w-8 h-8 hover:border hover:border-gray-500 rounded-xl cursor-pointer ${
                    isSelected ? "border border-blue-600" : ""
                  }`}
                  src={`/avatars/${av}.svg`}
                />
              </div>
            );
          })}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Select Players (1-4)</label>
          <div className="grid grid-cols-2 gap-2">
            {availablePlayers.map((player) => (
              <button
                key={player.id}
                onClick={() => togglePlayer(player)}
                className={`border rounded px-2 py-1 text-left ${
                  selectedPlayers.some((p) => p.id === player.id)
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                {player.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={close} className="px-4 py-2 rounded bg-gray-200">
            Cancel
          </button>
          <button
            disabled={selectedPlayers.length < 1}
            onClick={handleSave}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            Save Team
          </button>
        </div>
      </div>
    </div>
  );
}
