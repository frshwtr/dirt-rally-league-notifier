import { League } from "../src/model/League";
import { getLeagueData } from "../src/adapters/RaceNet/getLeagueData";
import * as fetch from "node-fetch";

jest.mock("node-fetch");
const mockFetch = <jest.Mock<fetch>>fetch;
describe("when getting league data from RaceNet", async () => {
    const expectedLeagueData: League = {
        board: [
            {
                position: 1,
                name: "Ben",
                time: "1234",
                playerDiff: "1234"
            },
            {
                position: 2,
                name: "Ben",
                time: "1234",
                playerDiff: "1234"
            }
        ],
        leagueName: "myLeague"
    };

    mockFetch.mockResolvedValue({ status: 200 });

    it("should return the league data", async () => {
        expect(await getLeagueData()).toEqual(expectedLeagueData);
    });

    it("should call an external service", async () => {
        await getLeagueData();
        expect(mockFetch).toBeCalled();
    });
});
