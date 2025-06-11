import Link from "next/link";
import { Tournament } from "../data/dataTypes";

export default function Banner({ tournament }: { tournament?: Tournament }) {
  if (!tournament) {
    return (
      <div className="bg-blue-500 w-full flex p-6 rounded-xl text-white justify-center font-bold items-center gap-4">
        <h2>No Tournament planned</h2>
        <Link
          href="/create-tournament"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Tournament
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-blue-500 w-full flex p-6 rounded-xl text-white justify-center font-bold items-center gap-4">
      <div>
        <h2 className="text-2xl font-bold">Foosball Tournament</h2>
        <p className="text-sm">Team A vs Team B · 5:00 PM · Office</p>
      </div>
    </div>
  );
}
