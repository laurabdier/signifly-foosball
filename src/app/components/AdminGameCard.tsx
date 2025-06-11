import { useState } from "react";
import { Game } from "../data/dataTypes";
import { format } from "date-fns";

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
      <div className="flex items-center gap-4 w-full">
        <div className={`w-4 h-4 rounded-full bg-[80D8C3]`} />
        <span>{teamA.name}</span>
        {isEditing ? (
          <input
            type="number"
            value={scoreA}
            onChange={(e) => setScoreA(Number(e.target.value) ?? 0)}
          />
        ) : (
          <span>{scoreA}</span>
        )}
        <span className="text-gray-400">| |</span>
        {isEditing ? (
          <input
            type="number"
            value={scoreB}
            onChange={(e) => setScoreB(Number(e.target.value) ?? 0)}
          />
        ) : (
          <span>{scoreB}</span>
        )}
        <span>{teamB.name}</span>
        <div className={`rounded-full w-1/10 bg-[FFD66B]`} />
      </div>
      <div className="text-sm text-gray-500">
        {format(startDate, "Pp")} · Office
      </div>
      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Edit score</button>
      ) : (
        <>
          <button onClick={() => onCancel()}>Cancel</button>
          <button onClick={() => onSave()}>Save</button>
        </>
      )}
    </div>
  );
}
