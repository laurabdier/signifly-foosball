"use client";
import React, { createContext, useContext, useState } from "react";

type Player = { id: string; name: string };
type Team = { id: string; name: string; players: Player[] };
type Game = {
  id: string;
  teamAId: string;
  teamBId: string;
  scoreA: number;
  scoreB: number;
};
type Tournament = {
  id: string;
  name?: string;
  startDate: string;
  prize: string;
  teamIds: string[];
};

type AppContextType = {
  players: Player[];
  teams: Team[];
  games: Game[];
  tournaments: Tournament[];
  addPlayer: (player: Player) => void;
  addGame: (game: Game) => void;
  addTeam: (team: Team) => void;
  // updateTeam: (team: Team) => void;
  deleteTeam: (teamId: string) => void;
  addTournament: (tournament: Tournament) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [tournaments, setTournaments] = useState<Tournament[]>([]);

  const addPlayer = (player: Player) => setPlayers((prev) => [...prev, player]);

  const addGame = (game: Game) => setGames((prev) => [...prev, game]);

  const addTeam = (team: Team) => setTeams((prev) => [...prev, team]);
  //   const updateTeam = (team: Team) =>
  //     setTeams((prev) => prev.map((t) => (t.id === team.id ? team : t)));
  const deleteTeam = (id: string) =>
    setTeams((prev) => prev.filter((t) => t.id !== id));

  const addTournament = (tournament: Tournament) =>
    setTournaments((prev) => [...prev, tournament]);

  return (
    <AppContext.Provider
      value={{
        players,
        teams,
        games,
        tournaments,
        addPlayer,
        addTeam,
        addGame,
        deleteTeam,
        addTournament,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within AppProvider");
  return context;
};
