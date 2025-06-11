import { useState } from "react";
import { Game } from "../data/dataTypes";
import { format } from "date-fns";
import { Pencil } from "lucide-react";

export default function AdminGameCard({
  game,
  onUpdateGame,
}: {
  game: Game;
  onUpdateGame: (game: Game) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [scoreA, setScoreA] = useState(game.scoreA);
  const [scoreB, setScoreB] = useState(game.scoreB);
  const { teamA, teamB, startDate } = game;

  const onCancel = () => {
    setScoreA(game.scoreA);
    setScoreB(game.scoreB);
    setIsEditing(false);
  };

  const onSave = () => {
    onUpdateGame({
      ...game,
      scoreA,
      scoreB,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow">
      <div className="flex items-center gap-4">
        <div className={`w-4 h-4 rounded-full bg-[80D8C3]`} />
        <span>{teamA.name}</span>
        {isEditing ? (
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={scoreA}
            onChange={(e) =>
              Number(e.target.value) && Number(e.target.value) >= 0
                ? setScoreA(Number(e.target.value))
                : null
            }
          />
        ) : (
          <span>{scoreA}</span>
        )}
        <span className="text-gray-400"> vs</span>
        {isEditing ? (
          <input
            type="number"
            id="number-input"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={scoreB}
            onChange={(e) =>
              Number(e.target.value) && Number(e.target.value) >= 0
                ? setScoreB(Number(e.target.value))
                : null
            }
          />
        ) : (
          <span>{scoreB}</span>
        )}
        <span>{teamB.name}</span>
        <div className={`rounded-full w-1/10 bg-[FFD66B]`} />
      </div>
      <div className="text-sm text-gray-500">
        <span>Started at: {format(startDate, "HH:mm")}</span>
      </div>
      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          type="button"
          className="px-3 border border-blue-600 cursor-pointer py-2 text-sm gap-2 font-medium text-center inline-flex items-center text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Pencil className="w-4 h-4" />
          Edit score
        </button>
      ) : (
        <div className="flex flex-row gap-4">
          <button
            type="button"
            className="px-3 border border-blue-600 cursor-pointer py-2 text-sm gap-2 font-medium text-center inline-flex items-center text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => onCancel()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-3 border border-blue-600 cursor-pointer py-2 text-sm gap-2 font-medium text-center inline-flex items-center text-blue-600 hover:text-white hover:bg-blue-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => onSave()}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
