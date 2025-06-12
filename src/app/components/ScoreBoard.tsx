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
    <div className="w-full px-4 sm:px-8 py-8">
      <div className="w-full overflow-x-auto">
        <div className="inline-block min-w-full shadow-md rounded-lg align-middle">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Players
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Won
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Lost
                </th>
                <th className="px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedTeams.map(({ team, score, won, lost }, i) => (
                <tr key={team.id}>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div className="w-10 h-10 text-xl flex justify-center items-center">
                      {getRankLabel(i)}
                    </div>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        className="w-8 h-8"
                        src={`/avatars/${team.avatar}.svg`}
                        alt={team.name}
                      />
                      <span>{team.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
                    <div className="flex flex-wrap gap-2">
                      {team.members.map((member) => (
                        <span key={member.id}>{member.name}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm text-gray-900">
                    {won}
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm text-gray-900">
                    {lost}
                  </td>
                  <td className="px-4 py-4 border-b border-gray-200 bg-white text-sm">
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
