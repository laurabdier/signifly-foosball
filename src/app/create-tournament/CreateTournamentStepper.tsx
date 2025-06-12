"use client";
import { UserRound, CalendarClock } from "lucide-react";

type Props = {
  step: number;
};

const steps = [
  {
    id: 1,
    icon: <UserRound className="w-6 h-6" />,
    label: "Create your teams",
  },
  {
    id: 2,
    icon: <CalendarClock className="w-6 h-6" />,
    label: "Schedule the games",
  },
];

export const CreateTournamentStepper = ({ step }: Props) => {
  return (
    <div className="w-full px-8 py-4">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-blue-100"></div>
        <div
          className="absolute left-0 top-2/4 h-0.5 -translate-y-2/4 bg-blue-600 transition-all duration-300"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>

        {steps.map((s, i) => {
          const isActive = i + 1 <= step;
          return (
            <div key={s.id} className="flex flex-col gap-2">
              <div
                className={`relative z-10 grid w-10 h-10 font-bold transition-all duration-300 rounded-full place-items-center
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-900"
                }
              `}
              >
                {s.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
