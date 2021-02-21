import { League } from "../../model/League";
import * as fetch from "node-fetch";

export const getLeagueData = async (): Promise<League> => {
    await fetch("https://www.dirtgame.com/dirtrally/uk/api/event");

    return {
        leagueName: "myLeague",
        board: [
            {
                position: 1,
                name: "Ben",
                time: "1234",
                playerDiff: "1234"
            },
            { position: 2, name: "Ben", time: "1234", playerDiff: "1234" }
        ]
    };
};
