import { Tournament } from "../data/dataTypes";
import { getTeamRanking } from "../utils/getTeamRanking.utils";

const getRankLabel = (rank: number) => {
  if (rank === 0) return "🏆";
  else if (rank === 1) return "🥈";
  else if (rank === 2) return "🥉";
  else return rank + 1;
};

export default function ScoreBoard({ tournament }: { tournament: Tournament }) {
  const scoreByTeam = getTeamRanking(tournament);
  const orderedTeams = Object.values(scoreByTeam).sort((a, b) =>
    a.score > b.score ? 1 : 0
  );

  return (
    <div className="container px-4 sm:px-8 py-8 grow">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rank
                </th>
                <th className="py-3 px-8 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Team
                </th>
                <th className="py-3 px-8 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Players
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Won
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Lost
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-semibold text-xs text-gray-700 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedTeams.map(({ team, score, won, lost }, i) => (
                <tr key={team.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex">
                      <div className="flex-shrink-0 w-10 h-10 text-l justify-center item-center flex">
                        {getRankLabel(i)}
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                    <div className="justify-left item-center flex gap-4">
                      <div className={`w-4 h-4 rounded-full bg-[#80D8C3]`} />
                      <span> {team.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                    <div className="justify-left item-center flex gap-4">
                      {team.members.map((member) => (
                        <span key={member.id}>{member.name}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{won}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{lost}</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{score}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
