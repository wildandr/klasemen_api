"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://livescore-api.com/api-client/competitions/table.json?competition_id=2&key=0xExOAVIqqdQwTrX&secret=UQyIP31VF1YP2mq2T4zHFvq5VDWsxnpr"
                );
                setStandings(response.data.data.stages[0].groups[0].standings);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4">
                Premier League Standings
            </h1>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rank
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Team
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Matches
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Won
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Drawn
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Lost
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goals For
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goals Against
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Goal Difference
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Points
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {standings.map((team) => (
                        <tr key={team.rank}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.rank}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.team.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.matches}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.won}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.drawn}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.lost}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.goals_scored}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.goals_conceded}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.goal_diff}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {team.points}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
