import { League, ToLeagueBoard } from "../../model/League";
import * as fetch from "node-fetch";
import { RaceNetEventResponse } from "../../model/RaceNet";

export const getLeagueData = async (leagueName: string): Promise<League> => {
    const response: RaceNetEventResponse = await fetch(
        "https://www.dirtgame.com/dirtrally/uk/api/event"
    );

    return mapToLeague(response, leagueName);
};

const mapToLeague: ToLeagueBoard<RaceNetEventResponse> = (
    input,
    leagueName: string
) =>
    ({
        board: input.Entries.map((entry) => ({
            position: entry.Position,
            name: entry.Name,
            time: entry.Time,
            diffFirst: entry.DiffFirst.toString()
        })),
        leagueName
    } as League);
