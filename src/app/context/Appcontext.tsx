"use client";
import React, { createContext, useContext, useState } from "react";
import { Tournament } from "../data/dataTypes";
import { tournaments as t } from "../data/data";

type AppContextType = {
  tournaments: Tournament[];
  setTournaments: (tournament: Tournament[]) => void;
  addTournament: (tournament: Tournament) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [tournaments, setTournaments] = useState<Tournament[]>(t);
  const addTournament = (tournament: Tournament) => {
    setTournaments((prev) => [...prev, tournament]);
  };

  console.log("start 55 ", tournaments);

  return (
    <AppContext.Provider
      value={{
        tournaments,
        setTournaments,
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
