"use client";

import { useState } from "react";
import { Game } from "../data/dataTypes";
import { format } from "date-fns";

type Props = {
  games: Game[];
  setGames: (games: Game[]) => void;
};

type ScheduleGameRowProps = {
  game: Game;
  onUpdateGame: (game: Game) => void;
};

const ScheduleGameRow = ({ game, onUpdateGame }: ScheduleGameRowProps) => {
  const { teamA, teamB } = game;
  const [date, setDate] = useState(game.startDate);
  const [time, setTime] = useState("12:30");

  return (
    <div className="bg-white p-4 rounded-xl flex justify-between items-center shadow">
      <div className="flex items-center gap-4 w-full">
        <div className={`w-4 h-4 rounded-full bg-[#80D8C3]`} />
        <span>{teamA.name}</span>
        <span className="text-gray-400">vs</span>
        <span>{teamB.name}</span>
        <div className={`rounded-full w-1/10 bg-[#FFD66B]`} />
      </div>

      <div>
        <label className="block font-medium mb-1">Date: </label>
        <input
          type="date"
          value={format(date, "yyyy-MM-dd")}
          onChange={(e) => {
            setDate(new Date(e.target.value));
            onUpdateGame({ ...game, startDate: new Date(e.target.value) });
          }}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Date: </label>
        <input
          type="time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          className="w-full border rounded px-3 py-2"
        />
      </div>
    </div>
  );
};

export default function ScheduleGamesForm({ games, setGames }: Props) {
  const onUpdateGame = (game: Game) => {
    setGames(games.map((g) => (g.id === game.id ? game : g)));
  };

  return (
    <div className="mb-4 bg-[#f2f5f9]">
      <h3 className="text-lg font-semibold mb-2">Coming games:</h3>
      <div className="space-y-2">
        {games.map((game) => (
          <ScheduleGameRow
            key={`${game.teamA.id}-${game.teamB.id}`}
            game={game}
            onUpdateGame={onUpdateGame}
          />
        ))}
      </div>
    </div>
  );
}
