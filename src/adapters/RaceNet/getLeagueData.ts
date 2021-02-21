import { League } from "../../model/League";

export const getLeagueData = (): League => ({
    leagueName: "myLeague",
    board: [
        {
            position: 1,
            name: "Ben",
            time: "1234",
            playerDiff: "1234",
        },
        { position: 2, name: "Ben", time: "1234", playerDiff: "1234" },
    ],
});
