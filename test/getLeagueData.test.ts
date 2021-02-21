import { League } from "../src/model/League";
import { getLeagueData } from "../src/adapters/RaceNet/getLeagueData";

describe("when getting league data from RaceNet", () => {
    it("should return the league data", () => {
        const expectedLeagueData: League = {
            board: [
                { position: 1, name: "Ben", time: "1234", playerDiff: "1234" },
                { position: 2, name: "Ben", time: "1234", playerDiff: "1234" },
            ],
            leagueName: "myLeague",
        };

        expect(getLeagueData()).toBe(expectedLeagueData);
    });
});
