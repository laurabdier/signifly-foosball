import { Home, Settings, Trophy } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-20 bg-white border-r p-4 flex flex-col items-center gap-6">
      <Link href="/">
        <Home className="w-6 h-6 text-blue-600" />
      </Link>
      <Link href="/create-tournament">
        <Trophy className="w-6 h-6 text-gray-500 hover:text-blue-300" />
      </Link>
      <Link href="/admin">
        <Settings className="w-6 h-6 text-gray-500 hover:text-blue-300" />
      </Link>
    </div>
  );
}
