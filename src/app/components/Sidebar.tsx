import { Home, Trophy, BarChart, User } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r p-4 flex flex-col items-center gap-6">
      <Home className="w-6 h-6 text-blue-600" />
      <Trophy className="w-6 h-6 text-gray-500" />
      <BarChart className="w-6 h-6 text-gray-500" />
      <User className="w-6 h-6 text-gray-500" />
    </div>
  );
}
