import { Home, Settings, Trophy, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r p-4 flex flex-col items-center gap-6">
      <Home className="w-6 h-6 text-blue-600" />
      <Trophy className="w-6 h-6 text-gray-500" />
      <Link href="/admin">
        <Settings className="w-6 h-6 text-gray-500" />
      </Link>
      <User className="w-6 h-6 text-gray-500" />
    </div>
  );
}
